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
        <img src="Icons/bear1.png" alt="User profile photo" class="profile-photo">
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

