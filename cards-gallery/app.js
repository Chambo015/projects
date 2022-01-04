function slidePlugin(activeSlide = 2){
      const slides = document.querySelectorAll('.slide');

      slides[activeSlide].classList.add('active')

      for (const slide of slides) {
      slide.addEventListener('click', () => {
            if (slide.classList.contains('active')) {
                  slide.classList.remove('active');
            } else {
                  removeActiveClasses();
                  slide.classList.add('active');
            }       
      })
      }

      function removeActiveClasses() {
      slides.forEach(slide => {
            slide.classList.remove('active')
      });
      }
}

slidePlugin();