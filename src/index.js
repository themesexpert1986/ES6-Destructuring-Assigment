// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals, { useAnimals } from "./data";

// [cat, dog] = [animals[0], animals[1]];
// var cat, dog;
// new way
const [cat, dog] = animals;

const [animal, makeSound] = useAnimals(cat);

console.log(animal);
makeSound();

// console.log(cat.name);
// console.log(cat.sound);
// ====
// console.log(dog.name);
// console.log(dog.sound);

// import animals from "practice";
// var tesla, honda, teslaTopSpeed, teslaTopColour, hondaTopSpeed, hondaTopColour;

// [tesla, honda] = [cars[0], cars[1]];
// // console.log(tesla.speedStats.topSpeed);

// // console.log(
// //   tesla.coloursByPopularity[0] + " , " + tesla.coloursByPopularity[1]
// // );

// [teslaTopSpeed, teslaTopColour] = [
//   tesla.speedStats.topSpeed,
//   tesla.coloursByPopularity[0] + " , " + tesla.coloursByPopularity[1]
// ];

// [hondaTopSpeed, hondaTopColour] = [
//   honda.speedStats.topSpeed,
//   honda.coloursByPopularity[0] + " , " + tesla.coloursByPopularity[1]
// ];

// ReactDOM.render(
//   <div>
//     <table>
//       <tr>
//         <th>Brand</th>
//         <th>Top Speed</th>
//         <th>Top Colour </th>
//       </tr>
//       <tr>
//         <td>{tesla.model}</td>
//         <td>{teslaTopSpeed}</td>
//         <td>{teslaTopColour}</td>
//       </tr>
//       <tr>
//         <td>{honda.model}</td>
//         <td>{hondaTopSpeed}</td>
//         <td>{hondaTopColour}</td>
//       </tr>
//     </table>
//   </div>,
//   document.getElementById("root")
// );
