document.addEventListener("DOMContentLoaded", () => {
    // Add 'visible' class on scroll to animate sections
    document.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    });

    // Highlight nav menu based on current section
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Remove 'active' class from all nav links
                    navLinks.forEach((link) => link.classList.remove("active"));

                    // Add 'active' class to the link corresponding to the current section
                    const activeLink = document.querySelector(
                        `nav ul li a[href="#${entry.target.id}"]`
                    );
                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });
        },
        {
            threshold: 0.6, // Trigger when 60% of the section is visible
        }
    );

    // Observe all sections
    sections.forEach((section) => observer.observe(section));
    
        // Education data


    // Find the skills section to append the education timeline
    const skillsSection = document.querySelector("#skills");

    // Create the timeline container
    const timelineContainer = document.createElement("div");
    timelineContainer.className = "education-timeline";

    // Populate the timeline with data
    educationData.forEach((edu) => {
        const eduItem = document.createElement("div");
        eduItem.className = "timeline-item";

        eduItem.innerHTML = `
            <span class="timeline-year">${edu.year}</span>
            <div class="timeline-content">
                <h3>${edu.title}</h3>
                <p><strong>${edu.institution}</strong></p>
                <p>${edu.description}</p>
            </div>
        `;

        timelineContainer.appendChild(eduItem);
    });

    // Append the timeline to the skills section
    skillsSection.appendChild(timelineContainer);
    
    
});

document.addEventListener("scroll", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add("visible");
        }
    });
});



        // List of phrases
        const phrases = ["I'm a Programmer", "I'm a Developer", "I'm a Designer"];

        // Get the rotating text container
        const rotatingText = document.getElementById("rotating-text");

        let phraseIndex = 0; // Start with the first phrase
        let charIndex = 0; // Start typing from the first character
        let isDeleting = false; // Track whether text is being deleted

        function animateText() {
            const currentPhrase = phrases[phraseIndex]; // Current phrase to display

            if (!isDeleting && charIndex <= currentPhrase.length) {
                // Type the text
                rotatingText.textContent = currentPhrase.substring(0, charIndex);
                charIndex++;
                setTimeout(animateText, 200); // Adjust typing speed
            } else if (isDeleting && charIndex >= 0) {
                // Delete the text
                rotatingText.textContent = currentPhrase.substring(0, charIndex);
                charIndex--;
                setTimeout(animateText, 50); // Adjust deleting speed
            } else if (!isDeleting) {
                // Pause after typing the text
                isDeleting = true;
                setTimeout(animateText, 2000); // Pause before deleting
            } else {
                // Move to the next phrase
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Loop back to the start
                setTimeout(animateText, 900); // Pause before typing the next phrase
            }
        }

        // Start the animation
        animateText();

// Matrix Animation
(function() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.classList.add('matrix-background');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%+-_";
    const fontSize = 20; // Size of the characters
    const columns = canvas.width / fontSize; // Number of columns

    let drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fade the previous frame
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#00FF00"; // Matrix green color
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            let text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50); // Speed of the animation

    // Adjust canvas size when window is resized
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    });
})();


        window.addEventListener('load', () => {
            const section = document.getElementById('section');
            setTimeout(() => {
                section.classList.add('visible');
            }, 500); // Delay to trigger the animation
        });
