/*
Buatlah sebuah script.js yang berada relatif di sebelah index.html. Dengan memanfaatkan children, parentNode,
nextElementSibling, previousElementSibling, dan innerHTML(), buat perubahan berikut di file script.js untuk
memanipulasi halaman HTML kita dan mengubah nilai berikut dengan mengakses <div> yang sesuai:

<div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
<div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
<div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
<div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>
*/
// var theBody = document.body;
// var bodyChild = body.children;
// bodyChild;

var contohDiv1 = document.getElementById("eldest-parent");
var contohDiv1Child = contohDiv1.children;
contohDiv1Child[0].innerHTML= "Diakses melalui Eldest Parent";

// var contohdiv2 = document.getElementById("a-child")
// var contohdiv2Child = contohdiv2.children;
// for(i=0;i<contohdiv2Child;i++){
//   contohdiv2Child[i].innerHTML = "lkjahskdlbakldsad";
// }

var siAnak = document.getElementById("a-child");

var sodaraTua = siAnak.previousElementSibling;
sodaraTua.innerHTML ="Diakses Melalui a Child";

var sodaraMuda = siAnak.nextElementSibling;
sodaraMuda.innerHTML ="Diakses Melalui a Child";

var bapak = siAnak.parentNode;
var kakek = bapak.parentNode;
var sodaraKakek = kakek.nextElementSibling;
sodaraKakek.innerHTML="Diakses Melalui a Child"
