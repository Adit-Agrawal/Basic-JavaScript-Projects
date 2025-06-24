# Video Project

A modern, interactive video player with a custom toggle switch and preloader animation. This project demonstrates advanced web development techniques including video controls, smooth animations, and loading states.

## Screenshots

### Preview
![Homepage](screenshots/preview.png)

## 🎬 Project Overview

This project features a full-screen video background with custom controls:
- **Custom Video Toggle**: Sleek switch button to play/pause the video
- **Preloader Animation**: Smooth loading screen before content appears
- **Responsive Design**: Adapts to different screen sizes
- **Modern UI**: Clean, minimalist interface with smooth animations

## ✨ Features

- **Custom Video Controls**: Toggle switch replaces default video controls
- **Preloader**: Animated loading screen with GIF
- **Auto-play Video**: Video starts automatically when page loads
- **Looping Video**: Continuous playback for background effect
- **Smooth Animations**: CSS transitions for button interactions
- **Responsive Layout**: Works across all device sizes
- **Accessibility**: Proper button labels and semantic HTML

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with video element
- **CSS3**: Advanced styling, animations, and responsive design
- **Vanilla JavaScript**: DOM manipulation and event handling
- **Video API**: HTML5 video controls and methods


## 🚀 Getting Started

### Prerequisites

- A modern web browser with HTML5 video support
- Video file (MP4 format recommended)
- Preloader GIF animation
- Local web server (recommended for video playback)

### Installation

1. **Clone or download** the project files to your local machine

2. **Add required assets**:
   - Add a `styles.css` file for styling
   - Add a `lion-video.mp4` video file (or update the src in HTML)
   - Add a `preloader.gif` animation file

3. **Serve the project**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Then open http://localhost:8000 in your browser
   ```

### Quick Setup

```bash
# Create project directory
mkdir video-project
cd video-project

# Add your files
# - Copy index.html and app.js
# - Add your video file as lion-video.mp4
# - Add your preloader GIF
# - Create styles.css with your custom styling

# Serve locally
python -m http.server 8000
```

## 🎯 How It Works

### Video Control Logic

The custom toggle switch controls video playback:

```javascript
// Toggle video play/pause
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");    // Move switch to "pause" position
    video.pause();                 // Pause the video
  } else {
    btn.classList.remove("slide"); // Move switch to "play" position
    video.play();                  // Play the video
  }
});
```

### Preloader Functionality

The preloader hides automatically when the page finishes loading:

```javascript
// Hide preloader when page loads
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
```

### Key JavaScript Features

- **Event-driven architecture**: Responds to user clicks and page load
- **CSS class manipulation**: Controls visual states through classes
- **HTML5 Video API**: Uses native video methods (play/pause)
- **Window load event**: Ensures all assets are loaded before hiding preloader


## 📱 Browser Compatibility

**Video Support:**
- Chrome 4+
- Firefox 3.5+
- Safari 3.1+
- Edge 12+
- iOS Safari 3.2+
- Android Browser 2.1+

**JavaScript Features:**
- All modern browsers
- IE 9+ (with minor adjustments)


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*"The best way to learn is by doing - now go create something amazing!"*