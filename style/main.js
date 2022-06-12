document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  let text = "Delicious and Healthful";
  const menu = document.querySelector(".wrap_menu");
  const detail = document.querySelector(".column1");
  const barBtn = document.querySelector(".bar");
  const btnD = document.querySelector(".btn_detail");
  let i = 0;
  let animateText = document.querySelector(".video_text h3");
  (function typeWriter() {
    if (i < text.length) {
      animateText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  })();
  //res toggle menu

  let flag;
  btnD.addEventListener("click", () => {
    detail.classList.toggle("active");
    flag = -1;
  });
  barBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    flag = 1;
  });
  document.addEventListener("click", function (e) {
    if (!flag) return;
    switch (flag) {
      case 1:
        if (!menu.contains(e.target) && !e.target.matches(".bar")) {
          menu.matches(".active") && menu.classList.remove("active");
          flag = -1;
        }
        break;
      case -1:
        if (!detail.contains(e.target) && !e.target.matches(".btn_detail")) {
          detail.matches(".active") && detail.classList.remove("active");
          flag = 1;
        }
        break;

      default:
        break;
    }
  });
});
