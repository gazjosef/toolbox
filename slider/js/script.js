var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let slides = document.getElementsByClassName("slideshow__slides");
  let dots = document.getElementsByClassName("dots__dot");
  let i;

  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }

  // slideIndex++;

  if (n > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  for (i = 0; i < slides.length; i++) {
    console.log("for loop", i);
    // setTimeout(showSlides(i + 1), 3000); // Change image every 3 seconds
  }
}

showSlides();
