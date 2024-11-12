const tab = document.getElementsByClassName("tab-content");
const tabLink = document.getElementsByClassName("tab-btn");
const listLink = Array.from(tabLink);
const listTab = Array.from(tab);

function openTab(index) {
  listLink.forEach(content => content.classList.remove("bg-primary"));
  listTab.forEach(content => content.classList.remove("active"));
  listTab[index].classList.add("active");
  listLink[index].classList.add("bg-primary");
}

const section = document.getElementsByClassName("section");
const list = Array.from(section);

function openSection (id) {
  list.forEach((x) => x.style.display = 'none' );
  list[id].style.display = "block";
  
}
openSection(2);
openTab(0);