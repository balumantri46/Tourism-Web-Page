document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchInput = document.getElementById("search");
  const searchBtn = document.getElementById("search-btn");
  searchIcon.addEventListener("click", function () {
    searchIcon.style.display = "none";
    searchInput.style.display = "block";
    searchBtn.style.display = "block";
    searchInput.focus();
  });
  //adding click event to hide search elements when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest("#search-bar")) {
      //closest is used for checking whether the click is near it or not.
      searchIcon.style.display = "block";
      searchInput.style.display = "none";
      searchBtn.style.display = "none";
    }
  });
});

// Move to Top Button
const moveToTopButton = document.getElementById("moveToTop");

// Show button when user scrolls down 20px from the top of the document

// Scroll to the top of the document when the button is clicked
moveToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
