window.addEventListener("load", () => {
  AOS.init();
  const clickMien = document.querySelectorAll(".wrapper-item");
  const wrapper = document.querySelector(".list-store-wrapper");
  const title = document.querySelector(".store-title");
  const itemClick = document.querySelectorAll(".wrapper-item");
  const barBtn = document.querySelector(".bar");
  const menu = document.querySelector(".wrap_menu");
  const myStore = [
    [
      {
        name: "Nhà Phân Phối Tuệ Minh",
        chi: "Chi Nhánh Miền Bắc",
        url: "./img/phanphoi1.jpg",
      },
      {
        name: "Nhà Phân Phối Long Khánh",
        chi: "Chi Nhánh Miền Bắc",
        url: "./img/phanphoi2.jpg",
      },
      {
        name: "Nhà Phân Phối Văn Minh",
        chi: "Chi Nhánh Miền Bắc",
        url: "./img/phanphoi3.jpg",
      },
      {
        name: "Nhà Phân Phối Huy Hùng",
        chi: "Chi Nhánh Miền Bắc",
        url: "./img/phanphoi4.jpg",
      },
      {
        name: "Nhà Phân Phối Long Hùng",
        chi: "Chi Nhánh Miền Bắc",
        url: "./img/phanphoi5.jpg",
      },
      {
        name: "Nhà Phân Phối Minh Huệ",
        chi: "Chi Nhánh Miền Bắc",
        url: "./img/phanphoi6.jpg",
      },
    ],
    //mientrung
    [
      {
        name: "Nhà Phân Phối Huy Long",
        chi: "Chi Nhánh Miền Trung",
        url: "./img/phanphoi7.jpg",
      },
      {
        name: "Nhà Phân Phối Long Khánh",
        chi: "Chi Nhánh Miền Trung",
        url: "./img/phanphoi8.jpg",
      },
      {
        name: "Nhà Phân Phối Văn Hùng",
        chi: "Chi Nhánh Miền Trung",
        url: "./img/phanphoi5.jpg",
      },
      {
        name: "Nhà Phân Phối Long Hùng",
        chi: "Chi Nhánh Miền Trung",
        url: "./img/phanphoi2.jpg",
      },
      {
        name: "Nhà Phân Phối Phương My",
        chi: "Chi Nhánh Miền Trung",
        url: "./img/phanphoi7.jpg",
      },
      {
        name: "Nhà Phân Phối My Huệ",
        chi: "Chi Nhánh Miền Trung",
        url: "./img/phanphoi8.jpg",
      },
    ],
    //mien nam
    [
      {
        name: "Nhà Phân Phối Văn Hùng",
        chi: "Chi Nhánh Miền Nam",
        url: "./img/phanphoi1.jpg",
      },
      {
        name: "Nhà Phân Phối Mạnh Hương",
        chi: "Chi Nhánh Miền Nam",
        url: "./img/phanphoi2.jpg",
      },
      {
        name: "Nhà Phân Phối Minh Vũ",
        chi: "Chi Nhánh Miền Nam",
        url: "./img/phanphoi6.jpg",
      },
      {
        name: "Nhà Phân Phối Quang Long",
        chi: "Chi Nhánh Miền Nam",
        url: "./img/phanphoi3.jpg",
      },
      {
        name: "Nhà Phân Phối Huy Mạnh",
        chi: "Chi Nhánh Miền Nam",
        url: "./img/phanphoi5.jpg",
      },
      {
        name: "Nhà Phân Phối My Huệ",
        chi: "Chi Nhánh Miền Nam",
        url: "./img/phanphoi2.jpg",
      },
    ],
  ];
  const [bac, trung, nam] = myStore;
  const handleCall = (el) => {
    const tabId = parseInt(el.target.dataset.tab);
    wrapper.textContent = "";
    switch (tabId) {
      case 0:
        callFun(bac);
        break;
      case 1:
        callFun(trung);
        break;
      case 2:
        callFun(nam);
        break;

      default:
        break;
    }
  };
  [...itemClick].forEach((item) => item.addEventListener("click", handleCall));
  const callFun = (arr) => {
    if (!arr) return;
    title.textContent = `${arr[0].chi}`;
    handleStore(arr);
  };
  const handleStore = (arr) => {
    if (!arr) return;
    arr.forEach((item) => {
      let { name, chi, url } = item;
      let template = ` <div class="list-store-item" >
      <img src="${url}" alt="">
      <div class="wrap-text">
          <span>${chi}</span>
          <p class="name-store">${name}</p>
          <p>There are many variations of passages of lorem ipsum available, but the major.</p>
      </div>
      <a href="" class="btn-more">Contact Now</a>
  </div>`;
      wrapper.insertAdjacentHTML("beforeend", template);
    });
  };
  handleStore(myStore[0]);
  [...clickMien].forEach((item) => {
    item.addEventListener("click", () => {
      [...clickMien].forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
  //menu
  barBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  window.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".bar")) {
      menu.matches(".active") && menu.classList.remove("active");
    }
  });
});
