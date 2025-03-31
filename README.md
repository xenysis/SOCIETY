# Vinayak Club Website

A dynamic website for Vinayak Club, a registered society dedicated to community service and social welfare.

## Features

- **Responsive Design**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark mode
- **Member Area**: Sign up and login functionality for members
- **Join Us**: Application form for new member registrations
- **Donation System**: Integrated payment gateway with multiple payment options
- **Leadership Display**: Showcase of club leadership with contact information
- **Donor Slideshow**: Dynamic slideshow showing donor contributions
- **Contact Form**: Easy way for visitors to get in touch

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd vinayak-club
   ```

2. **Open the website**
   - Simply open the `index.html` file in your browser
   - For local development, you can use any simple local server

3. **Image Requirements**
   - Add the following images to the `images` folder:
     - `logo.png`: Club logo (recommended size: 150x50px)
     - `hero-bg.jpg`: Hero section background (recommended size: 1920x1080px)
     - `leader1.jpg` to `leader6.jpg`: Photos of 6 leaders (recommended size: 500x500px)
     - `donor1.jpg` to `donor6.jpg`: Photos of donors (recommended size: 200x200px)

## Structure

```
vinayak-club/
├── css/
│   └── style.css         # All styling for the website
├── js/
│   └── script.js         # JavaScript functionality
├── images/               # All website images
├── index.html            # Main HTML file
└── README.md             # This file
```

## Payment Gateway Integration

The website includes a simulated payment gateway for demonstration purposes. In a production environment, you would integrate with an actual payment gateway service like:

- Razorpay
- PayTM
- Stripe
- PayPal

To integrate with a real payment gateway:

1. Replace the payment form submission in `script.js` with the actual payment gateway API calls
2. Implement server-side code to handle payment verification and record-keeping

## Member Management

The current member signup and login system is frontend-only for demonstration. For a complete solution:

1. Implement a backend server (Node.js, PHP, etc.)
2. Set up a database to store member information
3. Create proper authentication and session management
4. Implement email verification and password reset functionality

## Customization

- **Colors**: Update the color scheme by modifying the CSS variables in `style.css`
- **Content**: Replace the placeholder text and images in `index.html` with your actual content
- **Features**: Add or remove features by modifying the HTML structure and corresponding JavaScript

## Browser Compatibility

The website is compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

## Credits

- Bootstrap 5: [https://getbootstrap.com/](https://getbootstrap.com/)
- Font Awesome: [https://fontawesome.com/](https://fontawesome.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details. 