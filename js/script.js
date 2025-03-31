// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check if user has a theme preference stored
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('light-mode');
        body.classList.add(savedTheme);
        
        if (savedTheme === 'dark-mode') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    // Theme toggle click event
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // Custom amount toggle for donation
    const amountOptions = document.querySelectorAll('input[name="donation-amount"]');
    const customAmountDiv = document.querySelector('.custom-amount');
    
    amountOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.id === 'amount4') {
                customAmountDiv.style.display = 'block';
            } else {
                customAmountDiv.style.display = 'none';
            }
        });
    });
    
    // Payment method selection
    const paymentBtns = document.querySelectorAll('.payment-btn');
    const paymentForms = {
        upi: document.getElementById('upi-form'),
        card: document.getElementById('card-form'),
        netbanking: document.getElementById('netbanking-form')
    };
    
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const method = this.getAttribute('data-method');
            
            // Reset all buttons and hide all forms
            paymentBtns.forEach(b => b.classList.remove('active'));
            Object.values(paymentForms).forEach(form => form.style.display = 'none');
            
            // Activate selected button and show corresponding form
            this.classList.add('active');
            paymentForms[method].style.display = 'block';
        });
    });
    
    // Proceed to Payment Button Functionality
    const proceedBtns = document.querySelectorAll('.proceed-payment');
    
    proceedBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Validate required fields for donation
            const name = document.getElementById('donateName').value;
            const email = document.getElementById('donateEmail').value;
            const phone = document.getElementById('donatePhone').value;
            
            if (!name || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Determine selected payment method
            let selectedMethod = '';
            paymentBtns.forEach(btn => {
                if (btn.classList.contains('active')) {
                    selectedMethod = btn.getAttribute('data-method');
                }
            });
            
            // Determine selected amount
            let amount = '';
            amountOptions.forEach(option => {
                if (option.checked) {
                    if (option.id === 'amount1') amount = '500';
                    else if (option.id === 'amount2') amount = '1000';
                    else if (option.id === 'amount3') amount = '5000';
                    else if (option.id === 'amount4') {
                        amount = document.querySelector('.custom-amount input').value;
                    }
                }
            });
            
            if (!amount) {
                alert('Please select or enter a donation amount');
                return;
            }
            
            // Simulate payment gateway redirect
            alert(`Redirecting to ${selectedMethod.toUpperCase()} payment gateway for ₹${amount}`);
            
            // In a real implementation, you would redirect to the payment gateway
            // or submit form data to your server for processing
            
            // For simulation purposes, show a success message after a brief delay
            setTimeout(() => {
                const donateModal = document.getElementById('donateModal');
                const modalInstance = bootstrap.Modal.getInstance(donateModal);
                modalInstance.hide();
                
                showThankYouMessage(name, amount);
            }, 1500);
        });
    });
    
    // Function to show thank you message after donation
    function showThankYouMessage(name, amount) {
        // Create a Bootstrap toast for the thank you message
        const toastContainer = document.createElement('div');
        toastContainer.className = 'position-fixed bottom-0 end-0 p-3';
        toastContainer.style.zIndex = '11';
        
        toastContainer.innerHTML = `
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header bg-success text-white">
                    <strong class="me-auto">Thank You for Your Donation!</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    <p>Dear ${name},</p>
                    <p>Thank you for your generous donation of ₹${amount} to Vinayak Club. Your contribution will help us make a difference in our community.</p>
                    <p>A receipt has been sent to your email.</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(toastContainer);
        
        // Auto remove the toast after 8 seconds
        setTimeout(() => {
            document.body.removeChild(toastContainer);
        }, 8000);
    }
    
    // Form submission handlers
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            this.reset();
        });
    }
    
    const joinForm = document.getElementById('joinForm');
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your application to join Vinayak Club. We will review your application and contact you soon.');
            
            const joinModal = document.getElementById('joinModal');
            const modalInstance = bootstrap.Modal.getInstance(joinModal);
            modalInstance.hide();
            
            this.reset();
        });
    }
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you would handle login authentication here
            alert('Login functionality would be implemented with server-side authentication.');
        });
    }
    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // In a real application, you would handle signup with server-side code
            alert('Sign up successful! You can now log in with your credentials.');
            
            const signupModal = document.getElementById('signupModal');
            const modalInstance = bootstrap.Modal.getInstance(signupModal);
            modalInstance.hide();
            
            this.reset();
        });
    }
    
    // Donor Carousel Autoplay
    const donorCarousel = document.getElementById('donorCarousel');
    if (donorCarousel) {
        const carousel = new bootstrap.Carousel(donorCarousel, {
            interval: 5000,
            wrap: true
        });
    }
    
    // Activity Cards Expand/Collapse
    document.querySelectorAll('.activity-card').forEach(card => {
        const header = card.querySelector('.activity-header');
        header.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });

    // Razorpay Integration
    const donationForm = document.getElementById('donationForm');
    const customAmountInput = document.getElementById('customAmount');
    const amountRadios = document.querySelectorAll('input[name="donation-amount"]');

    // Show/hide custom amount input
    amountRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const customAmountDiv = document.querySelector('.custom-amount');
            if (this.value === 'custom') {
                customAmountDiv.style.display = 'block';
            } else {
                customAmountDiv.style.display = 'none';
            }
        });
    });

    // Handle form submission
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get selected amount
        let amount;
        const selectedRadio = document.querySelector('input[name="donation-amount"]:checked');
        if (selectedRadio.value === 'custom') {
            amount = parseInt(customAmountInput.value);
            if (!amount || amount < 1) {
                alert('Please enter a valid amount');
                return;
            }
        } else {
            amount = parseInt(selectedRadio.value);
        }

        // Get donor details
        const name = document.getElementById('donateName').value;
        const email = document.getElementById('donateEmail').value;
        const phone = document.getElementById('donatePhone').value;

        // Create order on your server
        createOrder(amount, name, email, phone);
    });

    // Ganesh Puja Countdown Timer
    initGaneshPujaCountdown();
    initParallaxEffect();
});

// Function to create order (you'll need to implement this on your server)
async function createOrder(amount, name, email, phone) {
    try {
        // Replace with your server endpoint
        const response = await fetch('/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount * 100, // Convert to paise
                name: name,
                email: email,
                phone: phone
            })
        });

        const order = await response.json();

        // Initialize Razorpay with UPI specific options
        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
            amount: order.amount,
            currency: "INR",
            name: "Vinayak Club",
            description: "Donation to Vinayak Club",
            image: "path/to/your/logo.png",
            order_id: order.id,
            handler: function (response) {
                // Handle successful payment
                verifyPayment(response);
            },
            prefill: {
                name: name,
                email: email,
                contact: phone
            },
            notes: {
                address: "Vinayak Club Office"
            },
            theme: {
                color: "#4e73df"
            },
            // UPI specific options
            method: {
                upi: true
            },
            // Prefer UPI as the primary payment method
            prefill: {
                name: name,
                email: email,
                contact: phone,
                method: "upi"
            },
            // UPI specific configuration
            config: {
                displayMode: "upi",
                upi: {
                    flow: "collect",
                    intent: "payment"
                }
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();

        rzp.on('payment.failed', function (response) {
            alert('Payment failed. Please try again.');
        });

    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    }
}

// Function to verify payment (you'll need to implement this on your server)
async function verifyPayment(response) {
    try {
        const verificationResponse = await fetch('/verify-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(response)
        });

        const result = await verificationResponse.json();
        
        if (result.success) {
            alert('Thank you for your donation!');
            // Close the modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('donateModal'));
            modal.hide();
            // Reset the form
            document.getElementById('donationForm').reset();
        } else {
            alert('Payment verification failed. Please contact support.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Payment verification failed. Please contact support.');
    }
}

// Ganesh Puja Countdown Timer
function initGaneshPujaCountdown() {
    // Function to calculate the next Ganesh Puja date
    function getNextGaneshPujaDate() {
        const today = new Date();
        const currentYear = today.getFullYear();
        
        // Ganesh Puja typically falls in August or September
        // Using Hindu lunar calendar calculation
        // For simplicity, we're using fixed dates based on typical occurrence
        // More accurate calculation would use actual Hindu calendar
        
        // Try this year's date (approximating as September 7)
        let ganeshPujaDate = new Date(currentYear, 8, 7); // Month is 0-indexed (8 = September)
        
        // If this year's date has passed, use next year's date
        if (today > ganeshPujaDate) {
            ganeshPujaDate = new Date(currentYear + 1, 8, 7);
        }
        
        // Update the display date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const displayDate = ganeshPujaDate.toLocaleDateString('en-US', options);
        const dateElement = document.getElementById('ganesh-puja-date');
        if (dateElement) {
            dateElement.textContent = displayDate;
        }
        
        return ganeshPujaDate;
    }
    
    // Calculate time remaining
    function updateCountdown() {
        const ganeshPujaDate = getNextGaneshPujaDate();
        const currentDate = new Date();
        
        // Calculate time difference in milliseconds
        const diff = ganeshPujaDate - currentDate;
        
        // Calculate time units
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Update DOM elements
        const daysElement = document.getElementById('countdown-days');
        const hoursElement = document.getElementById('countdown-hours');
        const minutesElement = document.getElementById('countdown-minutes');
        const secondsElement = document.getElementById('countdown-seconds');
        
        if (daysElement && hoursElement && minutesElement && secondsElement) {
            daysElement.textContent = days.toString().padStart(2, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
        }
    }
    
    // Check if the countdown elements exist in the DOM
    if (document.getElementById('countdown-days')) {
        // Initial update
        updateCountdown();
        
        // Update every second
        setInterval(updateCountdown, 1000);
    }
}

// Add parallax effect to Ganesh Puja section
function initParallaxEffect() {
    const ganeshSection = document.getElementById('ganeshpuja');
    if (!ganeshSection) return;
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Calculate movement amount
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        // Apply parallax effect to the section background
        ganeshSection.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
        
        // Apply effect to other elements for enhanced 3D feel
        const ganeshImage = ganeshSection.querySelector('.ganesh-puja-image img');
        const countdownContainer = ganeshSection.querySelector('.countdown-container');
        const ganeshInfo = ganeshSection.querySelector('.ganesh-puja-info');
        
        if (ganeshImage) {
            ganeshImage.style.transform = `perspective(1000px) rotateY(${moveX * 0.05}deg) rotateX(${-moveY * 0.05}deg) translateZ(10px)`;
        }
        
        if (countdownContainer) {
            countdownContainer.style.transform = `translateX(${moveX * 0.2}px) translateY(${moveY * 0.2}px)`;
        }
        
        if (ganeshInfo) {
            ganeshInfo.style.transform = `translateX(${-moveX * 0.1}px) translateY(${-moveY * 0.1}px)`;
        }
    });
} 