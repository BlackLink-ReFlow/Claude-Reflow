# Claude ReFlow

A Chrome extension that lets you theme Claude.ai however you want. Got tired of the default colors? Change literally everything.

## What Reflow does:

- **Sidebar gradient**  customize the sidebar with a gradient that actually sticks
- **Accent colors**  change buttons, links, gradients, SVG icons, whatever
- **Chat styling**  adjust user message backgrounds, input box colors, borders
- **Persistent settings**  your theme survives page reloads and new chats

## Installation:

1. Clone this repo or download the files
2. Go to `chrome://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked" and select the extension folder
5. Done

## How to use:

Click the **Claude Reflow** button at the bottom of the sidebar. A panel slides in from the right with all the color options. Pick whatever you want, hit "Save settings", and it applies instantly.

Settings persist using Chrome's sync storage, so they stick around even if you close the browser or start a new chat.

## What you can customize:

- Accent color (buttons, hover states)
- Sidebar background
- Text color
- Gradient colors (top banner and sidebar)
- SVG/loading icon colors
- User message backgrounds
- Input box styling (background, border, text)
- Settings menu text color

## Notes:

- The extension hooks into Claude's DOM pretty aggressively to apply styles. If Claude's UI updates significantly, some selectors might need tweaking
- Inline styles are used to force colors through CSS specificity hell. It works but it's not elegant
- Gradients on the top banner and sidebar are applied via JavaScript for reliability

Before: <img width="1904" height="907" alt="image" src="https://github.com/user-attachments/assets/64b80d7d-f765-48e2-88a2-7f2b37eb0820" />

After: <img width="1908" height="912" alt="image" src="https://github.com/user-attachments/assets/6b13c3f2-c7d3-4af9-bfdb-676debe9250e" />



## Issues?

If something breaks, open devtools (F12) and check the console for errors. Claude.ai's class names change sometimes, so selectors might need updates.

---

made at 1:36 AM fueled by spite for Anthropic's UI architects
