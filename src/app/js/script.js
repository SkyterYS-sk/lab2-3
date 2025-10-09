document.addEventListener("DOMContentLoaded", () => {
    const fName = 'Maks'
    const lName = 'Khvalko'

    const firName = document.getElementById('firstName')
    const lasName = document.getElementById('lastName')

    const skillsLeft = [
        { name: "Microsoft Word", value: 50 },
        { name: "Web Designing", value: 75 },
    ];

    const skillsRight = [
        { name: "Graphic Designing", value: 60 },
        { name: "Microsoft PowerPoint", value: 80 }
    ];

    const hobbyArray = [
        "Writing",
        "Reading Books",
        "Playing Football",
        "Photography",
        "Traveling"
    ];

    const col1Skills = [
        { name: "English", value: 75 },
        { name: "Spanish", value: 75 }
    ];

    const col2Skills = [
        { name: "French", value: 75 },
        { name: "German", value: 75 }
    ];

    const col3Skills = [
        { name: "Japanese", value: 75 },
        { name: "Portuguese", value: 75 }
    ];

    const blocks = document.querySelectorAll('.contact-block');

    if(firName){
        firName.textContent = fName;
    } else {
        console.warn("First Name is required");
    }

    if(lasName){
        lasName.textContent = lName;
    } else {
        console.warn("Last Name is required");
    }


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

    const hobbiesList = document.getElementById("hobbies");

    hobbiesList.innerHTML = "";

    hobbyArray.forEach(hobby => {
        const li = document.createElement("li");
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });

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

    blocks.forEach(block => {
        const header = block.querySelector('.contact-header');
        const arrow = block.querySelector('.arrow');

        header.addEventListener('click', () => {
            block.classList.toggle('open');
            arrow.classList.toggle('rotated');
        });
    });

    renderSkills(skillsLeft, "skillsLeft");
    renderSkills(skillsRight, "skillsRight");
    renderLanguages(col1Skills, "col1", "language-2");
    renderLanguages(col2Skills, "col2", "language");
    renderLanguages(col3Skills, "col3", "language-3");
});