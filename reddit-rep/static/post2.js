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

let slideIndex = 1;

// Call `showSlides` immediately after the DOM is loaded to show the first slide
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

async function getComments() {
    const response = await fetch("http://localhost:3000/api/comments");
    const comments = await response.json();
  
    const commentsList = document.getElementById("comments-list");
  
    comments.forEach((comment) => {
      // Create a container for each comment
      const li = document.createElement("li");
      li.classList.add("comment");
  
      // Header containing profile photo, username, and timestamp
      const header = document.createElement("div");
      header.classList.add("comment-header");
      header.innerHTML = `
        <img src="path/to/profile/photo.jpg" alt="${comment.username}'s profile picture">
        <div class="username">${comment.username}</div>
        <div class="timestamp">${new Date(comment.timestamp).toLocaleDateString()}</div>
      `;
  
      // Comment text
      const commentText = document.createElement("div");
      commentText.classList.add("comment-text");
      commentText.textContent = comment.text;
  
      // Buttons for actions
      const buttons = document.createElement("div");
      buttons.classList.add("comment-buttons");
      buttons.innerHTML = `
        <button>⬆️ 15 ⬇️</button>
        <button>Reply</button>
        <button>Award</button>
        <button>Share</button>
      `;
  
      // Append all parts to the comment container
      li.appendChild(header);
      li.appendChild(commentText);
      li.appendChild(buttons);
  
      // Add comment to the list
      commentsList.appendChild(li);
    });
  }
  
  async function getComments() {
    const response = await fetch("http://localhost:3000/api/comments");
    const data = await response.json();
  
    const commentsContainer = document.querySelector(".comments");
  
    // Clear existing content in the container
    commentsContainer.innerHTML = "";
  
    data.forEach((comment) => {
      // Create a container for each comment
      const commentWrapper = document.createElement("div");
      commentWrapper.className = "comment";
  
      // Add profile photo and username
      const userInfo = document.createElement("div");
      userInfo.className = "user-info";
      userInfo.innerHTML = `
        <img src="Icons/profile.png" alt="User profile photo" class="profile-photo">
        <span class="username">${comment.username}</span>
        <span class="timestamp">${new Date(comment.timestamp).toLocaleString()}</span>
      `;
  
      // Add the comment text
      const commentText = document.createElement("p");
      commentText.className = "comment-text";
      commentText.textContent = comment.text;
  
      // Add the action buttons
      const commentButtons = document.createElement("div");
      commentButtons.className = "comment-buttons";
      commentButtons.innerHTML = `
        <button class="reply-button">⬆️ 15 ⬇️</button>
        <button class="reply-button">Reply</button>
        <button class="award-button">Award</button>
        <button class="share-button">Share</button>
      `;
  
      // Append everything to the comment wrapper
      commentWrapper.appendChild(userInfo);
      commentWrapper.appendChild(commentText);
      commentWrapper.appendChild(commentButtons);
  
      // Add the comment wrapper to the comments container
      commentsContainer.appendChild(commentWrapper);
    });
  }
  
  // Fetch comments when the page loads
  getComments();
  
  