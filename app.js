var $ = document.querySelector.bind(document);

// Blur

$("#blur input").onchange = function() {
  var img = "#blur img";
  img.style.webkitFilter = "blur(" + this.value + "px" + ")";

  var heading = $("#blur h3");
  heading.textContent = "blur(" + this.value + "px)";
};

$("#blur input").value = 2;
$("#blur input").onchange();

// brightness
$("#brightness input").onchange = function() {
  var img = $("#brightness img");
  img.style.webkitFilter = "brightness(" + this.value + "%" + ")";

  var heading = $("#brightness h3");
  heading.textContent = "brightness(" + this.value + "%)";
};

$("#brightness input").value = 30;
$("#brightness input").onchange();

// Contrast

$("#contrast input").onchange = function() {
  var img = $("#contrast img");
  img.style.webkitFilter = "contrast(" + this.value + "%" + ")";

  var heading = $("#contrast h3");
  heading.textContent = "contrast(" + this.value + "%)";
};

$("#contrast input").value = 500;
$("#contrast input").onchange();

// GrayScale
$("#grayscale input").onchange = function() {
  var img = $("#grayscale img");
  img.style.webkitFilter = "grayscale(" + this.value + ")";

  var heading = $("#grayscale h3");
  heading.textContent = "grayscale(" + this.value + ")";
};
