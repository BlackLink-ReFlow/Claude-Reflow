# Claude ReFlow version 1.2.0.3

A Chrome extension that lets you theme Claude.ai however you want. Got tired of the default colors? Change literally everything. *(With obvious caveats of course!)*

## What can ReFlow do?

- **Sidebar gradient**  Customize the sidebar with a gradient that actually sticks to your theme.
- **Accent colors**  Change buttons, gradients, SVG icon colors, whatever.
- **Chat styling**  Adjust user message backgrounds, input box colors, borders
- **Persistent settings**  Your theme survives page reloads and new chats
- **Theme Exporting** You can export/import ReFlow themes to share with others!

## Installation:

1. Clone this repo or download the files
2. Go to `chrome://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked" and select the extension folder
5. Done

## How to use:

As of the most recent version there is now a small *"Welcome to Claude ReFlow"* popup when you start the extension for the first time, you can also replay that popup using the **Claude ReFlow**, or **ReFlow** settings button at the bottom left of your sidebar.

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

## Additional Functions:
- **Quick Themes** Allows you to pick between 4 different starter presets ranging from: ReFlow Default, Monotone, Midnight, and Sunset.
- **Button Icon/Button Label** You can change how the ReFlow settings button looks by either using the gear icon or the ReFlow wave logo in white, If you are using light mode I suggest you use the Gear though. Another thing to mention is that this tool is not fully optimized for Claude's light mode, so I suggest using Dark Mode if you plan to use this extension majorly. 
- **Import/Export** I am aware I mentioned this earlier, you can import and export ReFlow presets to share with others if you would like to.

## Notes:

- The extension hooks into Claude's DOM pretty aggressively to apply styles. If Claude's UI updates significantly, some selectors might need tweaking
- Inline styles are used to force colors through CSS specificity hell. It works but it's not elegant
- Gradients on the top banner and sidebar are applied via JavaScript for reliability
- The reason it says v1.2.0.3 instead of v1.2.0 is because I had literated on some developer copies before I came out with v1.2.0.3, therefore the v1.2.0.3 will be the public version of v1.2.0. 
- There is a hidden easter egg in the images folder..

**(THESE ARE OLD PREVIEWS YOU CAN SCROLL DOWN TO SEE THE MOST RECENT ONES.)**
Before: <img width="1904" height="907" alt="image" src="https://github.com/user-attachments/assets/64b80d7d-f765-48e2-88a2-7f2b37eb0820" />

After: <img width="1908" height="912" alt="image" src="https://github.com/user-attachments/assets/6b13c3f2-c7d3-4af9-bfdb-676debe9250e" />

**v1.2.0.3 Preview screenshots:**
Before: <img width="1917" height="914" alt="Screenshot 2026-08-01 080718" src="https://github.com/user-attachments/assets/1b3d0d65-a83d-482a-89ce-d1bcd4334b90" />

After: <img width="1913" height="910" alt="Screenshot 2026-08-01 080359" src="https://github.com/user-attachments/assets/a43136b2-334d-42bb-a274-4b8414a5f627" />

## Issues?

If something breaks, open devtools (F12) and check the console for errors. Claude.ai's class names change sometimes, so selectors might need updates.
If you find any bugs please submit it in the GItHub Issues section of this repo. I plan to potentially put ReFlow on the Chrome Web Store too, so when that happens I will update this README to include a link to it.

---

made at 1:36 AM fueled by spite for Anthropic's UI architects *(Yes this is a joke because when I was doing v1.0 the selectors were a huge pain to set-up correctly.)*

## CHANGELOG: (V1.2.0.3)
- Fixed a bug where the Chat Background selector didn't cover the "Claude is AI and can make mistakes." disclaimer. 
- Fixed a bug where the Chat Background selector was aggressively bleeding into the Claude settings menu instead of staying inside the primary chat interface.
- General performance patches, and rendering issues when using the extension.
- Added the ability to export and import Claude ReFlow presets with a title, and description. **(Panel for previewing the description and Preset will be coming in a future update.)**
- Added the ability to change the color of the text when hovering over recent chats or sidebar buttons via a picker titled: "Sidebar Hover Text Color".
- Added a small welcome guide that automatically appears in the center of the user's screen upon using Claude ReFlow for the first time.
- Fixed a bug where if you clicked on the ReFlow settings menu again after opening it, it wouldn't close.
- There more I have not listed here, sorry but I have been working on this for the past couple weeks/months.

### Bugs that I am aware of and will be fixing in a future update:
- Accent color no longer applies to the Model selector button, or the tool buttons under Claude's responses, or the "+" button to add files or skills, or the example prompts on the claude.ai/new page.
- Message send button on claude.ai/new still displays in orange (DEFAULT) rather than the ReFlow accent color.
- The pickers: Text Color, and Sidebar Background don't actually do anything. 

**Once Again, if you spot any bugs that are not listed above, please report them to me via the Issues tab on this repo!** 
