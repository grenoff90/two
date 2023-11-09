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

// hide with zero balance
const balances = Array.from(document.querySelectorAll(".table .row ul.balance li:first-child"));
const hideBox = document.querySelector(".balances .inputs .hide-check-box input");

hideBox.addEventListener("click", () => {

    if (hideBox.checked)
    {
        balances.forEach((balance) => {
          let sequence =  Array.from(balance.textContent);
          let flag = false;
          for (let i = 0; i < sequence.length; i++)
          { 
                if (sequence[i] != 0)
                {
                    if (sequence[i] == '.')
                        continue;
                    flag = true;
                    break;
                }
          }
          if (flag == false)
          {
            balance.parentElement.parentElement.parentElement.style.display = "none";
          }
          else
          {
              flag = false;
          }
        });
    }else {
        balances.forEach((balance) => {
            balance.parentElement.parentElement.parentElement.style.display = "flex";
        });
    }

});

// search filter
const search = document.querySelector(".balances .inputs .search input");
const rowsTitles = Array.from(document.querySelectorAll(".table .row .title span"));
search.addEventListener("input", () => {
    rowsTitles.forEach((row) => {

        let title = row.textContent;
            if (title.toLowerCase().includes(search.value.toLowerCase()))
            {
                row.parentElement.parentElement.parentElement.style.display = "flex";
            }else {
                row.parentElement.parentElement.parentElement.style.display = "none";
            }
    });
    if (search.value == "")
    {
        rowsTitles.forEach((row) => {
            row.parentElement.parentElement.parentElement.style.display = "flex";
        });
    }
});




