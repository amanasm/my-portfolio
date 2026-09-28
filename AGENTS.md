<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Portfolio content is organized into reusable sections and typed data under `src/components/portfolio`; this keeps the single-page experience maintainable.
- Character gaze uses pre-extracted WebP frames rendered on canvas rather than video seeking; this keeps pointer interaction smooth and prevents double-image ghosting.
- Interface sound uses opt-in synthesized Web Audio tones; this avoids autoplay restrictions and keeps the experience lightweight.
