class HeroCarousel {
    constructor(heroId, images, interval = 2000) {
      this.hero = document.getElementById(heroId);
      this.carousel = this.hero.querySelector('.hero-carousel');
      this.images = images;
      this.interval = interval;
      this.currentIndex = 0;
      this.timer = null;
  
      this.setupCarousel();
      this.setupControls();
      this.startCarousel();
    }
  
    setupCarousel() {
      this.images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Carousel Image ${index + 1}`;
        img.className = index === 0 ? 'active' : '';
        this.carousel.appendChild(img);
      });
    }
  
    setupControls() {
      const prevButton = this.hero.querySelector('.hero-control.prev');
      const nextButton = this.hero.querySelector('.hero-control.next');
  
      prevButton.addEventListener('click', () => this.prevSlide());
      nextButton.addEventListener('click', () => this.nextSlide());
    }
  
    startCarousel() {
      this.timer = setInterval(() => this.nextSlide(), this.interval);
    }
  
    nextSlide() {
      this.showSlide((this.currentIndex + 1) % this.images.length);
    }
  
    prevSlide() {
      this.showSlide((this.currentIndex - 1 + this.images.length) % this.images.length);
    }
  
    showSlide(index) {
      const slides = this.carousel.querySelectorAll('img');
      slides[this.currentIndex].classList.remove('active');
      slides[index].classList.add('active');
      this.currentIndex = index;
  
      clearInterval(this.timer);
      this.startCarousel();
    }
  }
  
  function setHero(title, subtitle, ctaText, ctaLink, images) {
    const hero = document.getElementById('hero');
    const heroTitle = hero.querySelector('.hero-title');
    const heroSubtitle = hero.querySelector('.hero-subtitle');
    const heroCta = hero.querySelector('.hero-cta');
  
    heroTitle.textContent = title;
    heroSubtitle.textContent = subtitle;
    heroCta.textContent = ctaText;
    heroCta.href = ctaLink;
  
    new HeroCarousel('hero', images);
  }
  // document.addEventListener("DOMContentLoaded", function () {
  //   if (window.location.pathname !== "/contact.html") {
  //     setHero(
  //       "Virtual Mechatronics Lab",
  //       "Discover amazing things with us",
  //       "Get Started",
  //       "index.html",
  //       [
  //         "video/The-DeKUT-Vice-Chancellor-takes-a-Memory-photo-with-the-Officials-Delegates-Skill-Experts-and-Judges.png",
  //         "video/sifa.jpg",
  //         "video/elsie.jpg",
  //         "video/mallory.PNG",
  //         "video/murage.jpg",
  //       ]
  //     );
  //   } else {
  //     // Usage for the specific page without CTA
  //     setHero(
  //       "Virtual Mechatronics Lab",
  //       "Discover amazing things with us",
  //       "", // ctaText (not used)
  //       "", // ctaLink (not used)
  //       [
  //         "video/The-DeKUT-Vice-Chancellor-takes-a-Memory-photo-with-the-Officials-Delegates-Skill-Experts-and-Judges.png",
  //         "video/sifa.jpg",
  //         "video/elsie.jpg",
  //         "video/mallory.PNG",
  //         "video/murage.jpg",
  //       ],
  //       false // Set showCTA to false for this specific page
  //     );
  //   }
  // });