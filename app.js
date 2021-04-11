(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
})();




// SELECT GIVE ONCE/MONTHLY
var header = document.getElementById("switch-btns");
var btns = header.getElementsByClassName("top-btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("pointer");
  current[0].className = current[0].className.replace(" pointer", "");
  this.className += " pointer";
  });
}


// SELECT EURO
var header = document.getElementById("switch-btns2");
var btns = header.getElementsByClassName("btn-new");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

