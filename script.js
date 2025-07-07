// Helper function to get users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Signup
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  let users = getUsers();

  if (users.find(user => user.username === username)) {
    document.getElementById("message").innerText = "❌ Username already exists!";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("message").innerText = "✅ Signup successful!";
  document.getElementById("signupForm").reset();
});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "home.html";
  } else {
    document.getElementById("message").innerText = "❌ Invalid login!";
  }
});
