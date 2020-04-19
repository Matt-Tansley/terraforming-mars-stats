document.getElementById("nameList");

getNames();

function getNames() {
  console.log("Function called");
  fetch("http://localhost:5000/names")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// function calculate() {
//   fetch("https://api.exchangerate-api.com/v4/latest/usd")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
