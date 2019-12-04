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

$("#grayscale input").value = 0.7;
$("#grayscale input").onchange();

// Hue Rotate
$("#huerotate input").onchange = function() {
  var img = $("#huerotate img");
  img.style.webkitFilter = "hue-rotate(" + this.value + "deg" + ")";

  var heading = $("#huerotate h3");
  heading.textContent = "hue-rotate(" + this.value + "deg" + ")";
};

$("#huerotate input").value = 120;
$("#huerotate input").onchange();

// Brightness
$("#invert input").onchange = function() {
  var img = $("#invert img");
  img.style.webkitFilter = "invert(" + this.value + "%" + ")";

  var heading = $("#invert h3");
  heading.textContent = "invert(" + this.value + "%)";
};

$("#invert input").value = 20;
$("#invert input").onchange();

// Saturate

$("#saturate input").onchange = function() {
  var img = $("#saturate img");
  img.style.webkitFilter = "saturate(" + this.value + "%" + ")";

  var heading = $("#saturate h3");
  heading.textContent = "saturate(" + this.value + "%)";
};
$("#saturate input").value = 300;
$("#saturate input").onchange();
