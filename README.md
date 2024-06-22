# YouTube Smart Pause

**YouTube Smart Pause** is a Chrome extension that automatically pauses and plays YouTube videos when you switch between tabs, providing a seamless viewing experience.

## Features

- **Auto Pause/Play**: Automatically pauses YouTube videos when you switch away from the tab and resumes playback when you return.
- **Seamless Experience**: No need to manually pause and play videos, allowing for a more efficient workflow.

## Installation

1. **Clone or download this repository.**

2. **Open Chrome and go to** `chrome://extensions/`.

3. **Enable Developer mode** by clicking the toggle switch at the top right of the page.

4. **Click the "Load unpacked" button** and select the directory where you cloned or downloaded this repository.

## Usage

- Simply open a YouTube video in a tab.
- Switch to a different tab, and the video will automatically pause.
- Return to the YouTube tab, and the video will automatically resume playing.

## Development

### Files

- `manifest.json`: Defines the extension's configuration and permissions.
- `background.js`: Contains the service worker that handles tab change events.
- `content.js`: Contains the logic for pausing and playing the video based on tab visibility.
- `popup.html`: Displays information about the extension when the extension icon is clicked.
- `icon.png`: The extension's icon.

## Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome!

## Author 
[Shashank Reddy](https://github.com/shashank-amireddy)
