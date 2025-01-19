

const section = document.getElementsByClassName("section");
const list = Array.from(section);

document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementsByClassName("section");
  const list = Array.from(section);

  // Hàm mở section
  window.openSection = function (id) {
    // Ẩn tất cả các phần tử
    list.forEach((x) => x.style.display = 'none');

    // Kiểm tra nếu phần tử với ID được tìm thấy
    if (list[id] === undefined) {
      console.error('Element not found for ID:', id);
      return;
    }

    // Hiển thị phần tử được chọn
    const section = list[id];
    section.style.display = "block";
    // section.innerHTML = ""; // Đảm bảo nội dung được làm mới
    if (id === 0) {
      const welcomeSection = document.getElementById('welcome');
      welcomeSection.style.display = 'block'; // Hiển thị lại welcome
    }
    // Nếu ID là 1 (Group diary), tải nội dung từ groupdiary.html
    if (id === 1) {
      const groupDiarySection = document.getElementById('group-diary');
      fetch("groupDiary.html")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load content: " + response.statusText);
          }
          return response.text(); // Chuyển đổi nội dung thành chuỗi HTML
        })
        .then((html) => {

          groupDiarySection.innerHTML = html; // Thêm nội dung vào section
          const week = document.getElementsByClassName("tab-week");
          const listWeek = Array.from(week);
          const weekBtn = document.getElementsByClassName("btn-week");
          const listBtnWeek = Array.from(weekBtn);
          let flag = false;
          function openWeek(id) {
            listWeek.forEach((item) => item.style.display = 'none');
            listBtnWeek.forEach((item) => item.style.textDecoration = 'none');
            if (listWeek[id]) {
              listWeek[id].style.display = "block";
              listBtnWeek[id].style.textDecoration = "underline";
            } else {
              console.error('Không tìm thấy phần tử tuần với ID:', id);
            }
          }
          openWeek(0);

          listBtnWeek.forEach((btn, index) => {
            btn.addEventListener("click", function () {
              openWeek(index); // Gọi openWeek với ID của button được click
            });
          });
        })
        .catch((error) => {
          console.error(error);
          groupDiarySection.innerHTML = "<p>Error loading content.</p>"; // Thông báo lỗi
        });
    }
    if (id === 2) {
      const projectSection = document.getElementById('projects');
      fetch("project.html")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load content: " + response.statusText);
          }
          return response.text(); // Chuyển đổi nội dung thành chuỗi HTML
        })
        .then((html) => {
          projectSection.innerHTML = html; // Thêm nội dung vào section
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
          openTab(0);
          listLink.forEach((btn, index) => {
            btn.addEventListener("click", () => openTab(index));
          });

          
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


        })
        .catch((error) => {
          console.error(error);
          projectSection.innerHTML = "<p>Error loading content.</p>"; // Thông báo lỗi
        });
    }
    if (id === 3) {
      const resultSection = document.getElementById('Result');
      fetch("result.html")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load content: " + response.statusText);
          }
          return response.text(); // Chuyển đổi nội dung thành chuỗi HTML
        })
        .then((html) => {
          resultSection.innerHTML = html; // Thêm nội dung vào section
        })
        .catch((error) => {
          console.error(error);
          resultSection.innerHTML = "<p>Error loading content.</p>"; // Thông báo lỗi
        });
    }
  }





});





function sendRedirect() {
  window.location.href = "https://nagit09.github.io/MasterChefBlog/";
}
// openSection(2);

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
