// Initialize Charts
const salesChartCtx = document.getElementById('salesChart').getContext('2d');
const categoryChartCtx = document.getElementById('categoryChart').getContext('2d');

const salesChart = new Chart(salesChartCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Monthly Sales',
      data: [120, 150, 180, 220, 300, 250, 400],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      fill: true,
      tension: 0.3
    }]
  }
});

const categoryChart = new Chart(categoryChartCtx, {
  type: 'doughnut',
  data: {
    labels: ['Electronics', 'Fashion', 'Home'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#007bff', '#ffc107', '#28a745']
    }]
  }
});

// Theme Toggle and Cookie Management
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  document.cookie = `theme=${theme}; path=/; max-age=31536000`; // Save for 1 year
});

// Apply Filters
const applyFilters = document.getElementById('applyFilters');
const ratingRange = document.getElementById('rating');
const ratingValue = document.getElementById('ratingValue');

ratingRange.addEventListener('input', () => {
  ratingValue.textContent = ratingRange.value;
});

applyFilters.addEventListener('click', () => {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const category = document.getElementById('category').value;
  const rating = ratingRange.value;

  alert(`Filters Applied:\nDate Range: ${startDate} - ${endDate}\nCategory: ${category}\nMinimum Rating: ${rating}`);
});

// Load Theme from Cookies
window.onload = () => {
  const cookies = document.cookie.split('; ');
  const themeCookie = cookies.find(row => row.startsWith('theme='));
  if (themeCookie) {
    const theme = themeCookie.split('=')[1];
    if (theme === 'dark') {
      document.body.classList.add('dark');
    }
  }
};
