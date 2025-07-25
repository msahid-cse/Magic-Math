function predictDigit() {
  const input = document.getElementById("inputNumber").value;
  const resultDiv = document.getElementById("result");
  const num = parseInt(input);

  if (isNaN(num) || num <= 0) {
    resultDiv.textContent = "Please enter a valid number.";
    resultDiv.classList.remove("hidden");
    return;
  }

  let sum = 0;
  let temp = num;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }

  const removedDigit = (9 - (sum % 9)) % 9;

  if (removedDigit === 0) {
    resultDiv.textContent = "✨ The removed digit is either 0 or 9.";
  } else {
    resultDiv.textContent = `✨ The removed digit is: ${removedDigit}`;
  }

  resultDiv.classList.remove("hidden");
}

// Theme toggle with sun/moon icons
const themeSwitchBtn = document.getElementById("themeSwitch");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

themeSwitchBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);

  if (newTheme === "dark") {
    sunIcon.classList.remove("active");
    moonIcon.classList.add("active");
  } else {
    sunIcon.classList.add("active");
    moonIcon.classList.remove("active");
  }
});

// Anti-inspect
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    return false;
  }
};
