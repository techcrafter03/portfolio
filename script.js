const titles = [
  "System Integration Enthusiast",
  "Linux & Bash Developer", 
  "IoT Engineer",
  "Ausbildung Candidate 🇩🇪"
];
let i = 0, j = 0, current = "", isDeleting = false;
const el = document.querySelector('.subtitle');

function type() {
  if (!el) return;
  current = titles[i];
  if (isDeleting) {
    el.textContent = current.substring(0, j--);
  } else {
    el.textContent = current.substring(0, j++);
  }
  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % titles.length;
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();
