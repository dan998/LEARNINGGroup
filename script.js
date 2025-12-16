// All lessons
const lessons = [
    // Python
     { language: "Python", level: "History", topic: "Python introduction", link: "lessons/python/introduction.html" },
    { language: "Python", level: "Level 1", topic: "Python Ethical Hacking Guide", link: "lessons/python/python-ethical-hacking-guide.html" },
    { language: "Python", level: "Level 2", topic: "Python Ethical Hacking Level 2", link: "lessons/python/python-ethical-hacking-level2.html" },
    { language: "Python", level: "Level 3", topic: "Python Ethical Hacking Level 3", link: "lessons/python/python-ethical-hacking-level3.html" },
    { language: "Python", level: "Level 4", topic: "Python Ethical Hacking Level 4", link: "lessons/python/python-ethical-hacking-level4.html" },
    { language: "Python", level: "Level 5", topic: "Python Ethical Hacking Level 5", link: "#" }, // Coming Soon

    // Java
    { language: "Java", level: "Level 1", topic: "Java Basics", link: "lessons/java/java-basics.html" },
    { language: "Java", level: "Level 2", topic: "Java OOP Concepts", link: "#" },
    { language: "Java", level: "Level 3", topic: "Java Advanced Topics", link: "#" },
    { language: "Java", level: "Level 4", topic: "Java Project Example", link: "#" },

    // JavaScript
    { language: "JavaScript", level: "Level 1", topic: "JavaScript Basics", link: "lessons/javascript/js-basics.html" },
    { language: "JavaScript", level: "Level 2", topic: "JavaScript DOM Manipulation", link: "#" },
    { language: "JavaScript", level: "Level 3", topic: "JavaScript Advanced", link: "#" },
    { language: "JavaScript", level: "Level 4", topic: "JavaScript Project", link: "#" }
];

const container = document.getElementById("lessons-container");

// Map language to emoji
const languageIcons = {
    "Python": "🐍",
    "Java": "☕",
    "JavaScript": "⚡"
};

function renderLessons() {
    container.innerHTML = "";

    const languages = [...new Set(lessons.map(l => l.language))];

    languages.forEach(lang => {
        const langDiv = document.createElement("div");
        langDiv.classList.add("language-group");

        const langTitle = document.createElement("h2");
        langTitle.textContent = lang;
        langTitle.setAttribute("data-icon", languageIcons[lang] || "📚");
        langDiv.appendChild(langTitle);

        lessons.filter(l => l.language === lang).forEach(lesson => {
            const lessonLink = document.createElement("a");
            lessonLink.textContent = `${lesson.level} → ${lesson.topic}`;

            if (lesson.link === "#") {
                lessonLink.classList.add("coming-soon");
                lessonLink.href = "javascript:void(0)";
            } else {
                lessonLink.classList.add("lesson-link");
                lessonLink.href = lesson.link;
                lessonLink.target = "_blank";
            }

            langDiv.appendChild(lessonLink);
        });

        container.appendChild(langDiv);
    });
}

// Render lessons on page load
renderLessons();