// mobile
const bars_aside = document.querySelector(".bars");
const mobile_menu = document.querySelector(".mobile-menu");
const close_menu = document.querySelector(".mobile-menu > i");
const profile = document.querySelector(".sub-menu a");
const profile_menu = document.querySelector(".sub-menu ul");

bars_aside.addEventListener("click", () => {
  mobile_menu.classList.add("active");
});

close_menu.addEventListener("click", () => {
  mobile_menu.classList.remove("active");
});

profile.addEventListener("click", () => {
  profile_menu.classList.toggle("active");
});

// upgrade
const upgradeNote = document.querySelector(".upgrade");
const close = upgradeNote.querySelector(".upgrade > i");

close.addEventListener("click", () => {
    upgradeNote.style.display = "none";
});

// side bar
const sideBar = document.querySelector("aside");
const bars = document.querySelector("aside > i");
const asideLinkes = document.querySelectorAll("aside ul li");
const main = document.querySelector("main");
const overley = document.querySelector(".overley");

bars.addEventListener("click", () => {
    sideBar.classList.toggle("shrink");
    main.classList.toggle("m-sh");
    if (innerWidth < 991 && !(sideBar.classList.contains("shrink"))) {
        overley.style.display = "block"; 
    }else{
        overley.style.display = "none"; 
    }

});

if (innerWidth < 991)
    sideBar.className = "shrink";

asideLinkes.forEach((li) => {
    li.addEventListener("click", () => {
        asideLinkes.forEach((li) => {
            li.classList.remove("active");
        });
        li.classList.add("active");
    });
});

// side-menu when scroll
window.addEventListener("scroll", () => {
    if (scrollY > 50)
    {
        sideBar.style.top = "0";
        overley.style.top = "0"; 
    }
    else
    {
        sideBar.style.top = "";
        overley.style.top = "50px"; 
    }
});
