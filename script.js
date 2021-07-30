var m1=document.getElementById("myModal");var m2=document.getElementById("myModal1");
        var a1=document.getElementById("modal_sign");var a2=document.getElementById("modal_log");
        var s1 = document.getElementsByClassName("close")[0]; var s2 = document.getElementsByClassName("close1")[0];

        a1.onclick =function(){
            m1.style.display="block";
        }
        a2.onclick =function(){
            m2.style.display="block";
        }
        s1.onclick = function() {
            m1.style.display = "none";
           
          }
          s2.onclick = function() {
            m2.style.display = "none";
           
          }
        window.onclick-function(event){
            if (event.target==m1){
                m1.style.display="none";
            }
            if (event.target==m2){
                m2.style.display="none";
            }
        }


var slideIndex = 1;
        showSlides(slideIndex);
        
        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        // Thumbnail image controls
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
        }


        function formvalidate(){
               var x=document.forms["myForm2"]["fname"].value;
               var y=document.forms["myForm2"]["fpswrd"].value;

               var a=document.forms["myForm1"]["fname"].value;
               var b=document.forms["myForm1"]["femail"].value;
               var c=document.forms["myForm1"]["fpswrd1"].value;
               var d=document.forms["myForm1"]["fpswrd2"].value;

               
               
               if(c!=d){
                   alert("password not matched");
               }

               else if (x == "") {
                alert("Name must be filled out");
               }
               else if (y == "") {
                    alert("pswrd must be filled out");
           }
        }
    
 