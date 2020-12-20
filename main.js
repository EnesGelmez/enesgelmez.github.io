
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("hd").className=("headerdiv2");
    document.getElementById("hm").className=("headermenu2");
    document.getElementById("lg").className=("logo2");
    document.getElementById("mn").className=("menu2");
  } else {
    document.getElementById("hd").className=("headerdiv");
    document.getElementById("hm").className=("headermenu");
    document.getElementById("lg").className=("logo");
    document.getElementById("mn").className=("menu");
  }
}

