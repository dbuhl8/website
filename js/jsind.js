


// This opens pages by the nav bar!
function openPage(pageName,elmnt,color) {
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
  elmnt.style.borderTopStyle = "none";
  elmnt.style.borderBottomStyle = "none";
  elmnt.style.borderColor = "#516473";
  elmnt.style.borderWidth = "2px";
  elmnt.style.backgroundColor = color;
}

// This opens pages by the side bar!
function openSidePage(pageName) {
  var tabcontent
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "flex";
}

//These aren't useful hehe
function findHeight(elementName){
  return document.getElementById(elementName).offsetHeight;
}

function findWidth(elementName){
  return document.getElementById(elementName).offsetWidth;
}