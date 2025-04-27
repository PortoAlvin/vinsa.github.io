const poems = [
  "PLIS MAAFIN AKU",
  "PLIS PLIS MAAFIN AKU",
  "MAAFIN AKU YA SAYANG",
  "MAAFIN AKU YA PLISSSSSS"
];

const photos = [
  "Foto 1.JPG",
  "Foto 2.JPG",
  "Foto 5.JPG",
  "Foto 6.JPG"
];

let currentPoem = 0;
let currentPhoto = 0;
const poemBox = document.getElementById("poemText");
const audio = document.getElementById("loveMusic");
const loader = document.getElementById("loader");
const loveModal = document.getElementById("loveModal");
const content = document.querySelector(".content");
const lovePhoto = document.querySelector(".love-photo");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    loveModal.classList.remove("hidden");
  }, 1200);
});

function nextPoem() {
  currentPoem = (currentPoem + 1) % poems.length;
  poemBox.style.opacity = 0;
  setTimeout(() => {
    poemBox.innerText = poems[currentPoem];
    poemBox.style.opacity = 1;
  }, 300);
}

function changePhoto() {
  lovePhoto.style.opacity = 0;
  setTimeout(() => {
    currentPhoto = (currentPhoto + 1) % photos.length;
    lovePhoto.src = photos[currentPhoto];
    lovePhoto.style.opacity = 1;
  }, 300);
}

function startLove() {
  loveModal.style.display = "none";
  content.classList.remove("hidden");
  nextPoem();
  audio.play();
  document.body.classList.add("glow-background");

  setInterval(changePhoto, 1000); 
}
