const textarea = document.querySelector("#choice-text");
const choicesSection = document.querySelector("#choices");

textarea.focus();

// create and append span to choices section
const createSpan = (value) => {
  const span = document.createElement("span");
  span.innerText = value.trim();
  return span;
};

// listens for user input and create spans for values separated by a ","
textarea.addEventListener("keyup", (e) => {
  const input = e.target.value;
  const inputs = input.split(",");
  // filter for valid choices and create a span element
  const spans = inputs
    .filter((choice) => !!choice && choice.trim() !== "")
    .map((choice) => createSpan(choice));
  // update choice section with new spans
  choicesSection.replaceChildren(...spans);
});
