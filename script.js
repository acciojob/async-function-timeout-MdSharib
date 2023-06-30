//your JS code here. If required.

const btn = document.getElementById("btn");



const delayFunction = (userText, userDelay) => {
  return new Promise((res, rej) => {
  setTimeout(() => {
    res(userText);
    }, +userDelay*1000)
  });
  
};

async function display(userText, userDelay){
  const toDisplay = await delayFunction(userText, userDelay);
  const div = document.getElementById("output");
  div.innerText = toDisplay;
}






const btnHandler = (ev) => {
  ev.preventDefault();
  let userText = document.getElementById("text").value;
  let userDelay = document.getElementById("delay").value;
  display(userText, userDelay);
}





btn.addEventListener('click', btnHandler);

