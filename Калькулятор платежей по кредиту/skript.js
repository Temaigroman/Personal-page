
function calculatePayment() {
  
  var amount = document.getElementById("amount").value;
  var interest = document.getElementById("interest").value;
  var munth = document.getElementById("munth").value;

  var monthlyInterest = interest/100 / 12;
  var payments = munth;

  console.log(amount);
  console.log(interest);
  console.log(munth);

  
  var x = Math.pow(1 + monthlyInterest, payments);
  var monthlyPayment = (amount * x * monthlyInterest) / (x - 1);

  // Округляем ежемесячный платеж до двух знаков после запятой
  monthlyPayment = monthlyPayment.toFixed(2);

  // Рассчитываем общую сумму платежа
  var totalPayment = (monthlyPayment * payments).toFixed(2);

  // Рассчитаем сумму переплат
  var totalInterest = (totalPayment - amount).toFixed(2);

  // Показываем результаты
  var html = "<h2>Результаты</h2>";
  html +=
    "<p>Ежемесячный платеж: <span class='sum'>" +
    monthlyPayment +
    "</span></p>";
  html +=
    "<p>Общая сумма платежа: <span class='sum'>" + totalPayment + "</span></p>";
  html += "<p>Переплата: <span class='sum'>" + totalInterest + "</span></p>";

  // Обновляем раздел результатов
  document.getElementById("results").innerHTML = html;
}

// Прикрепляем функцию расчета платежа к событию отправки формы
document.getElementById("loan-form").addEventListener("submit", function (e) {
  e.preventDefault();
  calculatePayment();
});