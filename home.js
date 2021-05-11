$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Web Developer",
      "ReactJS Developer",
      "Freelancer",
      "AR Developer",
      "Front End Enthusiast",
      "UI Designer",
      "Regular Reader",
      "Business enthusiast",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Web Developer",
      "ReactJS Developer",
      "Freelancer",
      "AR Developer",
      "Front End Enthusiast",
      "Reader",
      "Business enthusiast",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

if (document.querySelector(".animation")) {
  forceAnimation(splitText(document.querySelector(".animation")));
}

function splitText(container = false) {
  if (container != false) {
    var string = container.innerHTML;
    var textarr = string.split("");
    var stop = textarr.length;
    var buffer = "";
    for (var i = 0; i < stop; i++) {
      buffer += '<span class="anim-' + i + '">' + textarr[i] + "</span>";
    }
    container.innerHTML = buffer;
    return stop;
  }
}

function forceAnimation(stop = false) {
  if (stop != false) {
    for (var i = 0; i < stop; i++) {
      var letter = document.querySelector(".anim-" + i);
      letter.addEventListener("mouseover", function () {
        this.classList.add("animate");
      });
      letter.addEventListener("animationend", function () {
        this.classList.remove("animate");
      });
    }
  }
}
