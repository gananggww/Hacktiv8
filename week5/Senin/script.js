//---merubah dengan menggunakan Tag Name
var myh2 = document.getElementsByTagName("h2");
myh2[0].innerHTML= "Apa Kabar!";
//---merubah dengan menggunakan ID
var myID = document.getElementById("fill-me");
myID.innerHTML = "HALO..!";
//---merubah dengan menggunakan Class Name
// var myClass = document.getElementsByClassName("change-all-of-me");
// myClass[0]/*[1]/[2]/[3]*/.innerHTML = "gello"

//---Pengulangan Class Name
var myClass = document.getElementsByClassName("change-all-of-me");
for(var i=0; i< myClass.length; i++){
  myClass[i].innerHTML = "HALO JUGA!";
  // myClassContent = "kuhasdihsa";

}
