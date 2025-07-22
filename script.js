// DOM Elements
const searchBtn = document.getElementById("searchBtn")
const searchDropdown = document.getElementById("searchDropdown")
const searchInput = document.getElementById("searchInput")
const slides = document.querySelectorAll(".slide")
const companiesTrack = document.getElementById("companiesTrack")
const artTrack = document.getElementById("artTrack")

// Search functionality
searchBtn.addEventListener("click", () => {
  searchDropdown.classList.toggle("active")
  if (searchDropdown.classList.contains("active")) {
    searchInput.focus()
  }
})

// Close search dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!searchBtn.contains(e.target) && !searchDropdown.contains(e.target)) {
    searchDropdown.classList.remove("active")
  }
})

// Search input functionality
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase()
  const searchResults = document.querySelectorAll(".search-results li")

  searchResults.forEach((result) => {
    const text = result.textContent.toLowerCase()
    if (text.includes(searchTerm)) {
      result.style.display = "block"
    } else {
      result.style.display = "none"
    }
  })
})

// Hero slider functionality
let currentSlide = 0
const totalSlides = slides.length

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index)
  })
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides
  showSlide(currentSlide)
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000)

// Duplicate carousel items for infinite scroll effect
function duplicateCarouselItems() {
  // Companies carousel
  const companiesItems = companiesTrack.innerHTML
  companiesTrack.innerHTML += companiesItems

  // ART carousel
  const artItems = artTrack.innerHTML
  artTrack.innerHTML += artItems
}

// Initialize carousels
duplicateCarouselItems()

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Form submission handling
const contactForm = document.querySelector(".contact-form-grid")
const newsletterForm = document.querySelector(".newsletter-form")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Simple validation
    if (!data.name || !data.email || !data.phone || !data.message) {
      alert("Por favor, completa todos los campos.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      alert("Por favor, ingresa un email válido.")
      return
    }

    // Simulate form submission
    alert("¡Gracias por tu consulta! Te contactaremos pronto.")
    contactForm.reset()
  })
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = newsletterForm.querySelector('input[type="email"]').value

    if (!email) {
      alert("Por favor, ingresa tu email.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un email válido.")
      return
    }

    alert("¡Te has suscrito exitosamente a nuestro newsletter!")
    newsletterForm.reset()
  })
}

// WhatsApp button functionality
document.querySelectorAll(".whatsapp-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const service = btn.textContent.trim()
    let phoneNumber = ""
    let message = ""

    switch (service) {
      case "Producción":
        phoneNumber = "5493511234567" // <-- Reemplaza con el número de WhatsApp de Producción (ej: +5493511234567)
        message = "Hola, necesito información sobre seguros."
        break
      case "Siniestros":
        phoneNumber = "5493517654321" // <-- Reemplaza con el número de WhatsApp de Siniestros
        message = "Hola, necesito reportar un siniestro."
        break
      case "Cobranzas":
        phoneNumber = "5493519876543" // <-- Reemplaza con el número de WhatsApp de Cobranzas
        message = "Hola, tengo una consulta sobre cobranzas."
        break
      default:
        phoneNumber = "5493510000000" // Número por defecto si no coincide
        message = "Hola, tengo una consulta general."
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })
})

// Call button functionality (for "Llamar a la grúa")
document.querySelector(".call-btn")?.addEventListener("click", () => {
  const phoneNumber = "5493511122334" // <-- Reemplaza con el número de WhatsApp de la grúa
  const message = "Necesito servicio de grúa urgente."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
})

// Privacy policy button
document.querySelector(".privacy-btn")?.addEventListener("click", () => {
  // Replace with actual privacy policy URL
  window.open("https://example.com/privacy-policy", "_blank")
})

// Cancellation buttons
document.querySelectorAll(".cancellation-option button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const isArrepentimiento = e.target.textContent.includes("arrepentimiento")
    const message = isArrepentimiento ? "Quiero ejercer mi derecho de arrepentimiento." : "Quiero cancelar mi póliza."

    const phoneNumber = "5493515555555" // <-- Reemplaza con el número de WhatsApp para cancelaciones/arrepentimiento
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })
})

// Insurance card click functionality
document.querySelectorAll(".insurance-card").forEach((card) => {
  card.addEventListener("click", () => {
    const insuranceType = card.querySelector("h3").textContent
    const message = `Hola, me interesa el seguro de ${insuranceType}. ¿Podrían darme más información?`
    const phoneNumber = "5493516666666" // <-- Reemplaza con el número de WhatsApp para consultas de seguros
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })
})

// Vehicle icon click functionality
document.querySelectorAll(".vehicle-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    const vehicleType = icon.querySelector("img").alt
    const message = `Hola, quiero cotizar un seguro para ${vehicleType}.`
    const phoneNumber = "5493517777777" // <-- Reemplaza con el número de WhatsApp para cotizaciones de vehículos
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })
})

// Hero buttons functionality
document.querySelectorAll(".hero-buttons .btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const isCotizar = btn.textContent.includes("Cotiza")
    const message = isCotizar
      ? "Hola, quiero cotizar seguros."
      : "Hola, quiero que me llamen para información sobre seguros."

    const phoneNumber = "5493518888888" // <-- Reemplaza con el número de WhatsApp para botones del hero
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  })
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for scroll animations
document.querySelectorAll(".insurance-card, .benefits-list li, .assistance-images img").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Header scroll effect
let lastScrollTop = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.style.transform = "translateY(-100%)"
  } else {
    // Scrolling up
    header.style.transform = "translateY(0)"
  }

  lastScrollTop = scrollTop
})

// Add loading animation to page
window.addEventListener("load", () => {
  document.body.style.opacity = "1"
  document.body.style.transition = "opacity 0.5s ease"
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Set initial slide
  showSlide(0)

  // Add smooth transitions
  document.body.style.opacity = "0"

  // Preload images for better performance
  const imageUrls = [
    "assets/imagenes/slider-fondo-1.jpg",
    "assets/imagenes/slider-fondo-2.jpg",
    "assets/imagenes/slider-fondo-3.jpg",
  ]

  imageUrls.forEach((url) => {
    const img = new Image()
    img.src = url
  })
})
