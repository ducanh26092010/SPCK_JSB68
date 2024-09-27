// lay ra danh sach cac card co trong entities
const cardList = document.querySelectorAll(".my-card");

// bat su kien cho tung card
cardList.forEach((card) => {
  // them su kien khi click vao my-card
  card.onclick = function () { 
    // tim toi card body -> them/ xoa class show
    card.querySelector(".my-card-body").classList.toggle("show");
  };
});
