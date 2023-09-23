const bankAccount = {
    ownerName: "Petro",
    accountNumber: "1049258",
    balance: 0,
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Рахунок поповнено на ${amount} грн. Загальний баланс: ${this.balance} грн.`);
      } else {
        console.log("Введіть суму");
      }
    },
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          console.log(`Знято ${amount} грн. Загальний баланс: ${this.balance} грн.`);
        } else if (amount > this.balance) {
          console.log("Недостатньо грошей на рахунку.");
        } else {
          console.log("Введіть суму");
        }
      }
    };
    
      bankAccount.deposit(1000); 
      bankAccount.withdraw(500);
    //   2
    const weather = {
        temperature: 0,

        isBelowZero: function() {
            return this.temperature < 0;
        }
    };

    const temperatureInput = document.getElementById("temperatureInput");
    const checkButton = document.getElementById("checkButton");
    const resultElement = document.getElementById("result");

    checkButton.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);
        weather.temperature = temperature;
        const isBelowZero = weather.isBelowZero();
        if (isBelowZero) {
            resultElement.textContent = "Температура нижче нуля";
        } else {
            resultElement.textContent = "Температура вище нуля або нуль";
        }
    });
    // 3
    const inputEmail = prompt("Enter your email:");
    const inputPassword = prompt("Enter your password:");
    
    const user = {
        username: "Bros",
        email: "blabla@gmail.com",
        password: "2232",
        login: function(email, password) {
            if (email === this.email && password === this.password) {
                console.log("You have successfully logged in.");
            } else {
                console.log("Incorrect email or password.");
            }
        }
    };
    user.login(inputEmail, inputPassword);
// 4
    const movie = {
        title: "Movie Title",
        director: "Director Name",
        year: 2020,
        rating: 4,

        isHighlyRated: function() {
            return this.rating > 8;
        }
    };
    document.getElementById("titleSpan").textContent = movie.title;
    document.getElementById("directorSpan").textContent = movie.director;
    document.getElementById("yearSpan").textContent = movie.year;
    document.getElementById("ratingSpan").textContent = movie.rating;
    if (movie.isHighlyRated()) {
        document.getElementById("titleSpan").style.color = "green";
    } else {
        document.getElementById("titleSpan").style.color = "red";
    };
    
