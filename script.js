// Helper: Get users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Signup handler
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!username || !password) return;

  let users = getUsers();

  if (users.find(user => user.username === username)) {
    showMessage("❌ Username already exists!");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  showMessage("✅ Signup successful! You can now login.");
  e.target.reset();
});

// Login handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "home.html";
  } else {
    showMessage("❌ Invalid login credentials!");
  }
});

function showMessage(msg) {
  document.getElementById("message").innerText = msg;
}
