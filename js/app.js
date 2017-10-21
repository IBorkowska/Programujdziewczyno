'use strict';
document.addEventListener('DOMContentLoaded', function() {
    var menuElement = document.querySelector('.for-dropdown');
    var dropdownList = document.querySelector('.for-dropdown .dropdown');
   menuElement.addEventListener('mouseover', function()  {
        dropdownList.style.display = 'block'; 
         });
    menuElement.addEventListener('mouseout', function() {
        dropdownList.style.display = 'none'; 
    
                       
                                });
     
    // zadanie 2
    var buttons = document.querySelectorAll('.btn.read-more');
    
    
    buttons[0].addEventListener('click', function() {

      // Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
      // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
      // warunek po jednej albo po drugiej stronie kresek musi być spełniony
      var textArea = this.previousElementSibling;
      
        if (textArea.style.display === 'none' || textArea.style.display === '') {

        // ten kod wykona się, gdy spełni się jeden z powyższych warunków
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {

        // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
        // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }

    });
    
function showHide() {
      var textArea = this.previousElementSibling;
    
      if (textArea.style.display === 'none' || textArea.style.display === '') {
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }
    }
    
      
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
    
    // zadanie 3
    
    var navigation = document.querySelector ('nav.navbar');
    
    window.addEventListener('scroll', function() {
      navigation.style.borderBottom = '2px solid #7f7f7f';
    });
    
    });