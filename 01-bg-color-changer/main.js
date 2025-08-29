const body = document.getElementsByTagName("body")[0];
const btn = document.getElementById("btn");

const colors = ["red", "green", "blue", "yellow", "purple"];

let index = 0;

btn.addEventListener("click", () => {

  function generateRandomHexColors(numColors) {
    const hexColors = [];
    for (let i = 0; i < numColors; i++) {
      const randomHex = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
      hexColors.push(`#${randomHex}`);
    }
    return hexColors;
  }

  const my1000Colors = generateRandomHexColors(1000);

//   console.log(my1000Colors); // This will output the array of 1000 hex codes

  body.style.backgroundColor = my1000Colors[index++];

  if (index === my1000Colors.length) {
    index = 0;
  }
});



// function generateRandomHexColors(numColors) {
//   const hexColors = [];
//   for (let i = 0; i < numColors; i++) {
//     const randomHex = Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, "0");
//     hexColors.push(`#${randomHex}`);
//   }
//   return hexColors;
// }

// const my500Colors = generateRandomHexColors(500);

// // console.log(my500Colors); // This will output the array of 500 hex codes
