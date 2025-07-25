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

  resultDiv.textContent = removedDigit === 0
    ? "✨ The removed digit is either 0 or 9."
    : `✨ The removed digit is: ${removedDigit}`;

  resultDiv.classList.remove("hidden");
}

// Theme toggle
const toggle = document.getElementById("themeToggle");
const label = document.getElementById("modeLabel");

toggle.addEventListener("change", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  const newTheme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  label.textContent = newTheme === "dark" ? "Dark Mode" : "Light Mode";
});

// Anti-inspect protection
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    return false;
  }
};
