document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("startButton");
    var quizContainer = document.getElementById("quizContainer");
    var resultContainer = document.getElementById("resultContainer");
    var scoreElement = document.getElementById("score");
    var score = 0;
    var questionIndex = 0;
    var questions = [
        {
            question: " What is the primary advantage of using TypeScript over JavaScript?",
            choices: ["TypeScript is slower than JavaScript", " TypeScript provides static typing", "TypeScript does not support OOP concepts", "TypeScript is not compatible with JavaScript libraries"],
            correctAnswer: "TypeScript provides static typing",
        },
        {
            question: "In TypeScript, which of the following keyword is used to define a constant?",
            choices: ["var", "let", "const", "static"],
            correctAnswer: "const",
        },
        {
            question: "Who was the first person to step on the Moon?",
            choices: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
            correctAnswer: "Neil Armstrong",
        },
        {
            question: "Who is the richest man in the world?",
            choices: ["Elon Musk", "Jeff Bezos", "Bernard Arnault", "Mark Zuckerberg"],
            correctAnswer: "Elon Musk",
        },
        {
            question: "What is the correct syntax for linking an external CSS file in an HTML document?",
            choices: ["<script src= `style.css`>", "<style src=`style.css`>", "<link rel=`stylesheet` href=`style.css`>", "<link src=style.css"],
            correctAnswer: " <link rel=stylesheet` href=style.css`>",
        },
        {
            question: "How do you center a block-level element horizontally in CSS?",
            choices: ["float: center:", "align: center;", "margin: 0 auto;", "text-align: center;"],
            correctAnswer: " margin: 0 auto;",
        },
        {
            question: "How do you center a block-level element horizontally in CSS?",
            choices: ["float: center;", "align: center;", "margin: 0 auto;", "text-align: center;"],
            correctAnswer: "margin: 0 auto;",
        },
        {
            question: "Which HTML tag is used to define an unordered list?",
            choices: ["<ul>", "<ol>", "<li>", "<dl>"],
            correctAnswer: "<ul>",
        },
        {
            question: "Which of the following is used to create a hyperlink in HTML?",
            choices: ["<link>", "<a>", "<href>", "<nav>"],
            correctAnswer: "<a>",
        },
        {
            question: "What does CSS stand for?",
            choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
            correctAnswer: "Cascading Style Sheets",
        },
        {
            question: "Which of the following TypeScript features supports object-oriented programming?",
            choices: ["Interfaces", "Classes", "Functions", "Decorators"],
            correctAnswer: "Classes",
        },
        {
            question: "Which HTML attribute is used to specify the URL for a link?",
            choices: ["href", "src", "link", "path"],
            correctAnswer: "href",
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            choices: ["font-color", "color", "text-color", "background-color"],
            correctAnswer: "color",
        },
        {
            question: "In TypeScript, which keyword is used to declare a variable with block scope?",
            choices: ["var", "let", "const", "global"],
            correctAnswer: "let",
        },
        {
            question: "How do you add a comment in HTML?",
            choices: ["// comment", "/* comment */", "<!-- comment -->", "`comment`"],
            correctAnswer: "<!-- comment -->",
        },
        {
            question: "Which of the following selectors selects all `<p>` elements inside a `<div>` element in CSS?",
            choices: ["div.p", "div > p", "div + p", "div p"],
            correctAnswer: "div p",
        },
        {
            question: "What is the default display value for a `<div>` element in CSS?",
            choices: ["inline", "inline-block", "block", "flex"],
            correctAnswer: "block",
        },
        {
            question: "What does the 'Type' in TypeScript primarily refer to?",
            choices: ["Functionality", "Data Types", "Syntax", "Variables"],
            correctAnswer: "Data Types",
        },
        {
            question: "Which of the following HTML tags is used to create a table row?",
            choices: ["<tr>", "<td>", "<th>", "<table-row>"],
            correctAnswer: "<tr>",
        },
        {
            question: "Which of the following is used to select an element with id 'header' in CSS?",
            choices: [".header", "#header", "header", "*header"],
            correctAnswer: "#header",
        },
        {
            question: "In TypeScript, which operator is used to check for both value and type equality?",
            choices: ["==", "===", "!=", "!=="],
            correctAnswer: "===",
        },
        {
            question: "Which CSS property is used to create space between the border and the content of an element?",
            choices: ["margin", "padding", "border-spacing", "content-spacing"],
            correctAnswer: "padding",
        },
        {
            question: "In HTML, which attribute is used to specify an image's alternative text?",
            choices: ["alt", "src", "title", "img-alt"],
            correctAnswer: "alt",
        },
        {
            question: "Which of the following is the correct syntax for importing a module in TypeScript?",
            choices: ["import * from 'module';", "import {module} from 'module';", "import { module } from 'module';", "import module from 'module';"],
            correctAnswer: "import { module } from 'module';",
        },
        {
            question: "Which CSS property is used to set the width of an element?",
            choices: ["width", "height", "size", "block-size"],
            correctAnswer: "width",
        },
        {
            question: "In TypeScript, what does the 'void' type represent?",
            choices: ["No data type", "A number type", "A string type", "Undefined behavior"],
            correctAnswer: "No data type",
        },
        {
            question: "Which of the following CSS properties is used to make text bold?",
            choices: ["font-style", "text-weight", "font-weight", "text-style"],
            correctAnswer: "font-weight",
        },
        {
            question: "What is the purpose of the 'for' attribute in an HTML label tag?",
            choices: ["To associate the label with a form element", "To specify the form action", "To style the label", "To iterate over form elements"],
            correctAnswer: "To associate the label with a form element",
        },
        {
            question: "Which TypeScript utility type allows creating a type with all properties set to optional?",
            choices: ["Required<T>", "Partial<T>", "Readonly<T>", "Record<T>"],
            correctAnswer: "Partial<T>",
        },
        {
            question: "In CSS, which property is used to set the spacing between lines of text?",
            choices: ["letter-spacing", "line-spacing", "line-height", "text-indent"],
            correctAnswer: "line-height",
        }
    ];
    function loadQuestion() {
        // Check if we are done with all questions
        if (questionIndex >= questions.length) {
            quizContainer.style.display = "none";
            resultContainer.style.display = "block";
            scoreElement.textContent = "".concat(score, "/").concat(questions.length);
            return;
        }
        // Display current question
        var currentQuestion = questions[questionIndex];
        var questionElement = document.getElementById("question");
        questionElement.textContent = currentQuestion.question;
        // Clear previous choices
        var choicesElement = document.getElementById("choices");
        choicesElement.innerHTML = "";
        // Display the new choices as buttons
        currentQuestion.choices.forEach(function (choice) {
            var button = document.createElement("button");
            button.className = "choiceButton";
            button.textContent = choice;
            button.onclick = function () {
                if (choice === currentQuestion.correctAnswer) {
                    score++;
                }
                questionIndex++;
                loadQuestion();
            };
            choicesElement.appendChild(button);
        });
    }
    // Start quiz event listener
    startButton.addEventListener("click", function () {
        startButton.style.display = "none"; // Hide start button
        quizContainer.style.display = "block"; // Show quiz container
        loadQuestion(); // Load the first question
    });
});
