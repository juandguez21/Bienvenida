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
        { name: "Subject Presentation", url: "https://universi799.sharepoint.com/:b:/s/TI31BISDSM-WEBAPPLICATIONS/EX7uNaNt1MtJsRusPm4cmnAB72EaTG86iEiLeXdlwKKenQ?e=HhtuT0" },
        { name: "Teams", url: "https://teams.microsoft.com/l/team/19%3AREfgIunGWUWZauQrdc3OICLA8ks3q6UfvurMu5Rgx0c1%40thread.tacv2/conversations?groupId=671cc057-c5f2-437c-9dcf-77ec4488a8d8&tenantId=ae30c8b3-eaa6-434d-bdb7-24dfbc19d77a" },
        { name: "Telegram", url: "https://t.me/+O2K4FF_xoao0YTFh" },
        { name: "Diagnostic Evaluation", url: "https://www.kahoot.it" }
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