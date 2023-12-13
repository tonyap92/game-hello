class Game {
  constructor({
    buttonPlayElement,
    startContainer,
    gameContainer,
    timerElement,
    cards,
    buttonYesElement,
    buttonNoElement,
    cardsElement,
    currentNumberElement,
    totalElement,
    pointsElement,
    numberElement,
    promocodeElement,
    promotextElement,
    ticket,
    resultContainer,
    startOverBtnElement,
    buttonBeginningElement,
    buttonStandingsElement,
    buttonRegistrateElement,
    buttonFindOutResultElement,
    buttonReceiveCardElement,
    registrationContainer,
    standingsContainer,
    findOutResultContainer,
    receiveCardContainer,
    linesElement,
    menuConteiner,
    bodyContainer,
    headerContainer,
  }) {
    this.buttonPlayElement = buttonPlayElement;
    this.startContainer = startContainer;
    this.gameContainer = gameContainer;
    this.timerElement = timerElement;
    this.cards = cards;
    this.buttonYesElement = buttonYesElement;
    this.buttonNoElement = buttonNoElement;
    this.cardsElement = cardsElement;
    this.currentNumberElement = currentNumberElement;
    this.totalElement = totalElement;
    this.pointsElement = pointsElement;
    this.numberElement = numberElement;
    this.promocodeElement = promocodeElement;
    this.promotextElement = promotextElement;
    this.ticket = ticket;
    this.resultContainer = resultContainer;
    this.startOverBtnElement = startOverBtnElement;
    this.buttonBeginningElement = buttonBeginningElement;
    this.buttonStandingsElement = buttonStandingsElement;
    this.buttonRegistrateElement = buttonRegistrateElement;
    this.buttonFindOutResultElement = buttonFindOutResultElement || [];
    this.buttonReceiveCardElement = buttonReceiveCardElement || [];
    this.registrationContainer = registrationContainer;
    this.standingsContainer = standingsContainer;
    this.findOutResultContainer = findOutResultContainer;
    this.receiveCardContainer = receiveCardContainer;
    this.linesElement = linesElement;
    this.menuConteiner = menuConteiner;
    this.bodyContainer = bodyContainer;
    this.headerContainer = headerContainer;

    this.timeLeft = 60;

    this.currentIndex = 0;
    this.points = 0;
    this.promoCode = "";
    this.promoText = "";

    this.windows = [
      this.startContainer,
      this.gameContainer,
      this.resultContainer,
      this.registrationContainer,
      this.standingsContainer,
      this.findOutResultContainer,
      this.receiveCardContainer,
    ];

    if (
      buttonPlayElement &&
      buttonYesElement &&
      buttonNoElement &&
      gameContainer &&
      startOverBtnElement &&
      buttonBeginningElement &&
      buttonStandingsElement &&
      buttonRegistrateElement &&
      buttonFindOutResultElement &&
      buttonReceiveCardElement &&
      linesElement
    ) {
      this.buttonPlayElement.addEventListener("click", () => {
        this.startGame();
        this.startTimer();
      });

      this.buttonYesElement.addEventListener("click", () => {
        this.handleYesButtonClick();
      });

      this.buttonNoElement.addEventListener("click", () => {
        this.handleNoButtonClick();
      });

      this.startOverBtnElement.addEventListener("click", () => {
        this.redirectToIndex();
      });

      this.buttonBeginningElement.addEventListener("click", () => {
        this.showStartsWindow();
      });

      this.buttonStandingsElement.addEventListener("click", () => {
        this.showStandingsWindow();
      });

      this.buttonRegistrateElement.addEventListener("click", () => {
        this.showRegistrationWindow();
      });

      this.buttonFindOutResultElement.forEach((button) => {
        button.addEventListener("click", () => {
          this.showPointsWindow();
        });
      });

      this.buttonReceiveCardElement.forEach((button) => {
        button.addEventListener("click", () => {
          this.showAppWindow();
        });
      });

      this.linesElement.addEventListener("click", () => {
        this.showMenu();
      });
    }
  }

  // Функция обработки нажатия кнопки "начать игру"
  startGame() {
    this.startContainer.classList.add("hidden");
    this.gameContainer.classList.remove("hidden");

    this.updatePoints();
    this.shuffleArray(this.cards);
    console.log("> startGame, cards:", this.cards);
    this.displayCards();
  }

  // Функция для обновления таймера на странице
  updateTimer() {
    const minutes = Math.floor(this.timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (this.timeLeft % 60).toString().padStart(2, "0");
    if (this.timerElement) {
      this.timerElement.textContent = `${minutes}:${seconds}`;
    }

    if (this.timeLeft === 0) {
      this.overGame();
    }
  }

  // Функция для запуска таймера
  startTimer() {
    if (!this.timerInterval) {
      this.updateTimer();

      this.timerInterval = setInterval(() => {
        this.timeLeft--;
        this.updateTimer();
      }, 1000);
    }
  }

  // Функция для перемешивания массива
  shuffleArray(array) {
    let randomIndex;

    if (array && array.length > 0) {
      array.forEach((element, i) => {
        randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      });
    } else {
      return array;
    }
  }

  // Функция для отображения колоды карт в .hello-game__cards
  displayCards() {
    this.cards.forEach((card) => {
      this.cardsElement.innerHTML += `<img class="hello-game__card" src="${card.img}" alt="card">`;
    });
  }



  // Функция для обработки клика вправо
  handleYesButtonClick() {
    if (this.currentIndex < this.cards.length) {
      const currentCard = this.cards[this.currentIndex];
      if (currentCard.answer) {
        this.points++;
        this.animateCardRight();
      }
      this.currentIndex++;
      this.updateCard();
      this.updatePoints();
    }
  }

  // Функция для обработки клика влево
  handleNoButtonClick() {
    if (this.currentIndex < this.cards.length) {
      const currentCard = this.cards[this.currentIndex];
      if (!currentCard.answer) {
        this.points++;
        this.animateCardLeft();
      }
      this.currentIndex++;
      this.updateCard();
      this.updatePoints();
    }
  }

  // Функция для анимации карты вправо
  animateCardRight() {
    const cardImageElement = document.querySelector(".hello-game__card");
    if (cardImageElement) {
      cardImageElement.classList.add("animate-right");
    }
  }

  // Функция для анимации карты влево
  animateCardLeft() {
    const cardImageElement = document.querySelector(".hello-game__card");
    if (cardImageElement) {
      cardImageElement.classList.add("animate-left");
    }
  }

  // Функция для обновления текущей карты
  updateCard() {
    this.deleteCard();
    if (this.currentIndex < this.cards.length) {
      this.updateQuantityСards();
    } else {
      this.overGame();
    }
  }

  // Функция для удаления карты
  deleteCard() {
    const cardImageElement = document.querySelector(".hello-game__card");
    if (cardImageElement) {
      cardImageElement.remove();
    }
  }

  // Функция для обновления количества карточек
  updateQuantityСards() {
    if (this.currentNumberElement && this.totalElement) {
      this.currentNumberElement.textContent = this.currentIndex + 1;
      this.totalElement.textContent = this.cards.length;
    }
  }

  // Функция для обновления баллов
  updatePoints() {
    if (this.pointsElement && this.numberElement) {
      this.pointsElement.textContent = this.points;
      this.numberElement.textContent = this.points;
    }
  }

  //  Функция отображает, какой промокод и текст должны быть показаны на экране в зависимости от количества набранных очков
  showTicket() {
    if (this.points >= 0 && this.points < 10 && this.ticket) {
      this.promoCode = this.ticket[10].promocode;
      this.promoText = this.ticket[10].promotext;
    } else if (this.points >= 10 && this.points < 30 && this.ticket) {
      this.promoCode = this.ticket[30].promocode;
      this.promoText = this.ticket[30].promotext;
    } else if (this.points >= 30 && this.points < 50 && this.ticket) {
      this.promoCode = this.ticket[50].promocode;
      this.promoText = this.ticket[50].promotext;
    } else if (this.points >= 50 && this.points < 70 && this.ticket) {
      this.promoCode = this.ticket[70].promocode;
      this.promoText = this.ticket[70].promotext;
    }

    if (this.promocodeElement && this.promotextElement) {
      this.promocodeElement.innerHTML = this.promoCode;
      this.promotextElement.innerHTML = this.promoText;
    }
  }

  // Функция для завершения игры
  overGame() {
    clearInterval(this.timerInterval);

    if (this.gameContainer && this.resultContainer) {
      this.gameContainer.classList.add("hidden");
      this.resultContainer.classList.remove("hidden");
    }

    this.showTicket();
  }

  // Функция перенаправления на стартовую страницу с кнопок
  redirectToIndex() {
    location.href = "index.html";
  }

  // Функция перенаправления на стартовую страницу из меню
  showStartsWindow() {
    this.redirectToIndex();
    this.toggleMenu(false);
    if (this.startContainer) {
      this.startContainer.classList.add("hidden");
    }
  }

  // Функция показа окна с турнирной таблицей
  showStandingsWindow() {
    this.toggleMenu(false);

    this.windows.forEach((window) => {
      if (window && window !== this.standingsContainer) {
        window.classList.add("hidden");
      }
    });

    if (this.standingsContainer) {
      this.standingsContainer.classList.remove("hidden");
    }
  }

  // Функция показа окна с регистрацией
  showRegistrationWindow() {
    if (this.resultContainer && this.registrationContainer) {
      this.resultContainer.classList.add("hidden");
      this.registrationContainer.classList.remove("hidden");
    }
  }

  // Функция показа окна с очками
  showPointsWindow() {
    this.windows.forEach((window) => {
      if (window && window !== this.findOutResultContainer) {
        window.classList.add("hidden");
      }
    });

    if (this.findOutResultContainer) {
      this.findOutResultContainer.classList.remove("hidden");
    }
  }

  // Функция показа окна с ссылками на приложения
  showAppWindow() {
    this.windows.forEach((window) => {
      if (window && window !== this.receiveCardContainer) {
        window.classList.add("hidden");
      }
    });

    if (this.receiveCardContainer) {
      this.receiveCardContainer.classList.remove("hidden");
    }
  }

  // Функция определяет поведение при открытом и закрытом меню
  showMenu() {
    if (!this.menuConteiner.classList.contains("hidden")) {
      // Закрываем меню
      this.toggleMenu(false);
    } else {
      // Открываем меню
      this.toggleMenu(true);
    }
  }

  // Функция изменяет состояние элементов на странице, чтобы отобразить открытое/закрытое меню.
  toggleMenu(open) {
    if (this.menuConteiner && this.bodyContainer) {
      this.menuConteiner.classList.toggle("hidden", !open);
      this.bodyContainer.classList.toggle("header--active", open);
    }
  }
}

const game = new Game({
  buttonPlayElement: document.querySelector(".btn--play"),
  startContainer: document.querySelector(".hello-start"),
  gameContainer: document.querySelector(".hello-game"),
  timerElement: document.querySelector(".hello-game__timer-time"),
  buttonYesElement: document.querySelector(".variant-yes"),
  buttonNoElement: document.querySelector(".variant-no"),
  cardsElement: document.querySelector(".hello-game__cards"),
  pointsElement: document.querySelector(".hello-game__csores-points"),
  numberElement: document.querySelector(".hello-result__number"),
  currentNumberElement: document.querySelector(".hello-game__current"),
  totalElement: document.querySelector(".hello-game__total"),
  promocodeElement: document.querySelector(".hello-result__promocode"),
  promotextElement: document.querySelector(".hello-result__promotext"),
  resultContainer: document.querySelector(".hello-result"),
  startOverBtnElement: document.querySelector(".hello-result__btn.btn--play"),
  buttonBeginningElement: document.querySelector(".btn--beginning"),
  buttonStandingsElement: document.querySelector(".btn--standings"),
  buttonRegistrateElement: document.querySelector(".btn--registrate"),
  registrationContainer: document.querySelector(".hello-registration"),
  standingsContainer: document.querySelector(".hello-standings"),
  buttonFindOutResultElement: document.querySelectorAll(".btn--find-out-result"),
  findOutResultContainer: document.querySelector(".hello-find-out-result"),
  linesElement: document.querySelector(".hello-header__lines"),
  menuConteiner: document.querySelector(".hello-menu"),
  bodyContainer: document.querySelector("body"),
  headerContainer: document.querySelector(".hello-header"),
  receiveCardContainer: document.querySelector(".hello-app"),
  buttonReceiveCardElement: document.querySelectorAll(".btn--receive"),
  cards: cards,
  ticket: ticket,
});
