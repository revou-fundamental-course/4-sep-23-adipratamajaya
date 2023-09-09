(function () {
    var words = ["Practice revoU", "Fudamental", "Course", "Katik" ],
    i = 0;
    setInterval(function(){ $('#change_txt').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 4000)
  })();