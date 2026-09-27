const pages = [
    document.getElementById("birthdayPage"),
    document.getElementById("thankPage"),
    document.getElementById("finalPage")
];

function setActivePage(pageId) {
    pages.forEach(page => {
        page.classList.toggle("active", page.id === pageId);
    });
}

function showThankYou() {
    setActivePage("thankPage");
}


function thankYou() {
    setActivePage("finalPage");
    createHearts();
}


function noThanks() {
    document.getElementById("finalMessage").innerHTML =
        "Haha Pooja! 😄❤️<br><br>" +
        "It's okay! Keep smiling and have a beautiful birthday! 🎂🌸";

    setActivePage("finalPage");
}


function restart() {
    document.getElementById("finalMessage").innerHTML =
        "Pooja, keep smiling and shining always! 🌸❤️" +
        "<br><br>" +
        "May Mahadev bless you with happiness, " +
        "success and peace. 🕉️✨";

    setActivePage("birthdayPage");
}


/* Floating Hearts */

function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-40px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "999";

        heart.style.pointerEvents = "none";


        heart.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(-110vh) rotate(${Math.random() * 360}deg)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    3000 + Math.random() * 2500,

                easing: "ease-out"
            }

        );


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 5500);

    }

}