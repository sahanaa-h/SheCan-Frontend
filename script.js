fetch('http://localhost:5000/api/user')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('referral').textContent = data.referral_code;
    document.getElementById('donations').textContent = data.donations;
  });
fetch('https://your-backend-url.onrender.com/api/user')
