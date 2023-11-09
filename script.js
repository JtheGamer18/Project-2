const quizData = [
    {
      question: "What was the first video game to ever exist?",
      a: "Tennis for Two",
      b: " Gran Trak 10",
      c: "Galaxy Game",
      d: "Pong",
      correct: "a",
    },
    {
      question: "Who was the voice actor of Mario?",
      a: "Kevin Afghani",
      b: "Bob Hoskins",
      c: "Charles Martinet",
      d: "Chris Pratt",
      correct: "c",
    },
    {
      question: "Which kirby game made the most money?",
      a: "Kirby Super Star Ultra",
      b: "Kirby and the Forgotten Land",
      c: "Kirby Star Allies",
      d: "Kirby's Dreamland",
      correct: "b",
    },
    {
        question: "Which youtuber has the most subscribers?",
        a: "Dawko",
        b: "FusionZGamer",
        c: "SuperHorrorBro",
        d: "Markiplier",
        correct: "d"
      },
  ];
  const quiz = document.getElementById("quiz");
  const submit = document.getElementById("submit");
  const results = document.getElementById("results");
  let currentQuiz = 0;
  let score = 0;
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = "";
    const question = document.createElement("div");
    question.classList.add("quiz-question");
    question.innerText = currentQuizData.question;
    const options = document.createElement("ul");
    options.classList.add("quiz-options");
    for (let key in currentQuizData) {
      if (key !== "question" && key !== "correct") {
        const option = document.createElement("li");
        option.classList.add("quiz-option");
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = key;
        label.appendChild(input);
        label.append(currentQuizData[key]);
        option.appendChild(label);
        options.appendChild(option);
      }
    }
    quiz.appendChild(question);
    quiz.appendChild(options);
  }
  function getSelected() {
    const inputs = document.querySelectorAll("input");
    for (let input of inputs) {
      if (input.checked) {
        return input.value;
      }
    } 
    return undefined;
  }
  function showResults() {
    quiz.innerHTML = "";
    submit.style.display = "none";
    results.innerText = `You scored ${score} out of ${quizData.length}`;
  }
  loadQuiz();
  submit.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        showResults();
      }
        }
    }
    );

  