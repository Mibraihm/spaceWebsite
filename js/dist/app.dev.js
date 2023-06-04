"use strict";

var listItems = document.querySelectorAll(".list"); // const item = document.querySelectorAll(".item");
// for navbarlist ..........

listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    listItems.forEach(function (item) {
      return item.classList.remove("active");
    });
    item.classList.add("active");
  });
}); // for destinationList ..........

var destinationList = document.querySelectorAll(".destList"); // const item = document.querySelectorAll(".item");

destinationList.forEach(function (list) {
  list.addEventListener("click", function () {
    destinationList.forEach(function (list) {
      return list.classList.remove("active1");
    });
    console.log(list.classList);
    list.classList.add("active1");
  });
}); // for articles ..........
// Get the list items and articles

var items = document.querySelectorAll(".destList");
var articles = document.querySelectorAll(".texts"); // Add click event listeners to each list item

items.forEach(function (item) {
  item.addEventListener("click", function () {
    // Get the article ID associated with the clicked item
    var articleId = item.dataset.article;
    var image = document.querySelector(".imageContainer").firstElementChild; // Remove 'show' class from all articles

    articles.forEach(function (article) {
      article.classList.remove("show");
    }); // Add 'show' class to the selected article

    document.getElementById(articleId).classList.add("show"); // Changing 'image' to the selected article

    if (articleId == "moonArticle") {
      image.src = "../assets/destination/image-moon.png";
    } else if (articleId == "marsArticle") {
      image.src = "../assets/destination/image-mars.png";
    } else if (articleId == "europaArticle") {
      image.src = "../assets/destination/image-europa.png";
    } else if (articleId == "titanArticle") {
      image.src = "../assets/destination/image-titan.png";
    } // Changing 'image' to the selected article


    var number = document.getElementById("number");

    if (articleId == "moonArticle") {
      number.innerText = "01";
    } else if (articleId == "marsArticle") {
      number.innerText = "02";
    } else if (articleId == "europaArticle") {
      number.innerText = "03";
    } else if (articleId == "titanArticle") {
      number.innerText = "04";
    }
  });
});