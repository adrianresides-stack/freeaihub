
Briana Saunders
11:42 AM (2 minutes ago)
to me

document.addEventListener("DOMContentLoaded", function () {

    console.log("FreeAIHub Version 2 loaded successfully!");

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });


    // Newsletter button placeholder
    const newsletterButton = document.querySelector(".newsletter button");

    if (newsletterButton) {

        newsletterButton.addEventListener("click", function () {

            alert(
                "Newsletter signup coming soon! 🚀\n\nWe will connect FreeAIHub with Beehiiv next."
            );

        });

    }


    // Add hover animation to cards
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {
            card.style.transition = "0.3s";
        });

    });


}); 