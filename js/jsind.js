
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
    tablinks[i].style.color = "";
  }
  document.getElementById(pageName).style.display = "flex";
  elmnt.style.borderRightStyle = "solid";
  elmnt.style.borderLeftStyle = "solid";
  elmnt.style.borderColor = "#053c5e";
  elmnt.style.borderWidth = "2px";
  elmnt.style.backgroundColor = color;
  elmnt.style.color = "#ffffff";
  // On phones the nav scrolls sideways; keep the active tab on screen
  var nav = elmnt.parentNode;
  if (nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = elmnt.offsetLeft - (nav.clientWidth - elmnt.offsetWidth) / 2;
  }
}

// Opens a sub-page within a multi-section tab (used by project subpages)
function openSidePage(pageName) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "flex";
}

// Opens the tab named in the URL hash (e.g. index.html#Research), else the default tab
function openTabFromHash() {
  var name = window.location.hash.slice(1);
  var btn = name ? document.querySelector('.tablink[data-tab="' + name + '"]') : null;
  (btn || document.getElementById("defaultOpen")).click();
  // The hash matches a tab's id, so the browser jumps past the header; undo that
  if (btn) {
    window.addEventListener("load", function () { window.scrollTo(0, 0); });
  }
}

// Starts a group of videos together once all can play, and keeps them
// locked to the first one so they stay in step while looping
function playInSync(videos) {
  videos = Array.prototype.slice.call(videos);
  if (!videos.length) return;
  var leader = videos[0];
  var ready = 0;
  var playButton = null;
  var started = false;
  function autoStart() {
    if (!started) { started = true; start(); }
  }
  function start() {
    videos.forEach(function (v) {
      v.currentTime = 0;
      var p = v.play();
      // Autoplay can be blocked (e.g. iOS Low Power Mode): offer a tap to start
      if (p && p.catch) p.catch(showPlayButton);
    });
  }
  function showPlayButton() {
    if (playButton) return;
    playButton = document.createElement("button");
    playButton.className = "sim-play";
    playButton.innerHTML = "&#9654; Play simulations";
    playButton.onclick = function () {
      playButton.remove();
      playButton = null;
      start();
    };
    var row = leader.closest(".sim-row") || leader.parentNode;
    row.parentNode.insertBefore(playButton, row);
  }
  videos.forEach(function (v) {
    if (v.readyState >= 3) { ready++; }
    else {
      v.addEventListener("canplay", function () {
        if (++ready === videos.length) autoStart();
      }, { once: true });
    }
  });
  if (ready === videos.length) autoStart();
  // Mobile browsers may not buffer until play() is called, so don't wait forever
  setTimeout(function () { autoStart(); }, 3000);
  leader.addEventListener("timeupdate", function () {
    videos.slice(1).forEach(function (v) {
      if (Math.abs(v.currentTime - leader.currentTime) > 0.15) {
        v.currentTime = leader.currentTime;
      }
    });
  });
}
