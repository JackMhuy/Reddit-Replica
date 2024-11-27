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
  try {
    const response = await fetch("http://localhost:3000/api/comments");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, "\n");

    const ul = document.querySelector(".comments ul"); // Ensure you target the correct <ul>
    ul.innerHTML = ""; // Clear existing comments before adding new ones

    data.forEach(comment => {
      const li = document.createElement("li");
      li.style.display = "flex"; // Flexbox for aligning elements
      li.style.flexDirection = "column"; // Column layout for the comment
      li.style.marginBottom = "20px"; // Add space between comments

      // Top section: profile photo and username
      const topSection = document.createElement("div");
      topSection.style.display = "flex"; // Align photo and username horizontally
      topSection.style.alignItems = "center";
      topSection.style.marginBottom = "5px"; // Space between top section and comment text

      // Profile photo
      const img = document.createElement("img");
      img.src = comment.profilePhoto;
      img.alt = `${comment.username}'s profile photo`;
      img.style.width = "40px";
      img.style.height = "40px";
      img.style.borderRadius = "50%";
      img.style.marginRight = "10px";

      // Username
      const username = document.createElement("p");
      username.style.fontWeight = "bold";
      username.style.margin = "0"; // Remove default margin
      username.textContent = comment.username;

      // Comment text
      const text = document.createElement("p");
      text.style.margin = "0"; // Remove default margin
      text.textContent = comment.text;

      // Append username and photo to the top section
      topSection.appendChild(img);
      topSection.appendChild(username);

      // Append top section and comment text to the list item
      li.appendChild(topSection);
      li.appendChild(text);

      // Append the list item to the <ul>
      ul.appendChild(li);
    });
  } catch (error) {
    console.error("Failed to fetch comments:", error);
  }
}

// Fetch comments when the page loads
getComments();
