// Desi Viral Video

console.log("Desi Viral Video Loaded");

// Search Function
const searchInput = document.querySelector(".search-box input");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      let title = card.querySelector("h3").innerText.toLowerCase();

      if (title.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Future Features
// Trending
// Categories
// Likes
// Views
// Video Link
// Admin Panel
