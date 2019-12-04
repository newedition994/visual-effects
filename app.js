var $ = document.querySelector.bind(document);

// Blur

$("#blur input").onchange = function() {
  var img = "#blur img";
  img.style.webkitFilter = "blur(" + this.value + "px" + ")";

  var heading = $("#blur h3");
  heading.textContent = "blur(" + this.value + "px)";
};
