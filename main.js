// Interactive Growth Calculator Logic
function updateCalc() {
  const reachInput = document.getElementById('reachInput');
  if (!reachInput) return;
  const val = parseInt(reachInput.value);
  document.getElementById('reachVal').innerText = val.toLocaleString();
  const type = document.getElementById('campaignType').value;
  let resultText = '';
  
  if (type === 'email') {
    resultText = `${Math.round(val * 0.34).toLocaleString()} Estimated Opens`;
  } else if (type === 'seo') {
    resultText = `${Math.round(val * 0.08).toLocaleString()} Estimated Clicks (8% CTR)`;
  } else {
    resultText = `${Math.round(val * 0.015).toLocaleString()} Qualified Opportunities`;
  }
  document.getElementById('estResult').innerText = resultText;
}

// Modal Toggle Handlers
function openContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) modal.classList.add('active');
}
function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) modal.classList.remove('active');
}

// Form Submission Trigger
function handleFormSend() {
  const name = document.getElementById('formName').value;
  const email = document.getElementById('formEmail').value;
  const msg = document.getElementById('formMessage').value;
  location.href = `mailto:agsapurvsh@gmail.com?subject=${encodeURIComponent('Inquiry from ' + name)}&body=${encodeURIComponent(msg + '\n\n' + name + ' (' + email + ')')}`;
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Burger Menu Toggle
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (burgerBtn && navLinks) {
    burgerBtn.onclick = () => navLinks.classList.toggle('mobile-open');
  }

  // Active Link Highlighter based on page URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Init estimator calculation if on home page
  updateCalc();
});