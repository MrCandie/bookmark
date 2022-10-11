const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Hamburger button listener
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}

// tabs menu event listener

// tabs.forEach((tab) => {
//   document.querySelectorAll(".panel").forEach((panel) => {
//     tab.addEventListener("click", function (e) {
//       const clicked = e.target.dataset.target;

//       if (!panel.classList.contains("hidden")) {
//         panel.classList.add("hidden");
//         document.querySelector(`.${clicked}`).classList.remove("hidden");
//       }
//     });
//   });
// });

// if (tab.classList.contains("border-softRed")) {
//     tab.classList.remove("border-softRed");
//  }

tabs.forEach((tab) => {
  tab.addEventListener("click", onTab);
});

function onTab(e) {
  // deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-b-4",
      "border-softRed",
      "md:border-0"
    );
  });
  // deactivate all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });
  // activate tabs and panels
  e.target.classList.add("border-b-4", "border-softRed", "md:border-0");

  const clickedTab = e.target.dataset.target;
  document.querySelector(`.${clickedTab}`).classList.remove("hidden");
}
