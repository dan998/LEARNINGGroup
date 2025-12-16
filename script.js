// Get the container element
const lessonsList = document.getElementById("lessons-list");

// Loop through lessons array and create list items
lessons.forEach(lesson => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = lesson.link;
    a.target = "_blank";
    a.textContent = lesson.topic;
    a.style.color = "#38bdf8";
    a.style.textDecoration = "none";
    a.style.display = "block";
    a.style.marginBottom = "8px";
    li.appendChild(a);
    lessonsList.appendChild(li);
});
