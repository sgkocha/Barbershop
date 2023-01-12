let moreBtnList = document.querySelectorAll(".works-more");
let memberMoreList = document.querySelectorAll(".team-member-more");
let clickCount = 0;

for (let i = 0; i < moreBtnList.length; i++) {
    moreBtnList[i].addEventListener("click", () => {
        memberMoreList[i].style.display = "block";
        moreBtnList[i].style.display = "none";
     });
}

