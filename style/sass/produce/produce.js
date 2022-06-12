window.addEventListener("load", () => {
  AOS.init();
  const images = document.querySelectorAll(".one-item img");
  const produce = document.querySelector(".produce-item");
  const handleZoom = (e) => {
    let urlImg = e.target.getAttribute("src");
    const template = `<div class="lightbox">
  <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <div class="introl-sp">
          <div class="img">
              <img class="lightbox-image" src="${urlImg}" alt="">
          </div>
          <div class="text">
              <h3>Pepsi Sea</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur aliquam ut quo,
                  praesentium dolores asperiores, ipsam ullam quam mollitia vero eaque iste fuga sed nam!
                  Accusamus dicta possimus corrupti.</p>
              <a class="light-btn">Get Stated</a>
          </div>
      </div>
      <i class="fa fa-angle-right lightbox-next"></i>
  </div>
</div>`;
    produce.insertAdjacentHTML("beforeend", template);
  };
  [...images].forEach((item) => item.addEventListener("click", handleZoom));

  let index = 0;
  document.addEventListener("click", (e) => {
    const lightImg = document.querySelector(".lightbox-image");
    if (!lightImg) return;
    let lightSrc = lightImg.getAttribute("src");
    index = [...images].findIndex(
      (item) => item.getAttribute("src") === lightSrc
    );
    if (e.target.matches(".lightbox")) {
      e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".lightbox-next")) {
      index = index + 1;
      if (index > images.length - 1) {
        index = 0;
      }
      displayLightImage(lightImg, index);
    } else if (e.target.matches(".lightbox-prev")) {
      index = index - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      displayLightImage(lightImg, index);
    }
  });
  function displayLightImage(lightImage, index) {
    const title = document.querySelector(".text h3");
    const newSrc = [...images][index].getAttribute("src");
    const newName = [...images][index].nextElementSibling.textContent;
    title.textContent = newName;
    lightImage.setAttribute("src", newSrc);
  }
  barBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  window.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".bar")) {
      menu.matches(".active") && menu.classList.remove("active");
    }
  });
});
