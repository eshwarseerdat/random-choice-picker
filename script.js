const textarea = document.querySelector("#choice-text");
const choicesSection = document.querySelector("#choices");

textarea.focus();

// create and append span to choices section
const createSpan = (value) => {
  const span = document.createElement("span");
  span.innerText = value.trim();
  return span;
};

// select random span
const getRandSpan = () => {
  const choiceLength = choicesSection.children.length;
  const randNum = Math.floor(Math.random() * choiceLength);
  return choicesSection.children[randNum];
};

// listens for user input and create spans for values separated by a ","
textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 25);

    // toggle the active class on a random span
    const toggleActive = setInterval(() => {
      const span = getRandSpan();

      span.classList.add("active");
      setTimeout(() => {
        span.classList.remove("active");
      }, 100);
    }, 100);

    // multiply the number of spans by 500 for the time until the interval is cleared
    setTimeout(() => {
      clearInterval(toggleActive);
      // select a random span for the final choice
      setTimeout(() => {
        const span = getRandSpan();
        span.classList.add("active");
      }, 100);
    }, choicesSection.children.length * 500);
  }

  const input = e.target.value;
  const inputs = input.split(",");
  // filter for valid choices and create a span element
  const spans = inputs
    .filter((choice) => choice.trim() !== "")
    .map((choice) => createSpan(choice));
  // update choice section with new spans
  choicesSection.replaceChildren(...spans);
});
