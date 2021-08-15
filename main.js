var firstLink = "./classic/index.html";
var secondLink = "./notebook_web/index.html";

var firstAddress = "secure | https://about.vaibhavkumar.ml/classic/index.html";
var secondAddress = "secure | https://about.vaibhavkumar.ml/notebook_web/index.html";

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