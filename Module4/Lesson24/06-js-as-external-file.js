const output = document.getElementById("out");
const button = document.getElementById("load");

function externalGreeting(name) {
  return `Hello from external script, ${name}`;
}

function initExternalExample() {
  if (!button || !output) return;
  button.addEventListener("click", () => {
    output.textContent = externalGreeting("Student");
  });
}

initExternalExample();
