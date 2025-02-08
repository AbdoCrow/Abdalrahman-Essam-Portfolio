document.addEventListener("DOMContentLoaded", function () {
    // Scroll-Up Button
    let scrollButton = document.createElement("button");
    scrollButton.innerHTML = "↑";
    scrollButton.id = "scrollUpBtn";
    document.body.appendChild(scrollButton);

    Object.assign(scrollButton.style, {
        position: "fixed", bottom: "20px", right: "20px", padding: "10px 15px",
        background: "#ff9800", color: "white", border: "none", borderRadius: "5px",
        cursor: "pointer", display: "none", fontSize: "20px"
    });

    window.addEventListener("scroll", function () {
        scrollButton.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
////////////////////////////////////////////////////////////////////////////////////////
    //is ABDO here ?
    let abdoSequence = [];
    document.addEventListener("keydown", function (event) {
        abdoSequence.push(event.key.toLowerCase());
        if (abdoSequence.join("").includes("abdo")) {
            triggerCelebration();
            abdoSequence = [];
        }
    });

    function triggerCelebration() {
        let yayMsg = document.createElement("div");
        yayMsg.innerHTML = "YAY! You want us to be close huh? <br> Here’s my favorite game now: <a href='https://store.steampowered.com/app/1623730/Palworld/' target='_blank'>Palworld</a> 🎮🔥";
        yayMsg.style = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.8); color: white; padding: 20px; border-radius: 10px; font-size: 20px; text-align: center; z-index: 9999;";
        document.body.appendChild(yayMsg);

        startConfetti();
        setTimeout(() => { yayMsg.remove(); stopConfetti(); }, 5000); //learnt from backend course if the user did any other easter egg will occur
    }

    
    function startConfetti() {
        let confettiii = document.createElement("script");
        confettiii.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
        document.body.appendChild(confettiii);
        confettiii.onload = () => confetti({ particleCount: 200, spread: 80 }); //a function in the canvas library
    }
    
    function stopConfetti() {
        document.querySelectorAll("canvas").forEach(canvas => canvas.remove());
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    let Your_Message = document.querySelector('textarea');
    if (Your_Message) {
        Your_Message.addEventListener("input", function () {
            if (Your_Message.value.includes("1562004")) {
                alert("You know my birthday huh? Okay, stalker!!");
                Your_Message.value = "";  // Clear input
            }
        });
    }

 ////////////////////////////////////////////////////////////////////////////////////////
    let profilePic = document.querySelector("header img");
    let clickCount = 0;
    if (profilePic) { //sometimes cat images won't appear or load so this is an essential validation
        profilePic.addEventListener("click", function () {
            clickCount++; //not the most optimal as if clicked 4 then take a break then 6 after it will also work but i guess now this is a feature hahaha
            if (clickCount === 10) {
                document.body.style.transition = "transform 1s";
                document.body.style.transform = "rotate(180deg)";
                setTimeout(() => {
                    document.body.style.transform = "rotate(0deg)";
                }, 5000);
                clickCount = 0;
            }
        });
    }

  ////////////////////////////////////////////////////////////////////////////////////////
  //the idea is that c++ turns to monster and eat all the other skills but i didn't have the time to animate them :(
    let cpp = [];
    let cppIcon = document.querySelector(".fab.fa-cuttlefish");
    let skills = document.querySelectorAll(".skill");

    document.addEventListener("keydown", function (event) {
        cpp.push(event.key.toUpperCase());
        if (cpp.join("").includes("C++") && cppIcon) {
            activateCppMonster();
            cpp = [];
        }
    });

    function activateCppMonster() {
        if (!cppIcon) return;

        cppIcon.style.transition = "transform 1s ease-in-out";
        cppIcon.style.transform = "scale(3) rotate(360deg)";

        setTimeout(() => {
            skills.forEach(skill => {
                if (!skill.querySelector(".fab.fa-cuttlefish")) { 
                    skill.style.transition = "opacity 0.5s ease-in-out";
                    skill.style.opacity = "0";
                }
            });
        }, 1000);

        setTimeout(() => {
            cppIcon.style.transform = "scale(1) rotate(0deg)";
            skills.forEach(skill => skill.style.opacity = "1");
        }, 5000);
    }


    ////////////////////////////////////////////////////////////////////////////////////////
    let contactButton = document.querySelector("#contact button");
    let contactClickCount = 0;
    if (contactButton) {
        contactButton.addEventListener("click", function () {
            contactClickCount++;
            if (contactClickCount === 3) {
                alert("You really wanna talk to me, huh? 😏");
                contactClickCount = 0;
            }
        });
    }

});
////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    let catt = [];
    document.addEventListener("keydown", function (event) {
        catt.push(event.key.toLowerCase());
        if (catt.join("").includes("meow") || catt.join("").includes("cat")) {
            activateCatMode();
            catt = [];
        }
    });

    function activateCatMode() {
        let nameParts = document.querySelectorAll(".name-part");
            nameParts.forEach((part, index) => {
                part.innerText = index === 0 ? "Meow" : "Essam";
            });

        let namelogo = document.querySelectorAll(".logo");
            namelogo.forEach((part) => {
                part.innerText = "Meow";
            });

        // Change every image to a cat image
        document.querySelectorAll("img").forEach(img => {
            img.src = `https://placekittens.com/${Math.floor(Math.random() * 200 + 200)}/${Math.floor(Math.random() * 200 + 200)}`;
        });
 
    let meowSound = new Audio("https://www.myinstants.com/media/sounds/meow_mix.mp3");
    meowSound.play();

    }
////////////////////////////////////////////////////////////////////////////////////////
//greet the world the right way
    let helloWorld = [];
    document.addEventListener("keydown", function (event) {
        helloWorld.push(event.key.toUpperCase());
        if (helloWorld.join("").includes("HELLO WORLD")) {
            activateMatrixMode();
            helloWorld = [];
        }
    });

    function activateMatrixMode() {
        
        let originalBg = document.body.style.backgroundColor;
        let originalColor = document.body.style.color;
        let originalFont = document.body.style.font;
        let originalFontfa = document.body.style.fontFamily;

        
        document.body.style.backgroundColor = "black";
        document.body.style.color = "#00ff00";
        document.body.style.fontFamily = "Courier New, monospace";

        //the style part is by chatgpt mostly
        let glitchText = document.createElement("div");
        glitchText.innerText = "SYSTEM BREACH DETECTED... LOADING...";
        glitchText.style = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30px; font-weight: bold; color: #00ff00; background: black; padding: 20px; z-index: 9999;";
        document.body.appendChild(glitchText);

        
        let hackerText = document.createElement("div");
        hackerText.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: black; color: #00ff00; font-family: monospace; padding: 20px; z-index: 1000;";
        document.body.appendChild(hackerText);

        let fakeCode = "";
        for (let i = 0; i < 100; i++) {
            fakeCode += "0x" + Math.random().toString(16) + " INIT... \n";
        }
        hackerText.innerText = fakeCode;

        setTimeout(() => {
            document.body.style.backgroundColor = originalBg; //restore 
            document.body.style.color = originalColor;
            document.body.style.font =originalFont;
            document.body.style.fontFamily =originalFontfa;

            glitchText.remove();
            hackerText.remove();
        }, 5000);
    }
});
////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const projectImages = document.querySelectorAll(".project-img");
    const carouselInner = document.getElementById("carousel-inner");
    const carouselIndicators = document.getElementById("carousel-indicators");
    const modal = new bootstrap.Modal(document.getElementById("imageCarouselModal"));

    projectImages.forEach((img, index) => {
        img.addEventListener("click", function () {
            const projectContainer = img.closest(".project");
            const images = projectContainer.querySelectorAll(".project-img");

            carouselInner.innerHTML = "";
            carouselIndicators.innerHTML = "";

            images.forEach((image, i) => {
                
                const carouselItem = document.createElement("div");
                carouselItem.classList.add("carousel-item");
                if (i === 0) carouselItem.classList.add("active"); //tried to make i=index but some images don't load. this will always start by first pic

                const imgElement = document.createElement("img");
                imgElement.src = image.src;
                imgElement.classList.add("d-block", "w-100");
                imgElement.alt = "Project Screenshot";

                carouselItem.appendChild(imgElement);
                carouselInner.appendChild(carouselItem);

                // Create indicators
                const indicator = document.createElement("button");
                indicator.setAttribute("type", "button");
                indicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
                indicator.setAttribute("data-bs-slide-to", i);
                if (i === 0) indicator.classList.add("active");

                carouselIndicators.appendChild(indicator);
            });

            modal.show();
        });
    });
});
