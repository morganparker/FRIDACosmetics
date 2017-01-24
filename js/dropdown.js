
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
         function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

// Close the dropdown menu if the user clicks outside of it
         window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            }
        }
        }
         
          /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
         function myFunction1() {
            document.getElementById("myDropdown-bar1").classList.toggle("show-1");
        }

// Close the dropdown menu if the user clicks outside of it
         window.onclick = function(event) {
        if (!event.target.matches('.dropbtn-bar1')) {

            var dropdowns = document.getElementsByClassName("dropdown-content-bar1");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-1')) {
                openDropdown.classList.remove('show-1');
            }
            }
        }
        }
         
          /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
         function myFunction2() {
            document.getElementById("myDropdown-bar2").classList.toggle("show-2");
        }

// Close the dropdown menu if the user clicks outside of it
         window.onclick = function(event) {
        if (!event.target.matches('.dropbtn-bar2')) {

            var dropdowns = document.getElementsByClassName("dropdown-content-bar2");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-2')) {
                openDropdown.classList.remove('show-2');
            }
            }
        }
        }
         
          /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
         function myFunction3() {
            document.getElementById("myDropdown-bar3").classList.toggle("show-3");
        }

// Close the dropdown menu if the user clicks outside of it
         window.onclick = function(event) {
        if (!event.target.matches('.dropbtn-bar3')) {

            var dropdowns = document.getElementsByClassName("dropdown-content-bar3");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-3')) {
                openDropdown.classList.remove('show-3');
            }
            }
        }
        }
    