const form = document.querySelector(".contact-form");
const shortcuts = document.querySelectorAll(".shortcut");
const sections = document.querySelectorAll("section");

shortcuts.forEach((shortcut, i) => {
  console.log(i);
  shortcut.addEventListener("click", () => {
    sections[i].scrollIntoView({ behavior: "smooth" });
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const message = document.getElementById("message-input").value;

  Email.send({
    SecureToken: "58338926-5d23-414d-85a2-6565b8acfdfc",
    To: "edbudcontact@gmail.com",
    From: "edbudcontact@gmail.com",
    Subject: `Contact ${name}`,
    Body: `
    Name: ${name}<br />
    Email: ${email}<br />
    Message: ${message}<br />
    `,
  }).then((message) => alert(message));
});
