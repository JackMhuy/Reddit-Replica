document.querySelector('.dropdown-btn').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

  // Close dropdown if clicked outside
window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropdown-btn')) {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    }
    }
});