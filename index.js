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

  const offers = [
    {
      imgUrl: 'https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/cbdspray.png',
      title: '100% Pure CBD Oil',
      description: 'Relieve pain and inflammation, and reduce anxiety! Legal in 50 states.',
      normalPrice: '100.00',
      todaysPrice: '0.00',
      postage: '4.95',
      qtyLeft: '1',
      usersClaimed: '7'
    },
    {
      imgUrl: 'https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/skincare_new_us.png',
      title: 'Celebrity Skincare kit',
      description: 'Better than botox! Get Hollywood\'s best kept beauty secret',
      normalPrice: '249.95',
      todaysPrice: '0.00',
      postage: '1.99',
      qtyLeft: '2',
      usersClaimed: '23'
    },
    {
      imgUrl: 'https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/flight_img.png',
      title: 'Pro Tactical LED Flashlight',
      description: 'The world\'s brightest, most powerful &amp; reliable tactical LED flashlight! Yours FREE!',
      normalPrice: '249.95',
      todaysPrice: '0.00',
      postage: '1.99',
      qtyLeft: '2',
      usersClaimed: '23'
    },
  ]


  const comments = [
    {
      name: 'Mary Beal',
      comment: 'Amazing!!!!!',
      userImage: 'https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/css_sprites_comm.png'
    }
  ]

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

  function buildOfferWall() {
    const output = [];
    offers.forEach(offer => {
      const { imgUrl, title, description, postage, normalPrice, todaysPrice, qtyLeft, usersClaimed } = offer
      output.push(`
          <div class="offer-card"> 
              <img src=${imgUrl} class="offer-image"/>
          <div class="desc-prices">
         
            <h4 class="offer-title bold">${title}</h4>
            <p class="offer-desc">${description}</p>
        
            <p class="offer-normal price">
            Normal Price: <span class="line-through">$${normalPrice}</span>
            </p>
            <p class="offer-todays price">
            <span class="bold">Today's Price:</span> <span class="bold green">$${todaysPrice}!</span>
            </p>
            <p class="offer-postage price">
            Postage: $${postage}
            </p>
            
            <p class="price"> Qty Left: ${qtyLeft} </p>
          </div>
          <div class="redeem">
            <button class="redeem-button bold">Get My Reward</button>
            <p class="claimed">${usersClaimed} users have chosen this reward</p>
          
          </div>
          </div>
        `)
      offerWall.innerHTML = output.join('')
    })
  }

  function buildCommentSection() {

  }

  // function showSlide(n) {
  //   slides[currentSlide].classList.remove('active');
  //   slides[n].classList.add('active');
  //   currentSlide = n;

  // if (currentSlide !== slides.length - 1) {
  //   offerWallMain.style.opacity = '0'
  // }

  // if (currentSlide === 0) {
  //   modal.style.display = 'block';
  //   closeModal.addEventListener('click', () => {
  //     modal.style.display = 'none';
  //   });
  // }

  // if (currentSlide === slides.length - 1) {
  //   surveyMain.innerHTML = ''
  //   offerWallMain.style.opacity = '1'
  //   buildOfferWall()
  // }
  // }

  function imageClickAlert(title, postage) {
    alert(`
      Congratulations! ${title} has been reserved for you! 

      You have five minutes before we could offer it to the next qualified visitor!

      On the next page, read the offer details, enter your postage address and pay a small postage fee($${postage})!
    `)
  }

  function showNextQuestion(e) {
    e.preventDefault();
    showSlide(currentSlide + 1);
  }

  const surveyContainer = document.getElementById('survey');
  // buildSurvey();
  //TODO Move these constants down after offer wall is done
  const offerWall = document.querySelector('.offer-wall');
  const surveyMain = document.querySelector('.survey-main')
  surveyMain.style.display = 'none'
  buildOfferWall()

  surveyContainer.addEventListener('click', () => showNextQuestion);

  const date = document.querySelectorAll('.date');

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
  const modal = document.querySelector('.modal');
  const slides = document.querySelectorAll('.slide');
  const choices = document.querySelectorAll('.choice');
  const closeModal = document.querySelector('.modal-close');
  const offerWallMain = document.querySelector('.offer-wall-main');
  const commentSection = document.querySelector('.comment-section')

  date.forEach(div => {
    div.innerHTML = `${months[dateObj.getMonth()]} ${day}, ${year}`;
  })

  choices.forEach(choice => {
    choice.addEventListener('click', showNextQuestion);
  });
  let currentSlide = 0;
  // showSlide(0);
})();
