! function() {
  var e = document.querySelectorAll("slideSix_arrow"),
    c = document.querySelectorAll('[name^="r-toggle"]');
  console.log(e, c);
  for (var t = 0; t < e.length; t++) e[t].addEventListener("click", function(e) {
    e.preventDefault();
    var t = document.querySelector(".slideSix_inner input:checked"),
      r = [].indexOf.call(c, t),
      l = c.length;
    switch (this.dataset.direction) {
      case "left":
        0 == r ? c[l - 1].checked = !0 : c[r - 1].checked = !0;
        break;
      case "right":
        l - 1 == r ? c[0].checked = !0 : c[r + 1].checked = !0
    }
  })
}();
