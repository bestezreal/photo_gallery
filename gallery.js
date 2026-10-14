function upDate(previewPic) {
  const selectedImage = previewPic.querySelector("img");
  console.log("Alt:", selectedImage.alt);
  console.log("Source:", selectedImage.src);

  const display = document.getElementById("image");
  display.textContent = selectedImage.alt;
  display.style.backgroundImage = 'url("' + selectedImage.src + '")';
}

function unDo() {
  const display = document.getElementById("image");
  display.style.backgroundImage = "none";
  display.textContent = "Hover over or focus on an image below to display it here.";
}

function addTabIndex() {
  console.log("Page loaded: adding tabindex to all figures.");
  const figures = document.querySelectorAll("figure");
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
  }
  console.log("Updated", figures.length, "figures.");
}
