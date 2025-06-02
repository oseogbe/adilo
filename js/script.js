// Initially show the Hosting tab content
document.getElementById('hosting-content').classList.remove('hidden');
document.getElementById('hosting-content').classList.add('flex', 'items-start', 'text-left');

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and hide all content
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.add('hidden', 'items-start', 'text-left'));

        // Add active class to clicked button
        button.classList.add('active');

        // Show corresponding content
        const targetId = button.textContent.toLowerCase().replace(' ', '-') + '-content';
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.remove('hidden');
            targetContent.classList.add('flex', 'items-start', 'text-left');
        }
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.add('hidden');
  }
});

// Close mobile menu when window is resized to desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) { // lg breakpoint
    mobileMenu.classList.add('hidden');
  }
}); 