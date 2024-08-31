document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const studentName = document.getElementById('studentNameInput').value;
    if (studentName) {
        showWelcomeMessage(studentName);
    }
});

function showWelcomeMessage(name) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `Welcome, ${name}! I'm glad to have you here.`;
    
    document.getElementById('codeSnippet').style.display = 'block';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('resources').style.display = 'block';
    
    showMessage(name);
    setupQuiz();
    setupResources();
}

function showMessage(name) {
    const codeSnippet = document.getElementById('codeSnippet');
    codeSnippet.innerHTML = `
function startTrip(student) {
console.log("¡Welcome to the world of web application development, " + student + "!");

const success = (effort, passion) => {
return effort + passion;
};

let yourFuture = success(yourEffort, yourPassion);

return "Your future in web application development will be bright.
¡Enjoy the ride!!";
}

// Your adventure starts here
console</span>.log(startTravelDevelopment(<span style="color: #f1fa8c;">"${name}"</span>));`;

}

function setupQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    const quizQuestion = "What programming language is commonly used for web application development?";
    const quizOptions = ["Java", "Swift", "JavaScript", "C++"];
    const correctAnswer = "JavaScript";

    let quizHTML = `<p>${quizQuestion}</p>`;
    quizOptions.forEach(option => {
        quizHTML += `<button onclick="checkAnswer('${option}')">${option}</button> `;
    });
    quizHTML += '<div id="quizResult"></div>';
    quizContainer.innerHTML = quizHTML;
}

function checkAnswer(answer) {
    const resultDiv = document.getElementById('quizResult');
    if (answer === "JavaScript") {
        resultDiv.innerHTML = "Correct! :) JavaScript is widely used in frameworks such as vue.js and node.js for web application development.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = `Incorrect :(`;
        resultDiv.style.color = "red";
    }
}

function setupResources() {
    const resources = [
        { name: "Guía de Inicio Rápido", url: "#guia-inicio" },
        { name: "Plataforma de Aprendizaje", url: "#plataforma-aprendizaje" },
        { name: "Foro de Estudiantes", url: "#foro-estudiantes" },
        { name: "Calendario del Curso", url: "#calendario-curso" }
    ];

    const resourceLinksContainer = document.getElementById('resourceLinks');
    resources.forEach(resource => {
        const link = document.createElement('a');
        link.href = resource.url;
        link.className = 'resource-link';
        link.textContent = resource.name;
        resourceLinksContainer.appendChild(link);
    });
}