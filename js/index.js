document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const studentName = document.getElementById('studentNameInput').value;
    if (studentName) {
        showWelcomeMessage(studentName);
    }
});

function showWelcomeMessage(name) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `¡Bienvenido, ${name}! Nos alegra tenerte aquí.`;
    
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
function iniciarViaje(estudiante) {
console.log("¡Bienvenido al mundo del desarrollo multiplataforma, " + estudiante + "!");

const exito = (esfuerzo, pasion) => {
return esfuerzo + pasion;
};

let tuFuturo = exito(tuEsfuerzo, tuPasion);

return "Tu futuro en el desarrollo de software es brillante.¡Disfruta el viaje!";
}

// Tu aventura comienza aquí
console</span>.log(iniciarViajeDesarrollo(<span style="color: #f1fa8c;">"${name}"</span>));`;

}

function setupQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    const quizQuestion = "¿Qué lenguaje de programación se utiliza comúnmente para el desarrollo de aplicaciones móviles multiplataforma?";
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
        resultDiv.innerHTML = "¡Correcto! JavaScript es ampliamente utilizado en frameworks como React Native para el desarrollo multiplataforma.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = `Incorrecto. La respuesta correcta es JavaScript. Es muy utilizado en el desarrollo multiplataforma.`;
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