# Card Alert - Notification Modals

This project showcases a simple implementation of modal windows (popups) with various notification types: **Error**, **Warning**, **Success**, and **Info**. Each modal can be triggered using the corresponding buttons on a card interface. The project is designed with HTML, CSS, and JavaScript, and uses FontAwesome for icons.

## Features

- **Responsive Design**: The layout adapts for different screen sizes, providing a user-friendly experience on both desktop and mobile devices.
- **Notification Modals**: Each modal represents a different notification type:
  - **Error**: Displayed when something goes wrong.
  - **Warning**: Triggered for cautionary messages.
  - **Success**: Shown after successful actions.
  - **Info**: Provides additional information or help.
- **Animations on Hover**: The buttons grow in size when hovered over, providing interactive feedback.
- **Custom Colors**: Each modal has its own color scheme for easier differentiation.
- **Mobile Friendly**: Optimized for smaller screens with CSS media queries.

## Technology Stack

- **HTML5**: For the structure of the page.
- **CSS3**: Used for styling and responsiveness.
- **JavaScript**: Handles the modal functionality and button interactions.
- **FontAwesome**: Provides the icons for the buttons.

## Installation

1. Clone the repository or download the files.
    ```bash
    git clone https://github.com/yourusername/card-alert-modals.git
    ```

2. Open the `index.html` file in your browser to view the project.

## File Structure

|-- index.html # Main HTML file |-- style.css # Stylesheet for the project |-- script.js # JavaScript for modal functionality |-- README.md # This README file


## How It Works

### Buttons
Each button on the card triggers a specific modal. The buttons are styled with FontAwesome icons and expand when hovered.

- **Info Button**: Opens an informational modal.
- **Success Button**: Displays a success message.
- **Warning Button**: Shows a warning message.
- **Error Button**: Triggers an error notification.

### Modal Behavior
The modals are hidden by default. When a button is clicked, the respective modal is shown, and users can close it by clicking the "X" button at the top-right corner of the modal.

### JavaScript
A simple JavaScript function handles the opening and closing of modals. The `toggleModal` function is used to display or hide the modals based on user interaction.

## Customization

- **Icons**: The icons can be changed by updating the FontAwesome class inside each button. For example:
  ```html
  <i class="fas fa-info-circle custom_info"></i>
