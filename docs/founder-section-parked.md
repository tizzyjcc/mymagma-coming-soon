# Founder section (parked)

Removed from the page on 2026-10-01 at the founder's request, to come back to later.
The styles (`.team`, `.team-grid`, `.team-stats`, `.team-list`, `.team-creds`, `.team-sign`) are still in `index.html`, so pasting this block back in before `<!-- 9. Waitlist -->` restores it. Also re-add `<li><a href="#team">Team</a></li>` to the nav.

Ideas agreed for the next version (from review, not yet built):
- A short pull quote in Trinidad's voice at the top.
- The four numbers (3 years, 22 appointments, $2,385, No clear why) as one large row across the full width.
- Story on the left; a visual on the right (an app mockup or a photo from behind, captioned as concept design).
- "It wasn't just me" as a quiet card; credentials as small tags next to the signature.

```html
    <!-- 8. Team -->
    <section class="team" id="team">
      <div class="wrap team-grid">
        <div class="team-intro reveal">
          <p class="label">Why we're building this</p>
          <h2 class="heading-lg">Built by someone who lived it.</h2>
          <p class="label team-sub team-sub--first">My deficiency inspired my magma</p>
          <div class="team-stats">
            <div><p class="stat-num">3 years</p><p class="stat-label">of symptoms</p></div>
            <div><p class="stat-num">22</p><p class="stat-label">doctor appointments</p></div>
            <div><p class="stat-num">$2,385</p><p class="stat-label">out of pocket</p></div>
            <div><p class="stat-num">No clear why</p><p class="stat-label">and still no support to manage it</p></div>
          </div>

          <p class="label team-sub">It wasn't just me</p>
          <p class="team-lead">Sharing my story surfaced the same pattern across friends and family.</p>
          <ul class="team-list">
            <li>The root cause goes unresolved, with no confidence it's being managed well.</li>
            <li>Dismissed because some numbers look fine, while the symptoms say otherwise.</li>
            <li>Trust lost in the system: in doctors and in the benchmarks.</li>
          </ul>
        </div>
        <div class="team-story reveal">
          <div class="team-body">
            <p>I grew up in Argentina and moved to Australia at 18 to follow a pull toward scientific innovation. I chose a double degree in biotechnology and finance on purpose: enough science to innovate, and enough commercial grounding to make sure that innovation actually reaches people.</p>
            <p>I started my career in a lab, then spent 6+ years in consulting, helping businesses scale across industries, including pharma, healthtech, telehealth and manufacturing. I've also been a commercial advisor to startups in the medtech space.</p>
            <p>All along I was looking for ways to support innovation in the space: helping others build their ideas, and considering building my own. A few came close, like a diagnostic app powered by computer vision and a rapid at&#8209;home flu test. None felt personal enough.</p>
            <p>Then my own health changed, and my frustration with the current system grew. That's when I knew what the next ten to twenty years were for, and I started my magma.</p>
          </div>

          <ul class="team-creds" aria-label="Background">
            <li>Bachelor of Science in Biotechnology (Distinction)</li>
            <li>Bachelor of Commerce in Finance (Distinction)</li>
            <li>6+ years consulting in pharma, manufacturing, healthtech and telehealth</li>
            <li>Commercial advisor to medtech startups</li>
          </ul>

          <p class="team-sign">Trinidad <span>Founder, my magma</span></p>
        </div>
      </div>
    </section>
```
