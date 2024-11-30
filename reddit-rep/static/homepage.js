const dropDownHeader = document.querySelector('.dropdown-header');
const dropDownContent = document.querySelector('.dropdown-content');

dropDownHeader.addEventListener('click', () => {
    // Toggle the 'open' class
dropDownContent.classList.toggle('close');
});

const dropDownHeaderi = document.querySelector('.dropdown-header-i');
const dropDownContenti = document.querySelector('.dropdown-content-i');

dropDownHeaderi.addEventListener('click', () => {
    // Toggle the 'open' class
dropDownContenti.classList.toggle('close');
});

const dropDownHeaderii = document.querySelector('.dropdown-header-ii');
const dropDownContentii = document.querySelector('.dropdown-content-ii');

dropDownHeaderii.addEventListener('click', () => {
    // Toggle the 'open' class
dropDownContentii.classList.toggle('close');
});



const profilePic = document.querySelector('#pfp');
const dropdownMenu = document.querySelector('.dropdown-menu');


profilePic.addEventListener('click', () => {
dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});


document.addEventListener('click', (event) => {
if (!profilePic.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = 'none';
}
});
