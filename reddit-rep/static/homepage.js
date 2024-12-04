// Aside Dropdown
const dropDownHeader = document.querySelector('.dropdown-header');
const dropDownContent = document.querySelector('.dropdown-content');

dropDownHeader.addEventListener('click', () => {
    // Toggle the 'close' class
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

//pfp drop down

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

// Share dropdown functionality for multiple buttons
const shareButtons = document.querySelectorAll('.interactive-buttons[id="share"]'); // Select all share buttons
let currentOpenMenu = null; // Variable to track the currently open dropdown menu

shareButtons.forEach(share => {
    const shareDropdownMenu = share.nextElementSibling; // Get the corresponding dropdown menu (next sibling)

    // Toggle dropdown visibility when a share button is clicked
    share.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the document click handler from triggering immediately

        // If there is another menu open, close it
        if (currentOpenMenu && currentOpenMenu !== shareDropdownMenu) {
            currentOpenMenu.style.display = 'none';
        }

        // Toggle the clicked menu
        shareDropdownMenu.style.display = shareDropdownMenu.style.display === 'flex' ? 'none' : 'flex';

        // Update the currently open menu
        currentOpenMenu = shareDropdownMenu.style.display === 'flex' ? shareDropdownMenu : null;
    });

    // Close dropdown if clicked outside the share button or menu
    document.addEventListener('click', (event) => {
        if (!share.contains(event.target) && !shareDropdownMenu.contains(event.target)) {
            shareDropdownMenu.style.display = 'none';
            currentOpenMenu = null; // Reset the open menu
        }
    });
});

//togglable stars
function changeImage(img) {
    const currentSrc = img.src; // Full URL of the image
    if (currentSrc.endsWith("toggle-star.jpg")) {
        img.src = "images-and-icon/star.jpg";
    } else {
        img.src = "images-and-iconi/toggle-star.jpg";
    }
}

function toggleUpvote(upvoteImg) {
    const button = upvoteImg.closest("#like-button"); // Get the parent button
    const downvoteImg = button.querySelector(".downvote-image"); // Get the downvote image
    const currentUpvoteSrc = upvoteImg.src; // Get current src of upvote image
    const likeNumber = button.querySelector(".like-number");

    // Check if the button is in the "upvoted" state
    if (currentUpvoteSrc.endsWith("upvote.jpg")) {
        // Change to "upvoted" state
        button.style.backgroundColor = "#d93900"; // New background color
        upvoteImg.src = "images-and-iconi/cl-upvoted.jpg"; // New upvote image
        downvoteImg.src = "images-and-iconi/uncl-downvoted.jpg"; // New downvote image
        likeNumber.style.color = "white";
    } else if (currentUpvoteSrc.endsWith("uncl-upvoted.jpg")) {
        button.style.backgroundColor = "#d93900"; // New background color
        upvoteImg.src = "images-and-iconi/cl-upvoted.jpg"; // New upvote image
        downvoteImg.src = "images-and-iconi/uncl-downvoted.jpg"; // New downvote image
        likeNumber.style.color = "white";
    } else {
        // Revert to original state
        button.style.backgroundColor = "#e5ebee"; // Reset background color
        upvoteImg.src = "images-and-iconi/upvote.jpg"; // Original upvote image
        downvoteImg.src = "images-and-iconi/downvote.jpg"; // Original downvote image
        likeNumber.style.color = "black";
    }
}

function toggleDownvote(downvoteImg) {
    const button = downvoteImg.closest("#like-button"); // Get the parent button
    const upvoteImg = button.querySelector(".upvote-image"); // Get the downvote image
    const currentDownvoteSrc = downvoteImg.src; // Get current src of upvote image
    const likeNumber = button.querySelector(".like-number");

    // Check if the button is in the "downvote" state
    if (currentDownvoteSrc.endsWith("downvote.jpg")) {
        button.style.backgroundColor = "#6b5cff"; // New background color
        upvoteImg.src = "images-and-iconi/uncl-upvoted.jpg"; // New upvote image
        downvoteImg.src = "images-and-iconi/cl-downvoted.jpg"; // New downvote image
        likeNumber.style.color = "white";
    } else if (currentDownvoteSrc.endsWith("uncl-downvoted.jpg")) {
        button.style.backgroundColor = "#6b5cff"; // New background color
        upvoteImg.src = "images-and-iconi/uncl-upvoted.jpg"; // New upvote image
        downvoteImg.src = "images-and-iconi/cl-downvoted.jpg"; // New downvote image
        likeNumber.style.color = "white";
    } else {
        // Revert to original state
        button.style.backgroundColor = "#e5ebee"; // Reset background color
        upvoteImg.src = "images-and-iconi/upvote.jpg"; // Original upvote image
        downvoteImg.src = "images-and-iconi/downvote.jpg"; // Original downvote image
        likeNumber.style.color = "black";
    }
    
    
}

