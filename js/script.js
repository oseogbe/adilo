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

// Initially show the Hosting tab content
document.getElementById('hosting-content').classList.remove('hidden');
document.getElementById('hosting-content').classList.add('flex', 'items-start', 'text-left'); 