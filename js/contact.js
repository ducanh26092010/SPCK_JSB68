function validateContactForm(email, message) {
  if (!(email && message)) {
    // khong nhap du 2 truong
    alert("Vui lòng nhập đầy đủ thông tin!");
    return false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    // email khong dung dinh dang
    alert("Vui lòng nhập email đúng định dạng!");
    return false;
  }
  return true;
}

function submitContact() {
  // lay du lieu tu html
  const email = document.getElementById("email-user");
  const message = document.getElementById("message-user");
  // kiem tra du lieu dau vao
  if (validateContactForm(email.value.trim(), message.value.trim())) {
    // form co thong tin chinh xac
    alert("Chúng tôi đã nhận được thông tin từ bạn, cảm ơn bạn!");
    // xoa du lieu trong truong nhap
    email.value = "";
    message.value = "";
    return;
  }
}

// bat su kien cho nut submit contact
document.getElementById("contact-btn").onclick = function (e) {
  e.preventDefault();
  submitContact();
};
