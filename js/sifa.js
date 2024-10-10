function toggleContent(contentId, button) {
    const content = document.getElementById(contentId);
    const isHidden = content.classList.contains('hidden');

    // Toggle visibility of the content
    if (isHidden) {
        content.classList.remove('hidden');
        content.classList.add('active'); // Add active class to change max-height
        button.textContent = 'Read Less';
    } else {
        content.classList.add('hidden');
        content.classList.remove('active'); // Remove active class to reset max-height
        button.textContent = 'Read More';
    }
}

function toggleAccordion(id) {
    const content = document.getElementById(id);
    content.classList.toggle('hidden');

    // Update the dropdown icon rotation
    const icon = document.getElementById('dropdown-icon' + id.charAt(id.length - 1));
    icon.classList.toggle('rotate-180');
}