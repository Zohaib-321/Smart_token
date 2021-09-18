const tabsBtn = document.querySelectorAll(".btn");
const tabsItems = document.querySelectorAll(".event");
tabsBtn.forEach((e) => {
  onTabClick(tabsBtn, tabsItems, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

const tabsBtn2 = document.querySelectorAll(".btn2");
const tabsItems2 = document.querySelectorAll(".event2");
tabsBtn2.forEach((e) => {
  onTabClick2(tabsBtn2, tabsItems2, e);
});
function onTabClick2(tabBtns2, tabItems2, item2) {
  item2.addEventListener("click", function (e) {
    let currentBtn2 = item2;
    let tabId2 = currentBtn2.getAttribute("data-tab");
    let currentTab2 = document.querySelector(tabId2);
    if (!currentBtn2.classList.contains("active")) {
      tabBtns2.forEach(function (item2) {
        item2.classList.remove("active");
      });
      tabItems2.forEach(function (item2) {
        item2.classList.remove("active");
      });
      currentBtn2.classList.add("active");
      currentTab2.classList.add("active");
    }
    $(".special__inner-slider").slick("setPosition");
    $(".special__inner-slider2").slick("setPosition");

  });
}

const tabsBtn3 = document.querySelectorAll(".btn3");
const tabsItems3 = document.querySelectorAll(".event3");
tabsBtn3.forEach((e) => {
  onTabClick3(tabsBtn3, tabsItems3, e);
});
function onTabClick3(tabBtns3, tabItems3, item3) {
  item3.addEventListener("click", function (e) {
    let currentBtn3 = item3;
    let tabId3 = currentBtn3.getAttribute("data-tab");
    let currentTab3 = document.querySelector(tabId3);
    if (!currentBtn3.classList.contains("active")) {
      tabBtns3.forEach(function (item3) {
        item3.classList.remove("active");
      });
      tabItems3.forEach(function (item3) {
        item3.classList.remove("active");
      });
      currentBtn3.classList.add("active");
      currentTab3.classList.add("active");
    }
  });
}
