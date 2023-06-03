window.onload = (event) => {
  addSuper();
  addBrood();
};

var broods = 2;
var supers = 0;

function addBrood() {
  var i = 1;
  if (i === broods) {
    {
    }
  } else {
    while (i < broods) {
      const currentBrood = document.querySelector(".brood");
      const newBrood = currentBrood.cloneNode(true);
      const parentBrood = document.querySelector(".brood-boxes");
      parentBrood.appendChild(newBrood);
      i++;
    }
  }
}

function addSuper() {
  var i = 1;
  if (supers === 0) {
    document.querySelector(".honey-super").style.display = "None";
  } else if (i === supers) {
    {
    }
  } else {
    while (i < supers) {
      const currentSuper = document.querySelector(".honey-super");
      const newSuper = currentSuper.cloneNode(true);
      const parentSuper = document.querySelector(".honey-boxes");
      parentSuper.appendChild(newSuper);
      i++;
    }
  }
}
