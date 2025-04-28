// Preloader
window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader")
    setTimeout(() => {
      preloader.classList.add("hide")
    }, 2000)
  })
  
  // Particle.js Configuration
  document.addEventListener("DOMContentLoaded", () => {
    // Check if particlesJS is defined, if not, attempt to load it or provide a fallback
    if (typeof particlesJS !== "undefined") {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      })
    } else {
      console.error("particlesJS is not defined. Make sure to include the particles.js library.")
      // Optionally, you could load the script dynamically:
      // const script = document.createElement('script');
      // script.src = 'path/to/particles.js';
      // script.onload = () => {
      //   particlesJS('particles-js', { /* your config */ });
      // };
      // document.head.appendChild(script);
    }
  })
  
  // Sticky Header
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
  })
  
  // Mobile Menu Toggle
  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu")
    const navMenu = document.querySelector(".nav-menu")
  
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  
    // Close menu when clicking on a nav link
    document.querySelectorAll(".nav-menu ul li a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  })
  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      const targetId = this.getAttribute("href")
      if (targetId === "#") return
  
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Active Navigation Link
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-menu ul li a")
  
    let current = ""
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
  
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute("id")
      }
    })
  
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
  
  // Back to Top Button
  window.addEventListener("scroll", () => {
    const backToTopBtn = document.querySelector(".back-to-top")
    backToTopBtn.classList.toggle("active", window.scrollY > 500)
  })
  
  document.querySelector(".back-to-top").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
  
  // Scroll Animations
  window.addEventListener("scroll", revealElements)
  
  function revealElements() {
    const reveals = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-bottom, .reveal-zoom")
  
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150
  
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active")
      }
    })
  }
  
  // Project Filtering
  document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        btn.classList.add("active")
  
        const filterValue = btn.getAttribute("data-filter")
  
        projectCards.forEach((card) => {
          if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  })
  
  // Contact Form Submission
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Simple form validation
        if (name && email && subject && message) {
          // In a real application, you would send this data to a server
          alert("Thank you for your message! I will get back to you soon.")
          contactForm.reset()
        } else {
          alert("Please fill in all fields.")
        }
      })
    }
  })
  