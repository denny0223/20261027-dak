# AGENTS.md

Read `slide.md` and `devfest-2026.css` before editing. Keep author preferences, editorial constraints, and maintenance requirements here. Existing slides following a preference is not a reason to remove that instruction; avoid duplicating per-slide facts, asset inventories, or preparation history.

## Scope

- This is roughly a one-hour speaker-led demo for Taiwanese GDG participants. Do not turn it into an audience setup workshop or a general website course.
- Introduce data terms through examples without assuming a data engineering background. Preserve the anomaly-before-explanation sequence and the distinction between evidence and decisions.
- Make both the data and the final artifact understandable. Show what a row represents, what the metrics mean, and what the audience can inspect in the dashboard. A sequence of prompts or product features alone does not establish the story.
- Keep `/generative_ui` and the Chinese dashboard as part of the demo outcome, and retain one main-talk slide on `AI.FORECAST` inputs, outputs, and interpretation.

## Working Model

Approach each deck like a concise research presentation:

- Identify the central thesis before editing individual slides.
- Understand the audience, their prior knowledge, and what should change in their mind after the talk.
- Preserve the line of reasoning: motivation, context, evidence, interpretation, implication, and closure.
- Treat each slide as one move in an argument, not as an isolated Markdown fragment.
- Prefer clarity, sequence, and visual economy over decorative complexity.
- Distinguish claims, evidence, examples, and citations.

When the deck is about an organization, community, product, research topic, or historical narrative, avoid flattening it into a timeline. A good deck explains why events matter, what changed, and what the audience should infer.

## Editing Principles

- Keep edits scoped to the user request and the deck's existing style.
- Do not rewrite the author's voice unless the request is explicitly about tone, structure, or narrative.
- Improve slide flow by reducing ambiguity, strengthening transitions, and removing accidental redundancy.
- Prefer one strong idea per slide. If a slide carries multiple claims, split it or make the hierarchy explicit.
- Avoid turning slides into prose documents. Keep slide text sparse and concrete.
- Do not add speaker notes, scripts, rehearsal schedules, or fallback plans to this deck. Keep HTML comments limited to Marp directives.
- Public slides must stand on their own. Source lines should contain citations and attribution, not references to prior discussions, invitation drafts, or editing decisions. Prefer concrete cues, operations, and checkpoints to explanatory reminders; consolidate necessary data assumptions where they affect interpretation instead of repeating caveats across the deck.
- Preserve intentional pacing slides, title-only slides, full-bleed image slides, and pause slides unless they clearly break the requested goal.
- Keep terminology consistent across the deck, especially names, dates, roles, project titles, and recurring concepts.
- When adding factual claims, verify them from reliable sources or mark assumptions clearly for the user.
- When editing dates, statistics, event names, or attributions, prefer exactness over rhetorical convenience.

## Narrative And Argument Quality

Use the same standards expected in strong academic and technical talks:

- Every major claim should have a visible basis: data, example, source, lived evidence, or a clear warrant.
- The deck should make scope conditions clear. Avoid universal claims when the evidence is local, historical, or anecdotal.
- Avoid unexplained jumps between abstraction levels. If moving from a concrete example to a general principle, make the bridge legible.
- Introduce specialized terms before relying on them.
- Keep the audience's cognitive load low: one conceptual shift at a time, clear grouping, and minimal competing visual signals.
- Use contrast deliberately: before/after, problem/response, myth/reality, principle/example, local/global.
- End sections with synthesis, not just the next topic.

If a requested edit weakens the argument, explain the tradeoff briefly and propose a sharper alternative before making broad structural changes.

## Denny's Recurring Slides

Preserve these parts of the deck when editing or restructuring it:

- Opening order: cover, slide-link page, dashboard preview, speaker introduction, then the investigation. Show the outcome before explaining how it was produced.
- Use `Denny Huang` as the public speaker name, including cover text and author metadata.
- The slide-link page must show both a QR Code and a readable, clickable URL. Use `https://denny.one/<project-directory>/` as the publishing path unless the user supplies another URL. Keep the QR payload, visible link target, and front-matter `url` identical; do not invent a short link.
- Use the slide URL as the single QR entry point. Keep Lab and public transcript links clickable near the opening.
- Store the QR Code locally, with a white quiet zone and high contrast. Check the rendered size and decode it when a scanner is available. Avoid a runtime dependency on a remote QR service.
- Preserve the speaker introduction already in the deck. If the author supplies a replacement introduction or reference deck, keep its original Markdown bullet list, wording, and personal links. Typography and spacing may be adjusted for readability without changing that list. Do not regroup it into categories or cards, translate its wording, or invent credentials unless the user explicitly requests that change.
- Close the main talk with `Thanks for listening`, the usual CC BY-SA 4.0 notice, and the Marp logo and link. Optional reference appendices may follow this closing page without becoming part of the live talk.
- Apply the slide license to original slide content. Keep third-party media under their original rights and attribution; the closing notice must not silently relicense them.
- Carry these pages and their assets into the primary Marp source, not only into a README or preview. Use the deck's current visual style rather than importing the previous event's branding.
- Treat visual consistency as a shared visual grammar, not identical coordinates on every slide. Use the existing palette, fonts, recurring cues, and footer as anchors; adapt alignment, columns, type scale, and spacing to the slide's purpose and content density. Make routine layout adjustments within that visual system directly, and verify how the pages read beside their neighbors and in the whole deck.

## Visual And Media Standards

- Visuals should carry meaning, not merely decorate.
- Maintain image aspect ratios unless cropping is intentional.
- For full-bleed images, verify that the important subject is not hidden by slide text, pagination, or viewport cropping.
- Prefer stable local assets in the repository for repeatable builds.
- When adding external media embeds, consider offline behavior, privacy, accessibility, and whether the deck still communicates when the embed fails.
- Keep image filenames descriptive and durable.
- Preserve license and attribution information for reused assets.
- Preserve the frame artwork's alpha channels and aspect ratio, use white behind transparent content areas, and keep text clear of the GDG cutout. Keep the cover's location label editable. Use bottom-left pagination without a repeated event-name/date footer.
- Prefer landscape diagrams with short Chinese labels and readable code identifiers. Keep data sources, Agent/tool boundaries, evidence flow, and join grain visually distinct. Update diagrams when the corresponding explanation changes.

## Language And Tone

- Use Taiwan Traditional Chinese for prompts, field meanings, chart labels, and result explanations. Preserve original table names, SQL identifiers, filenames, product names, and commands; explain their Chinese meanings without changing the underlying schema.
- Keep slide copy concise, concrete, and speakable.
- Avoid generic marketing phrasing, inflated claims, and filler.
- Prefer active, direct phrasing when it improves comprehension.
- Preserve culturally specific terms, community names, and proper nouns carefully.

## Accessibility And Presentation Quality

- Ensure headings are readable from a distance.
- Avoid dense lists unless the slide is meant to be scanned as a reference.
- Watch for long lines, cramped text, low contrast, and overlapping elements.
- Use visual hierarchy consistently: title, subtitle, evidence, source, and aside should not compete equally.
- When possible, make links human-readable and preserve target URLs.
- Do not rely on color alone to communicate meaning.

## Denny's slide voice

Write slide bodies as live cues, not documentation.

Each slide should first show the thing the audience needs to locate, type, compare, or check. Denny can explain why live.

Use the style anchors below as the default reference for Denny's slide rhythm. If prior Denny decks are available in the working context and the task is a substantial style rewrite, sample a few before editing. Use them to refine rhythm and density, not to copy old topics.

### Slide Body Grammar

Core transform:

`README prose -> cue / artifact / command / contrast / expected output / 檢核點`

Evidence before explanation:

Start with a concrete artifact: screenshot, URL, demo state, path, command, prompt, case, data point, diagram, expected screen, expected output, or `檢核點`. Use `### 重點` or an equivalent summary cue only after the artifact or demo target is visible.

Sparse does not mean under-specified:

Public talks can use title-only beats. Workshops and courses still need enough state to follow the room: UI path, file path, command, expected result, recovery cue, or `檢核點`.

Every slide should have one visible anchor that tells the audience where they are. One anchor may be a pair: Before / After, Input / Output, You / Agent, Git / GitHub.

### Micro-Style

- Title shapes: `Survey`, `DEMO`, `Practice`, `檢核點`, `需求確認`, `除錯`, a URL, a file path, or a command.
- Question titles: `是否寫過程式？`, `Shell 熟悉程度`, `這個 diff 改了什麼？`
- Contrast titles: `Git / GitHub`, `Public / Private`, `Before / After`, `Input / Output`.
- Chinese / English mixing: Chinese for room cues; English for product names, commands, file paths, repo names, and terms people actually say.
- Body shape: 0-4 bullets, command block, screenshot, URL, repo path, prompt block, expected output, or small checklist.
- Failure cues: `總有意外`, `噢！`, `格式對，內容錯`.

### Rewrite Examples

- `建立可追蹤且具備責任分工的協作流程` -> `誰？改了什麼？`
- `讓學員理解 Markdown 到 JSON 的資料轉換流程` -> `Markdown -> JSON`
- `避免團隊協作時產生檔案衝突` -> `notes/<github>.md` + `不要共用同一個檔案`
- `透過本機預覽確認資料是否正確呈現` -> `pnpm run dev` + `看到自己的卡片`

Avoid:

- Turning each slide into a mini article.
- Marketing tone, motivational filler, or polished documentation voice.
- Over-translating domain-native terms such as `commit`, `diff`, `repo`, `schema`, `prompt`, or `Agent`.
- Explaining away all of the whitespace and timing.
- Replacing a concrete artifact with abstract summary.
- Adding text just because the idea feels important.
- Definition-first slides when a prompt, artifact, demo, or checkpoint would work.
- Objective-summary titles like `建立...`, `說明...`, `提升...`, `確保...`.
- Sentences that start with `透過...來...` but show no artifact, command, or decision.

Revision order:

1. Delete.
2. Shorten.
3. Replace with words Denny would say live.
4. Turn explanation into a cue, command, contrast, expected output, or checkpoint.
5. Add explanation only when the audience would be blocked without it.

Agent check:

- Is this a slide cue, or README prose?
- Does this work as a live cue, not documentation?
- Does the audience need to see this now, or can it be spoken live?
- Can this become one cue, one example, one operation path, or one expected output?
- Is there a visible anchor the audience can use to know where they are?
- For collaboration slides, is the human/tool boundary visible?

## Evidence

- Use the public sources cited in `slide.md`; consult the demo repository's README for operations and recorded results. Keep preparation conversations and temporary inputs out of the project.
- Verify new claims against source SQL/results. Record inputs, period, currency, and assumptions for numerical changes; do not present illustrative scenarios or historical test records as newly verified results.
- The dashboard is a saved artifact: `dbt build` does not refresh it, and exporting its HTML does not guarantee offline operation.
- Check product commands and cloud locations against the demonstrated environment. Slide work alone does not require cloud provisioning, queries, or cleanup.
- Keep forecast claims within the available evidence; filtering order types or forecasting does not establish a promotion's causal effect.

## Files and Build

Edit `slide.md` and `devfest-2026.css`; regenerate `index.html` rather than editing it. Run from the project root with Marp CLI on `PATH`:

```sh
marp slide.md -o index.html
marp slide.md -o index.html --watch
```

- Use repository-relative paths and public references; instructions must not depend on personal configuration or external agent instruction files.
- Use soft wrapping for Markdown prose. Do not hard-wrap paragraphs or split commands, URLs, inline code, or Chinese phrases for line length alone.
- Keep YAML front matter valid and minimal. Do not add project-specific metadata unless it serves the deck or publishing workflow.
- Use `---` for slide boundaries. Preserve Marp directives and slide-local classes unless changing them is part of the task.
- Prefer Marp-native image syntax for simple slides and HTML only when Marp syntax cannot express the layout cleanly. Keep custom CSS small and close to the existing visual system.
- Reuse local assets and installed fonts; do not introduce a package manager, theme framework, build pipeline, bundled fonts, or asset pipeline unless requested.
- Keep `.marprc.yml` and `.vscode/settings.json` consistent when changing the theme. After cover edits, refresh `assets/og-image.jpg`.
- Preserve production-only analytics; local previews must not send events. Check existing pageview behavior before adding tracking.
- Publish `index.html` and `assets/` together; retain the source, theme, and build configuration. Include `.nojekyll` when using GitHub Pages. HTML is the default deliverable; create PDF only when explicitly requested.

## Verification

- For content, theme, or asset edits, rebuild, inspect the diff, and check asset references. Check Markdown, front matter, slide separators, HTML tags, and Marp directives.
- For layout changes, render and inspect every slide for CJK wrapping, diagrams, code, source lines, brand placement, QR Code, and pagination. Review neighboring slides and whole-deck continuity; geometry checks alone do not establish visual fit. Keep QA output outside the project.
- For instruction-only edits, check referenced files and commands; no slide export is needed. Report any checks that could not be run.

## Collaboration With The User

- For small textual or structural fixes, make the change directly.
- For broad narrative restructuring, first state the proposed structure and the reasoning.
- For factual additions, cite or summarize the evidence path used.
- If the user's request is ambiguous, infer conservatively from the deck and existing style. Ask only when the choice changes the talk's thesis, audience, or publishing workflow.
- Keep final reports short: what changed, where, and how it was checked.
