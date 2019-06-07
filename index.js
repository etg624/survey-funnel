(function () {
  const questions = [
    {
      question: 'What is your gender?',
      choices: ['Male', 'Female']
    },
    {
      question: 'What is your age range?',
      choices: ['Under 18', '18-29', '30-39', '40-49', '50-59', '60+']
    },
    {
      question: 'How often do you visit a Wholesale store?',
      choices: [
        'More than once a week',
        'Weekly',
        'Every other week',
        'Monthly',
        'Never'
      ]
    },
    {
      question:
        'When is the last time you bought a product from a Wholesale store',
      choices: [
        'Within the past week',
        'Within the last month',
        'More than a month ago',
        'Never'
      ]
    },
    {
      question: 'Where are the majority of your Wholesale purchases done?',
      choices: ['Local Store', 'Online', 'Evenly between the two']
    },
    {
      question:
        'What do you think about the membership pricing at your local Wholesale store?',
      choices: [
        "It's way too high",
        "It's a little too high",
        "It's fairly priced",
        "It's under priced",
        'There Should be no membership'
      ]
    },
    {
      question:
        'How often do you buy food at your local Wholesale store food court?',
      choices: ['Every time', 'Sometimes', 'Rarely', 'Never']
    },
    {
      question:
        'How are the waiting times at your local Wholesale store checkout lines?',
      choices: [
        'Always too long',
        'Sometimes too long',
        'What I would expect',
        'Short and quick'
      ]
    },
    {
      question: 'How often do you shop online at your local Wholesale store?',
      choices: ['Often', 'Sometimes', 'Rarely', 'Never']
    },
    {
      question:
        'How do you rate your overall customer experience your local Wholesale store?',
      choices: ['A- to A+', 'B- to B+', 'C- to C+', 'D- to D+', 'F']
    },
    {
      question:
        'How likely are you to recommend your local Wholesale store to a friend?',
      choices: ['Very Likely', 'Likely', 'Unlikely', 'Very unlikely', 'Never']
    }
  ];

  function buildSurvey() {
    // store the html in an array to join later.
    const output = [];
    const selectedAnswers = [];
    questions.forEach((question, questionNumber) => {
      const buttons = [];

      for (let choice of question.choices) {
        buttons.push(
          `
      <button class="choice">
         ${choice}
      </button>`
        );
      }

      output.push(`
        <div class="slide">
        <p class="question-number"> Question
          ${questionNumber + 1} of ${questions.length}
          </p>
          <h2 class="question">${question.question}</h2>
          <div class="choices">${buttons.join('')}</div>
        </div> 
      `);
    });

    surveyContainer.innerHTML = output.join('');
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    slides[n].classList.add('active');
    currentSlide = n;

    if (currentSlide === 0) {
      modal.style.display = 'block';
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    if (currentSlide === slides.length - 1) {
      //TODO show loader!
    }
  }

  function showNextQuestion(e) {
    e.preventDefault();
    showSlide(currentSlide + 1);
  }

  const surveyContainer = document.getElementById('survey');
  buildSurvey();

  surveyContainer.addEventListener('click', e => showNextQuestion);

  const dateContainer = document.querySelector('.date');
  const dateObj = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  dateContainer.innerHTML = `${months[dateObj.getMonth()]} ${day}, ${year}`;
  const modal = document.querySelector('.modal');
  const slides = document.querySelectorAll('.slide');
  const choices = document.querySelectorAll('.choice');
  const closeModal = document.querySelector('.modal-close');
  choices.forEach(choice => {
    choice.addEventListener('click', showNextQuestion);
  });
  let currentSlide = 0;
  showSlide(0);
})();
