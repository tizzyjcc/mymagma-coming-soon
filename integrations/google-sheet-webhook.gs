/**
 * my magma — website quiz and waitlist receiver.
 *
 * Paste this into the Google Sheet "my magma — website quiz and waitlist"
 * (Extensions > Apps Script), then Deploy > New deployment > Web app,
 * Execute as: Me, Who has access: Anyone. Copy the Web app URL into
 * SHEET_ENDPOINT in index.html.
 *
 * The site sends one POST per event. Quiz answers and the waitlist email share
 * a Visitor ID, so a visitor's email lands on the same row as their answers.
 */

const HEADERS = [
  'Submitted at',
  'Visitor ID',
  'Q1: Would you want to know if something in your body was shifting before you felt it?',
  "Q2: Have you ever found out about something in your health later than you'd have liked?",
  'Q3: When was the last time you had a health check?',
  'Waitlist email',
  'Page',
];

const FIELD_COLUMN = { q1: 3, q2: 4, q3: 5, email: 6 };

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const visitorId = String(data.visitorId || '').slice(0, 64);
    if (!visitorId) return json({ ok: false, error: 'missing visitorId' });

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    // Keep the header row in step with the questions the site asks.
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);

    let row = findRow(sheet, visitorId);
    if (!row) {
      sheet.appendRow([new Date(), visitorId, '', '', '', '', String(data.page || '').slice(0, 200)]);
      row = sheet.getLastRow();
    }

    Object.keys(FIELD_COLUMN).forEach(function (key) {
      if (data[key] !== undefined && data[key] !== '') {
        // Leading apostrophe stops Sheets treating answers like "=..." as formulas.
        sheet.getRange(row, FIELD_COLUMN[key]).setValue("'" + String(data[key]).slice(0, 254));
      }
    });
    sheet.getRange(row, 1).setValue(new Date());
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function findRow(sheet, visitorId) {
  const last = sheet.getLastRow();
  if (last < 2) return 0;
  const ids = sheet.getRange(2, 2, last - 1, 1).getValues();
  for (let i = ids.length - 1; i >= 0; i--) {
    if (ids[i][0] === visitorId) return i + 2;
  }
  return 0;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
