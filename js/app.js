/******************************************************************* 
paying the taxes
*********************************************************************/


document.querySelector(".impot").addEventListener("click", () => {
  let gender = document.querySelector(".impot-gender").value;
  let age = document.querySelector(".impot-age").value;

  if (gender == "1") {
    if (age > 20) {
      showTheResult(true,"you have to pay your tax");
    } else {
      showTheResult(false,"you don't need to pay your tax");
    }
  } else if(gender == "2"){
    if (age > 18 && age < 35) {
      showTheResult(true,"you have to pay your tax");
    } else {
      showTheResult(false,"you don't need to pay your tax");
    }
  }else{
    showTheResult(false,"You didn't choose your gender!");
  }
});

function showTheResult(result = false , message = "") {
  const div = document.createElement("div");
  div.classList.add("alert", "text-center", "alert-success");
  let text;
  if (result) {
    text = message;
  } else {
    text = message;
  }
  div.innerHTML = text;
  text = "";
  document.querySelector("#result-impot").appendChild(div);
  setInterval(() => {
    div.remove();
  }, 4000);
}
/********************************************************************************* 
price of the copies
************************************************************************************/

document.querySelector(".photocopies").addEventListener("click", () => {
    const copyNumber = document.querySelector(".copy-number").value;
    let price;
    if (copyNumber <= 10) {
      price = copyNumber * 0.1;
    } else if (copyNumber <= 30) {
      price = 1 + ((copyNumber - 10) * 0.9);
    } else {
      price = 1 + 1.8 + ((copyNumber - 30) * 0.8);
    }
  
    const div = document.createElement("div");
    div.classList.add("alert", "text-center", "alert-success");
    div.innerHTML = "You have to pay " + price + " euros";
    document.querySelector("#result-photocopies").appendChild(div);
    setInterval(() => {
      div.remove();
    }, 3000);
  });
  /************************************************************************************* 
the Hours
**************************************************************************************/
document.querySelector(".hour").addEventListener("click", () => {
    let hour = parseInt(document.querySelector(".hour-hour").value);
    let minute = parseInt(document.querySelector(".hour-minute").value);
    let second = parseInt(document.querySelector(".hour-second").value);
  
    let newHour = hour;
    let newMinute = minute;
    let newSecond = second + 1;
  
    if (newSecond > 59) {
      newMinute = minute + 1;
      newSecond = 0;
    }
    if (newMinute > 59) {
      newHour = hour + 1;
      newMinute = 0;
    }
    if (newHour > 23) {
      newHour = 0;
    }
  
    const divold = document.createElement("div");
    divold.classList.add("alert", "text-center", "alert-primary", "mt-5");
    divold.innerHTML =
      "Your time was :" + hour + "h" + minute + "min" + second + "sec";
  
    const divnew = document.createElement("div");
    divnew.classList.add("alert", "text-center", "alert-success");
    divnew.innerHTML =
      "New time is :" + newHour + "h" + newMinute + "min" + newSecond + "sec";
  
    const resultTag = document.querySelector("#result-hour");
  
    resultTag.appendChild(divold);
    resultTag.appendChild(divnew);
  
    setInterval(() => {
      divold.remove();
      divnew.remove();
    }, 4000);
  });
  /************************************************************************************* 
la monnais a rendre
**************************************************************************************/
document.querySelector(".money-calculation").addEventListener("click", () => {
  let reciept = parseInt(document.querySelector(".money-calculation-reciept").value);
  let paidMoney = parseInt(document.querySelector(".money-calculation-paid").value);

  const div = document.createElement("div");
  div.classList.add("alert", "text-center", "alert-success");

  if (paidMoney < reciept) {
    div.innerHTML = "You didn't pay enough money";
    console.log(div);
  } else if (paidMoney == reciept) {
    div.innerHTML = "You will not recieve back any money";
  } else {
    if (paidMoney - reciept >= 10) {
      let fiveEuros = 0;
      let tenEuros = Math.floor((paidMoney - reciept) / 10);
      let amount = (paidMoney - reciept) % 10;
      if (amount >= 5) {
        fiveEuros = Math.floor(amount / 5);
        amount = amount % 5;
      }
      div.innerHTML =
        "you will receive : " +
        tenEuros +
        " of ten euros " +
        fiveEuros +
        " of five euros and " +
        amount +
        " euros";
    } else if (paidMoney - reciept < 10 && paidMoney - reciept > 5) {
      let fiveEuros = Math.floor((paidMoney - reciept) / 5);
      let amount = (paidMoney - reciept) % 5;
      div.innerHTML =
        "you will receive : " +
        fiveEuros +
        " of five euros and " +
        amount +
        "euros";
    } else {
      let amount = paidMoney - reciept;
      div.innerHTML = "You will recieve: " + amount + "Euro";
    }
  }

  document.querySelector("#result-money-calculation").appendChild(div);
  setInterval(() => {
    div.remove();
  }, 4000);
});
/************************************************************************************* 
Valider le email
**************************************************************************************/
document.querySelector(".email-validation").addEventListener("click", () => {
    let email = document.querySelector(".email-validation-input").value;
    const div = document.createElement("div");
  
    if (email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
      div.classList.add("alert", "text-center", "alert-success");
      div.innerHTML = "Your email is valid.";
    } else {
      document.querySelector(".email-validation-input").style.borderColor = "red";
      div.classList.add("alert", "text-center", "alert-danger");
      div.innerHTML = "Your email is not valid.";
    }
  
    document.querySelector("#result-email-validation").appendChild(div);
  });
  /************************************************************************************* 
calculation the insurance of car
**************************************************************************************/
const MORE_THAN_25 = 1;
const LESS_THAN_25 = 2;
const MORE_THAN_2_LICENSE = 3;
const LESS_THAN_2_LICENSE = 4;
const ZERO_ACCIDENT = 5;
const ONE_ACCIDENT = 6;
const TWO_ACCIDENT = 7;
const THREE_ACCIDENT = 8;
document.querySelector(".car-insurance").addEventListener("click", () => {
  const age = document.querySelector(".select-age-assurance").value;
  const license = document.querySelector(".select-license-assurance").value;
  const accident = document.querySelector(".select-accident-assurance").value;

  const div = document.createElement("div");

  if (accident == THREE_ACCIDENT) {
    div.classList.add("alert", "text-center", "alert-dark");
    div.innerHTML = "Unfortunately we cannot offer you any services.";
  } else if (redTariff(age, license, accident)) {
    div.classList.add("alert", "text-center", "alert-danger");
    div.innerHTML = "You can use the red plan.";
  } else if (orangeTariff(age, license, accident)) {
    div.classList.add("alert", "text-center", "alert-warning");
    div.innerHTML = "You can use the orange plan.";
  } else if(greenTariff(age, license, accident)){
    div.classList.add("alert", "text-center", "alert-success");
    div.innerHTML = "You can use the green plan.";
  }else{
    div.classList.add("alert", "text-center", "alert-dark");
    div.innerHTML = "Unfortunately we cannot offer you any services.";
  }

  document.querySelector("#result-car-insurance").appendChild(div);
  setInterval(() => {
    div.remove();
  }, 4000);
});

function redTariff(age, license, accident) {
  if (
    age == LESS_THAN_25 &&
    license == LESS_THAN_2_LICENSE &&
    accident == ZERO_ACCIDENT
  ) {
    return true;
  } else if (
    age == LESS_THAN_25 &&
    license == MORE_THAN_2_LICENSE &&
    accident == ONE_ACCIDENT
  ) {
    return true;
  } else if (
    age == MORE_THAN_25 &&
    license == LESS_THAN_2_LICENSE &&
    accident == ONE_ACCIDENT
  ) {
    return true;
  } else if (
    age == MORE_THAN_25 &&
    license == MORE_THAN_2_LICENSE &&
    accident == TWO_ACCIDENT
  ) {
    return true;
  } else {
    return false;
  }
}

function orangeTariff(age, license, accident) {
  if (
    age == LESS_THAN_25 &&
    license == MORE_THAN_2_LICENSE &&
    accident == ZERO_ACCIDENT
  ) {
    return true;
  } else if (
    age == MORE_THAN_25 &&
    license == LESS_THAN_2_LICENSE &&
    accident == ZERO_ACCIDENT
  ) {
    return true;
  } else if (
    age == MORE_THAN_25 &&
    license == MORE_THAN_2_LICENSE &&
    accident == ONE_ACCIDENT
  ) {
    return true;
  } else {
    return false;
  }
}

function greenTariff(age, license, accident) {
  if (
    age == MORE_THAN_25 &&
    license == MORE_THAN_2_LICENSE &&
    accident == ZERO_ACCIDENT
  ) {
    return true;
  }
  return false;
}

/************************************************************************************* 
validation de mot de passe
**************************************************************************************/
function changeMotDePass() {
    const text = document.querySelector(".secure-password-input").value;
  
    let counter = 0;
  
    //    console.log(text.length < 8)
  
    if (ifAlphabet(text) && ifNumber(text)) {
      counter += 1;
    }
    if (ifUpperCase(text)) {
      counter += 1;
    }
    if (ifAlphabet(text)) {
      counter += 1;
    }
    if (ifSpecialCharacter(text)) {
      counter += 1;
    }
  
    const passwordSpan = document.querySelector('.explain-text-password')
    const icon = document.querySelector('#secure-password i')
    console.log(icon)
    switch (counter) {
      case 1:
          document.querySelector(".secure-password-input").style.borderColor = "#B71C1C";
          passwordSpan.innerHTML = "Your password is very weak!"
          passwordSpan.style.color = '#B71C1C'
          passwordSpan.style.borderWidth = 'thick'
          icon.style.color = "#B71C1C"
        break;
      case 2:
          document.querySelector(".secure-password-input").style.borderColor = "#F57F17";
          passwordSpan.innerHTML = "Your password is not strong enough!"
          passwordSpan.style.color = '#F57F17'
          passwordSpan.style.borderWidth = 'thick'
          icon.style.color = "#F57F17"
        break;
      case 3:
          document.querySelector(".secure-password-input").style.borderColor = "#8BC34A";
          passwordSpan.innerHTML = "Your password is good!"
          passwordSpan.style.color = '#8BC34A'
          passwordSpan.style.borderWidth = 'thick'
          icon.style.color = "#8BC34A"
        break;
        case 4:
          document.querySelector(".secure-password-input").style.borderColor = "#76FF03";
          passwordSpan.innerHTML = "Your password is secure"
          passwordSpan.style.color = '#76FF03'
          passwordSpan.style.borderWidth = 'thick'
          icon.style.color = "#76FF03"
        break;
    }
  }
  
  function ifAlphabet(text) {
    return text.match(/[a-z]+/i) ? true : false;
  }
  
  function ifNumber(text) {
    return text.match(/[0-9]+/i) ? true : false;
  }
  
  function ifUpperCase(text) {
    return text.match(/[A-Z]+/) ? true : false;
  }
  
  function ifSpecialCharacter(text) {
    return text.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) ? true : false;
  }
  
  function ifLenghtIsLessThan8(text) {
    return text.length < 8 ? true : false;
  }
  /************************************************************************************* 
guess the right price game
**************************************************************************************/
const theOptions = [
    {price:100,src:"img/keyboard.jfif"},
    {price:200,src:"img/case.jpg"},
    {price:300,src:"img/laptop.jfif"},
    {price:400,src:"img/monitor.webp"},
    {price:500,src:"img/mouse.png"}
]

function guessTheRightPriceGame() {
    const number = Math.floor(Math.random() * theOptions.length);
    document.querySelector('#right-price img').src = theOptions[number].src;

    const priceEntered = document.querySelector('.right-price-input').value
    
}

guessTheRightPriceGame();


