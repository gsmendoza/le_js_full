function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");

  let mainImage = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
      mainImage.setAttribute("alt", thumbnail.dataset.description);
    });
  });
}
