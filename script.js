    
    var butao = document.getElementById("info");
    var popup = document.getElementById("mypopup");
    var span = document.getElementsByClassName("close")[0];

    document.getElementById("info").onclick = function() {
        popup.style.display = "block";
    }

span.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
} 

butao.onclick = function() {
    popup.style.display = "block"
}

function yt(url) {
  document.getElementById("tutorial").style.display = "none";
  document.getElementById("twitchVideo").src = "";
  document.getElementById("twitchVideo").style.display = "none";
  document.getElementById("ytVideo").style.display = "block";
  document.getElementById("ytVideo").src = url;
}

function tw(url) {
  document.getElementById("tutorial").style.display = "none";
  document.getElementById("ytVideo").src = "";
  document.getElementById("ytVideo").style.display = "none";
  document.getElementById("twitchVideo").style.display = "block";
  document.getElementById("twitchVideo").src = url;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
  document.getElementById("about").style.left = "350px";
  document.getElementById("about").onclick = closeNav;
  document.getElementById("about").className = "fa-solid fa-xmark";
  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("about").style.left = "";
  document.getElementById("about").onclick = openNav;
  document.getElementById("about").className = "fa-solid fa-bars";
} 
