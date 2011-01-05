//$("table").css("background-color", "red");

$("table[align!=right]").each(function(i) {
    if (i >= 9) return;

    $(this).css("background-color", "#eee");
    $(this).append("<font style='position: relative; left: 550px; top: -60px'><<<<<<快捷键: " + (i + 1) + "</font>");
});



$(window).keydown(function(event){
  var i = event.keyCode - 49;
  if (i < 0 || i > 9) {
    return true;
  }  
  var el = $("table[align!=right]").eq(i).find("a").first();
  var href = el.attr("href");
  window.open(href);
});