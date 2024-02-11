 // Toggle image slideshow on "HOME PAGE" button click
 const homePageButton = document.getElementById("homePageButton");
 homePageButton.addEventListener("click", function () {
     toggleSlideshow();
     
 });

 let slideshowRunning = false;
 let slideshow1Running = false;
 let slideIndex = 0;
 let slideIndex1 = 0;

 function toggleSlideshow() {
     const slides = document.getElementsByClassName("mySlides");
     const slides1 = document.getElementsByClassName("mySlides1");

     slideshowRunning = !slideshowRunning;
     slideshow1Running = !slideshow1Running;

     if (!slideshowRunning) {
         for (let i = 0; i < slides.length; i++) {
             slides[i].classList.add("transition-left");
         }
     } else {
         slideIndex = 0;
         setTimeout(function () {
             for (let i = 0; i < slides.length; i++) {
                 slides[i].style.display = "none";
                 slides[i].classList.remove("transition-left");
             }
             showSlides();
         }, 1000); // Start slideshow after 2 seconds (time for animation to complete)
     }

     if (!slideshow1Running) {
         for (let i = 0; i < slides1.length; i++) {
             slides1[i].classList.add("transition-right");
         }
     } else {
         slideIndex1 = 0;
         setTimeout(function () {
             for (let i = 0; i < slides1.length; i++) {
                 slides1[i].style.display = "none";
                 slides1[i].classList.remove("transition-right");
             }
             showSlides1();
         }, 1000); // Start slideshow after 2 seconds (time for animation to complete)
     }
 }

 function showSlides() {
     let slides = document.getElementsByClassName("mySlides");
     slideIndex++;
     if (slideIndex > slides.length) {
         slideIndex = 1;
     }
     if (slideshowRunning) {
         for (let i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
         }
         slides[slideIndex - 1].style.display = "block";
         setTimeout(showSlides, 5000); // Change slide every 5 seconds
     }
 }

 function showSlides1() {
     let slides1 = document.getElementsByClassName("mySlides1");
     slideIndex1++;
     if (slideIndex1 > slides1.length) {
         slideIndex1 = 1;
     }
     if (slideshow1Running) {
         for (let i = 0; i < slides1.length; i++) {
             slides1[i].style.display = "none";
         }
         slides1[slideIndex1 - 1].style.display = "block";
         setTimeout(showSlides1, 5000); // Change slide every 5 seconds
     }
 }





 