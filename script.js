(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  const body = document.body;
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  const sections = Array.from(document.querySelectorAll("[data-section]"));
  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
  const heroScene = document.querySelector("[data-hero-scene]");
  const heroSlideshow = document.querySelector("[data-hero-slideshow]");
  const heroSlides = Array.from(document.querySelectorAll("[data-hero-slide]"));
  const scrollScenes = Array.from(document.querySelectorAll("[data-scroll-scene]"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const HERO_SLIDE_DURATION = 5000;

  let heroSlideIndex = Math.max(0, heroSlides.findIndex(function (slide) {
    return slide.classList.contains("is-active");
  }));
  let heroSlideshowTimer = 0;
  let heroSlideshowInView = true;

  function showHeroSlide(index) {
    if (!heroSlides.length) {
      return;
    }

    heroSlideIndex = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("is-active", slideIndex === heroSlideIndex);
    });
  }

  function stopHeroSlideshow() {
    if (heroSlideshowTimer) {
      window.clearInterval(heroSlideshowTimer);
      heroSlideshowTimer = 0;
    }
  }

  function startHeroSlideshow() {
    if (reducedMotion || heroSlides.length < 2 || !heroSlideshowInView || document.hidden || heroSlideshowTimer) {
      return;
    }

    heroSlideshowTimer = window.setInterval(function () {
      showHeroSlide(heroSlideIndex + 1);
    }, HERO_SLIDE_DURATION);
  }

  if (heroSlideshow && heroSlides.length > 1 && !reducedMotion) {
    if ("IntersectionObserver" in window) {
      heroSlideshowInView = false;
      const heroSlideshowObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          heroSlideshowInView = entry.isIntersecting;
          if (heroSlideshowInView) {
            startHeroSlideshow();
          } else {
            stopHeroSlideshow();
          }
        });
      }, { threshold: 0.12 });

      heroSlideshowObserver.observe(heroScene || heroSlideshow);
    } else {
      startHeroSlideshow();
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopHeroSlideshow();
      } else {
        startHeroSlideshow();
      }
    });
  }

  function setHeaderState() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 18);
    }
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  let scrollFrame = 0;

  function updateScrollScenes() {
    scrollFrame = 0;
    setHeaderState();

    if (reducedMotion) {
      return;
    }

    scrollScenes.forEach(function (scene) {
      const bounds = scene.getBoundingClientRect();
      const range = Math.max(1, scene.offsetHeight - window.innerHeight);
      const progress = clamp(-bounds.top / range, 0, 1);
      scene.style.setProperty("--scene-progress", progress.toFixed(3));
    });
  }

  function requestScrollUpdate() {
    if (scrollFrame) {
      return;
    }

    scrollFrame = window.requestAnimationFrame(updateScrollScenes);
  }

  updateScrollScenes();
  window.addEventListener("scroll", requestScrollUpdate, { passive: true });

  function closeMenu() {
    body.classList.remove("menu-open");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = body.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach(function (link) { link.addEventListener("click", closeMenu); });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 820) {
        closeMenu();
      }
      requestScrollUpdate();
    });
  }

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  } else {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    revealItems.forEach(function (item) { revealObserver.observe(item); });
  }

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach(function (link) {
          const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
          if (isCurrent) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-42% 0px -48% 0px", threshold: 0 });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }
})();
