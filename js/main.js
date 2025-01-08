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
const week = document.getElementsByClassName("tab-week");
const listWeek = Array.from(week);
const weekBtn = document.getElementsByClassName("btn-week");
const listBtnWeek = Array.from(weekBtn);
let flag = false;

function openWeek ( id) {
listWeek.forEach ((item) => item.style.display='none');
listBtnWeek.forEach ((item) => item.style.textDecoration='none');
 week[id].style.display = "block";
 weekBtn[id].style.textDecoration = "underline";
}
function sendRedirect () {
  window.location.href ="https://nagit09.github.io/MasterChefBlog/";
}
openWeek(0);
// openSection(2);
openTab(0);

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      // Add active class to the clicked tab
      tab.classList.add('active');

      // Hide all tab panes
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
      // Show the corresponding tab pane
      document.getElementById(tab.getAttribute('data-target')).classList.add('active');
  });
});











/*===================
        LOGIN
======================
*/



document.getElementById('loginBtn').addEventListener('click', function () {
  document.getElementById('overlay').style.display = 'block';


  toggleForm('login');
  document.getElementById('registerForm').style.display = 'none';

});

document.getElementById('overlay').addEventListener('click', function (e) {
  if (e.target === this) {
      this.style.display = 'none';
  }
});

function toggleForm(formType) {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const hiddenRegisterForm = document.getElementById('register-form')


  loginForm.style.display = 'none';
  registerForm.style.display = 'none';
  hiddenRegisterForm.style.display = 'none';

  const loginTab = document.getElementById("tab-login");
  const registerTab = document.getElementById("registerTitle");
  if (formType === 'login') {
      loginTab.classList.add("active");
      loginTab.classList.remove("inactive");

      registerTab.classList.add("inactive");
      registerTab.classList.remove("active");

      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
      hiddenRegisterForm.style.display = 'none';

  } else if (formType === 'register') {
      registerTab.classList.add("active");
      registerTab.classList.remove("inactive");

      loginTab.classList.add("inactive");
      loginTab.classList.remove("active");


      registerForm.style.display = 'block';
      hiddenRegisterForm.style.display = 'block';

  }
}

function showRegisterForm() {
  const form = document.getElementById("registerForm");
  form.style.width = "auto";
  form.style.height = "auto";
  form.style.overflow = "visible";
  form.style.visibility = "visible";
}




document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".form-outline .form-control");

  inputs.forEach(input => {
      if (input.value) {
          input.classList.add("active");
      }

      input.addEventListener("input", function () {
          if (this.value) {
              this.classList.add("active");
          } else {
              this.classList.remove("active");
          }
      });

      input.addEventListener("focus", function () {
          this.classList.add("active");
      });

      input.addEventListener("blur", function () {
          if (!this.value) {
              this.classList.remove("active");
          }
      });
  });
});
