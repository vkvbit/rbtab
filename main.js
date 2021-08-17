var homeTabLink = "https://vaibhavkumar.ml";
var firstLink = "./classic/index.html";
var secondLink = "./notebook_web/index.html";

var homeTabAddress = "secure | https://vaibhavkumar.ml";
var firstAddress = "secure | https://about.vaibhavkumar.ml/classic/index.html";
var secondAddress = "secure | https://about.vaibhavkumar.ml/notebook_web/index.html";

function homeTab() {
	document.getElementById("iFrame").src = homeTabLink;
	document.getElementById("addressBar").innerHTML = homeTabAddress;
}

function tabLinkFirst() {
	document.getElementById("iFrame").src = firstLink;
	document.getElementById("addressBar").innerHTML = firstAddress;
}

function tabLinkSecond() {
	document.getElementById("iFrame").src = secondLink;
	document.getElementById("addressBar").innerHTML = secondAddress;
}

function closeWin() {
  window.close();
}		

function reloadTab() {
  location.reload();
}

function newTab() {
	alert("Currently, it does not support external page.");
}