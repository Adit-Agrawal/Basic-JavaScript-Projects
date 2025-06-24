# Hogwarts Admissions Countdown ⚡

A magical countdown timer for Hogwarts School of Witchcraft and Wizardry admissions! Watch the days, hours, minutes, and seconds tick down until admissions open for young witches and wizards.

## Screenshot

![Homepage](screenshots/preview.png)

## Features

- **Live Countdown Timer**: Real-time countdown displaying days, hours, minutes, and seconds
- **Dynamic Date Display**: Shows the exact admission start date and time
- **Automatic Expiration**: Displays closure message when the countdown reaches zero
- **Responsive Design**: Works seamlessly across different devices
- **Magical Theme**: Hogwarts-themed design with beautiful imagery
- **Zero-Padded Format**: Clean number formatting (e.g., "09" instead of "9")

## Demo

The countdown automatically calculates 10 days from the current date and displays:
- Current admission start date and time
- Live countdown in days, hours, minutes, and seconds
- Expiration message when admissions close


## Getting Started

### Prerequisites

- A modern web browser
- No additional dependencies required

### Installation

1. Clone or download the project files
2. Ensure `hogwarts.jpg` image is in the same directory
3. Open `index.html` in your web browser

### Running Locally

You can run this project by:
1. Double-clicking `index.html` to open in your default browser
2. Or serve via a local web server for better performance:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## How It Works

### Date Calculation
- Gets current date using `new Date()`
- Adds 10 days to current date for admission deadline
- Sets specific time (11:30 AM) for admission start

### Countdown Logic
1. **Target Date**: Creates future date 10 days from today at 11:30 AM
2. **Time Calculation**: Calculates difference between target and current time
3. **Unit Conversion**: Converts milliseconds to days, hours, minutes, seconds
4. **Real-time Updates**: Updates every second using `setInterval`
5. **Expiration Handling**: Shows closure message when countdown reaches zero

### Display Features
- **Dynamic Text**: Updates admission date display with proper formatting
- **Zero Padding**: Formats single digits with leading zeros
- **Live Updates**: Refreshes countdown every second
- **Expiration Message**: Replaces countdown with closure notice

## Code Structure

### Key Components

#### Date Arrays
```javascript
const months = ['January', 'February', ...];
const weekdays = ['Sunday', 'Monday', ...];
```

#### Date Calculation
```javascript
let tempDate = new Date();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
```

#### Time Conversion Constants
```javascript
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
```

### Core Functions

- **`getRemaindingTime()`**: Calculates and updates countdown display
- **`format()`**: Adds zero padding to single-digit numbers
- **`setInterval()`**: Runs countdown updates every second
- **Expiration Logic**: Clears interval and shows closure message when time expires

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: Date manipulation and DOM updates
- **No external libraries**: Pure JavaScript implementation

## Browser Compatibility

- Chrome 1+
- Firefox 1+
- Safari 1+
- Internet Explorer 9+
- Edge (all versions)

*Works in all modern browsers with full Date API support*

## File Descriptions

- **`index.html`**: Main page featuring Hogwarts-themed countdown interface
- **`app.js`**: Complete countdown logic including date calculations and DOM updates
- **`styles.css`**: Styling for the magical theme and responsive layout
- **`hogwarts.jpg`**: Themed image to enhance the magical experience


## License

This project is open source and available under the [MIT License](LICENSE).

---

*Welcome to Hogwarts! Your magical journey awaits! 🏰✨*