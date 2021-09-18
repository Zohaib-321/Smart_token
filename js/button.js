window.onload = function () {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("less");
  var btnText = document.getElementById("myBtn");
  moreText.style.display = "none";
  btnText.innerHTML = "Read more";
};

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("less");
  var btnText = document.getElementById("myBtn");
  if (btnText.innerHTML == "Read more") {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  } else {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
}
