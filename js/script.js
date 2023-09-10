const barChangePP = document.querySelector(".change_ppersegi");
const barChangeP = document.querySelector(".change_persegi");


barChangePP.addEventListener("click", () => {

const persegiPanjang = document.querySelector('#persegiPanjang_');
const persegi_ = document.querySelector('#persegi-');

persegiPanjang.classList.toggle("show");
persegi_.classList.toggle("none");
});

// luas persegi
function hitungLuas (){
 const sisi = document.querySelector("#sisi").value;
 let luas, hasil;

 luas = sisi * sisi;
hasil = document.querySelector("#hasil_").innerHTML ="<p>Hasil</p>"+ "<h2>" +luas+ "</h2>";
}

function resetLuas() {
    let reset = document.querySelector("#hasil_").innerHTML ="<h1>😱</h1>";
}

// keliling persegi
function kelilingPersegi () {
let keliling = document.querySelector("#keliling").value;
let operator ;

operator = 4 * keliling;

let hasil = document.querySelector("#hasil__").innerHTML = "<p>Hasil</p>"+ "<h2>" +operator+ "</h2>";
}
function resetKeliling() {
    let reset = document.querySelector("#hasil__").innerHTML ="<h1>😱</h1>";
}