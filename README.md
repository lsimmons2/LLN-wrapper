In current state:

Just randomly plays the audio lines in the "Saved" tab of the Language Learning With Netflix sidebar. Just so you don't have to manually click the play button - I couldn't help my eye wandering and reading the text when I would manually click the play button.

To use:
1. Open up Chrome (other browsers work similarly to the following)
2. Go to extensions page (right-click on browser toolbar)
3. Enable "Developer Mode" in top right corner
4. "Load Unpacked"
5. Choose this directory
6. Watch a show with LLN, and save certains lines while watching (star button, or `R` shortcut)
7. Go to LLN sidebar, Saved tab
8. Open Dev Console
9. Press `<Shift-S>` to parse sidebar HTML, then `n` to hear audio of a new line, `m` to repeat audio of same line, `,` to have the actual text of the line printed out, `n` again to go to next line (you can change these in netflix_content_script.js), `S` to resparse HTML if adding or removing "Saved" lines
