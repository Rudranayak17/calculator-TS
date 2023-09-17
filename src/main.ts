const output = document.querySelector("p") as HTMLInputElement;
const inuptBtn = document.querySelectorAll("button");

let equation = "";
let prevButtonWasOperator = false;

const updateResult = () :void=> {
  output.textContent = equation || "0";
};

inuptBtn.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (!isNaN(Number(buttonText)) || buttonText === ".") {
      equation += buttonText;
      prevButtonWasOperator = false;
      updateResult();
    } else if (buttonText === "C") {
      equation = "";
      prevButtonWasOperator = false;
      updateResult();
    } else if (buttonText === "=") {
      try {
        equation = String(eval(equation));
        prevButtonWasOperator = false;
        updateResult();
      } catch (error) {
        equation = "Error";
        
        prevButtonWasOperator = false;
        updateResult();
      }
    } else if (!prevButtonWasOperator) {
      equation += " " + buttonText + " ";
      prevButtonWasOperator = true;
      updateResult();
    }
   
  });
});

updateResult();
