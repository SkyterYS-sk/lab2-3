document.addEventListener("DOMContentLoaded", () => {
    // Завантажуємо всі дані з JSON через Fetch API
    fetch("../Data base/data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP помилка! Статус: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Помилка при завантаженні даних:', error);
            document.body.innerHTML = `<p style="color:red; text-align:center;">Не вдалося завантажити дані 😔(</p>`;
        })
        .then(data => {
            const {
                firstName,
                lastName,
                skillsLeft,
                skillsRight,
                hobbyArray,
                col1Skills,
                col2Skills,
                col3Skills
            } = data;

            const firName = document.getElementById("firstName");
            const lasName = document.getElementById("lastName");

            if (firName) firName.textContent = firstName || "—";
            if (lasName) lasName.textContent = lastName || "—";

            function renderSkills(skills, containerId) {
                const container = document.getElementById(containerId);
                if (!container) return;
                container.innerHTML = "";

                skills.forEach(skill => {
                    const div = document.createElement("div");
                    div.classList.add("skill");
                    div.innerHTML = `
            <div class="text-14"><strong>${skill.name}</strong></div>
            <input type="range" value="${skill.value}" style="--val:${skill.value}%;">
          `;
                    container.appendChild(div);
                });
            }

            function renderLanguages(skills, containerId, divClass) {
                const container = document.getElementById(containerId);
                if (!container) return;
                container.innerHTML = "";

                skills.forEach(skill => {
                    const div = document.createElement("div");
                    div.classList.add(divClass);
                    div.innerHTML = `
            <span>${skill.name}</span>
            <input type="range" value="${skill.value}" max="100" style="--val:${skill.value}%">
          `;
                    container.appendChild(div);
                });
            }

            const hobbiesList = document.getElementById("hobbies");
            if (hobbiesList) {
                hobbiesList.innerHTML = "";
                hobbyArray.forEach(hobby => {
                    const li = document.createElement("li");
                    li.textContent = hobby;
                    hobbiesList.appendChild(li);
                });
            }

            const blocks = document.querySelectorAll(".contact-block");
            blocks.forEach(block => {
                const header = block.querySelector(".contact-header");
                const arrow = block.querySelector(".arrow");

                if (header) {
                    header.addEventListener("click", () => {
                        block.classList.toggle("open");
                        if (arrow) arrow.classList.toggle("rotated");
                    });
                }
            });

            renderSkills(skillsLeft, "skillsLeft");
            renderSkills(skillsRight, "skillsRight");
            renderLanguages(col1Skills, "col1", "language-2");
            renderLanguages(col2Skills, "col2", "language");
            renderLanguages(col3Skills, "col3", "language-3");
        })
        .catch(error => console.error("Помилка при завантаженні JSON:", error));
});
