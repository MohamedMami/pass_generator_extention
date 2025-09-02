function generatePassword(length = 16) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

const passwordEl = document.getElementById("password");
const regenBtn = document.getElementById("regen");
const copyBtn = document.getElementById("copy");

function setPassword() {
  const pwd = generatePassword();
  passwordEl.textContent = pwd;
  return pwd;   
}

let currentPassword = setPassword();

regenBtn.addEventListener("click", () => {
  currentPassword = setPassword();
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(currentPassword).then(() => {
    copyBtn.style.opacity = "0.5";
    setTimeout(() => (copyBtn.style.opacity = "1"), 800);
  });
});
