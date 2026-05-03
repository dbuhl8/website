
// Opens a tab by name and highlights the active nav button
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderStyle = "none";
  }
  document.getElementById(pageName).style.display = "flex";
  elmnt.style.borderRightStyle = "solid";
  elmnt.style.borderLeftStyle = "solid";
  elmnt.style.borderColor = "#516473";
  elmnt.style.borderWidth = "2px";
  elmnt.style.backgroundColor = color;
}

// Opens a sub-page within a multi-section tab (used by project subpages)
function openSidePage(pageName) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "flex";
}
