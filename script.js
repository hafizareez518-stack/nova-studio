```javascript
// ==========================
// Nova Creative Studio JS
// ==========================

// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Nova Creative Studio");
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();
    });
}

// Add To Cart Buttons
const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const productName =
        this.parentElement.querySelector("h3").innerText;

        alert(productName + " added to cart!");
    });

});

// Scroll Animation
const animatedElements = document.querySelectorAll(
".service-card, .product-card, .portfolio-item, .review"
);

function revealElements(){

    animatedElements.forEach(function(element){

        const position =
        element.getBoundingClientRect().top;

        const screenPosition =
        window.innerHeight - 100;

        if(position < screenPosition){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });

}

animatedElements.forEach(function(element){

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
    "all 0.6s ease";

});

window.addEventListener(
"scroll",
revealElements
);

revealElements();

// Navbar Active Link Highlight
const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.forEach(function(item){

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

// Dynamic Footer Year
const footer =
document.querySelector("footer p");

if(footer){

    const year =
    new Date().getFullYear();

    footer.innerHTML =
    "© " + year +
    " Nova Creative Studio. All Rights Reserved.";

}

// Back To Top Button
const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 16px";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.borderRadius = "8px";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function(){

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
```
