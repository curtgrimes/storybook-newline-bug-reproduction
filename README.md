# Storybook newline bug reproduction

## Steps to reproduce

1. Have a story that has a render function that displays a value like: `The value is: {{ args.modelValue }}`. I have added this in MyTextarea.stories.ts in this reproduction.
1. Run `pnpm i`
1. Run `pnpm storybook`
1. Go to MyTextarea > Docs
1. Type a newline or backslash character into the textarea or the Storybook-generated args table

## Expected result

No error appears and the story preview updates to show the newline or backslash character

## Actual result

The story preview gets replaced with this error:

```
Error: Invalid or unexpected token
  at /node_modules/.cache/sb-vite/deps/@storybook_vue3_preview.js?v=25070878:5595:153
  at Array.map (<anonymous>))
  at generateComponentSource (/node_modules/.cache/sb-vite/deps/@storybook_vue3_preview.js?v=25070878:5595:138))
  at /node_modules/.cache/sb-vite/deps/@storybook_vue3_preview.js?v=25070878:5613:152
  at Array.map (<anonymous>))
  at generateTemplateSource (/node_modules/.cache/sb-vite/deps/@storybook_vue3_preview.js?v=25070878:5613:126))
  at generateSource (/node_modules/.cache/sb-vite/deps/@storybook_vue3_preview.js?v=25070878:5624:497))
  at watch.immediate (/node_modules/.cache/sb-vite/deps/@storybook_vue3_preview.js?v=25070878:5619:13))
  at callWithErrorHandling (/node_modules/.cache/sb-vite/deps/chunk-TDDZOC2C.js?v=25070878:1787:18))
```
