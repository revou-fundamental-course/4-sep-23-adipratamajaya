const barChangePP = document.querySelector(".change_action");

const changeTxt = document.querySelector(".ganti_nama");

changeTxt.addEventListener('click', () =>{
    changeTxt.textContent= "Persegi"
})

barChangePP.addEventListener("click", () => {
const persegiPanjang = document.querySelector('#persegiPanjang_');
const persegi_ = document.querySelector('#persegi-');

persegiPanjang.classList.toggle("show");
persegi_.classList.toggle("none");
});