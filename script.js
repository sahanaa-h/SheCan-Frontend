fetch('http://localhost:5000/api/user')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('referral').textContent = data.referral_code;
    document.getElementById('donations').textContent = data.donations;
  });
fetch("https://shecan-backend-l579.onrender.com/api/user")
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('referral').textContent = data.referral_code;
    document.getElementById('donations').textContent = data.donations;
  })
  .catch(error => console.error("Error fetching data:", error));
