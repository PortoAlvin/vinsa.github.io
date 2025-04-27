document.getElementById("nextBtn").addEventListener("click", function() {
    window.location.href = "asmara.html"; // Ganti dengan halaman berikutnya
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[data-transition]");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});
const poems = [
    "Kalau cinta itu bintang,\nKamulah yang paling terang di langit hatiku.",
    "Kopi bisa pahit,\nTapi kamu selalu manis di ingatan.",
    "Kalau kamu senyum,\nHatiku auto loading bahagia~ 😍",
    "Aku bukan pujangga,\nTapi untukmu, aku bisa jadi puitis tiap hari.",
    "Kamu kayak alarm...\nSelalu bikin aku sadar betapa aku butuh kamu.",
    "Cintaku ke kamu itu kayak WiFi,\nKadang nggak kelihatan, tapi selalu nyambung 🥰"
  ];
  
  let current = 0;
  const poemBox = document.getElementById("poemText");
  const audio = document.getElementById("loveMusic");
  
  function nextPoem() {
    current = (current + 1) % poems.length;
    poemBox.innerText = poems[current];
  }
  
  function startLove() {
    document.getElementById("loveModal").style.display = "none";
    nextPoem();
    audio.play();
  }
  