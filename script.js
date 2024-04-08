// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate login functionality
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // For simplicity, check if username and password are not empty
    if (username && password) {
      // If login is successful, display the booking page
      showBookingPage();
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  
  function showBookingPage() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('bookingPage').style.display = 'block';
    
    document.getElementById('bookSlotBtn').addEventListener('click', function(event) {
      event.preventDefault();
      
      // Get selected date, time, and user's email
      var date = document.getElementById('date').value;
      var time = document.getElementById('time').value;
      var email = document.getElementById('email').value;
      
      // For simplicity, just display a confirmation message
      alert('Slot booked successfully!\nDate: ' + date + '\nTime: ' + time);
      
      // Send email confirmation to the user
      sendEmailConfirmation(email, date, time);
    });
  }
  
  function sendEmailConfirmation(email, date, time) {
    emailjs.init('0bi6sQYMa_uxjfnV7'); // Replace '0bi6sQYMa_uxjfnV7' with your EmailJS user ID
    
    var templateParams = {
      to_email: email,
      booking_date: date,
      booking_time: time
    };
    
    emailjs.send('service_7y8pvsn', 'template_0eih7ne', templateParams)
      .then(function(response) {
        console.log('Email sent successfully:', response);
      }, function(error) {
        console.error('Error sending email:', error);
      });
  }