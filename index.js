// Write your code here!
// no longer has a DOM node 'main#main'
const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion"
document.body.append(newHeader);

// const element = document.createElement('div');

// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul);

// const elem = document.getElementById('main');
// elem.style.height = "300px";
// elem.style.background = "#27647B"

// elem.textContent = "You've changed what is on the screen";
// elem.style.fontSize = "30px";
// elem.style.marginLeft = "30px";
// elem.style.lineHeight = 4;
