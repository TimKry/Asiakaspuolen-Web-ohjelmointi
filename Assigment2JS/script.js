let questions = [];

fetch("questions.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Cannot load questions");
    }
    return response.json();
  })
  .then(data => {
    questions = data;
    showQuiz();
  })
  .catch(error => {
    document.getElementById("quiz").innerText = "Error loading questions.";
    console.error(error);
  });



  function showQuiz() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  questions.forEach((q, index) => {

    let questionBlock = `
      <div class="question-container">
        <h3>Question ${index + 1}</h3>
        <p>${q.question}</p>
    `;

    q.options.forEach((option, i) => {
      questionBlock += `
        <label>
          <input type="radio" name="question${index}" value="${i}">
          ${option}
        </label>
      `;
    });

    questionBlock += `</div>`;

    quizDiv.innerHTML += questionBlock;
  });
}



document.getElementById("submit").addEventListener("click", () => {
  let score = 0;

  questions.forEach((q, index) => {
    const answer = document.querySelector(
      `input[name="question${index}"]:checked`
    );

    if (answer && Number(answer.value) === q.answer) {
      score++;
    }
  });

  document.getElementById("result").innerText =
    "Your score: " + score + " / " + questions.length;
});

document.getElementById("reset").addEventListener("click", () => {
  showQuiz();
  document.getElementById("result").innerText = "";
});


