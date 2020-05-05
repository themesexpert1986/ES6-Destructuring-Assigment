// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
//import animals, { useAnimals } from "./data";

// [cat, dog] = [animals[0], animals[1]];
// var cat, dog;
// new way
// const [cat, dog] = animals;

// const [animal, makeSound] = useAnimals(cat);

// console.log(animal);
// makeSound();

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

// This is Angela did it 
const [tesla,honda] = cars;
//console.log(tesla);
const {speedStats : {topSpeed : teslaTopSpeed } } = tesla;
const {speedStats: {topSpeed : hondaTopSpeed}} = honda;

//console.log(teslaTopSpeed + "-"+ hondaTopSpeed);
/** Style 1: */
// const {coloursByPopularity:{[0]: teslaTopColour}} = tesla;
// const {coloursByPopularity:{[0]: hondaTopColour}} = honda;

/** Style 2 */
const {coloursByPopularity:[teslaTopColour] }= tesla;
const {coloursByPopularity:[hondaTopColour] }= honda;

//console.log(teslaTopColour);

ReactDOM.render(
  <div>
    <table>
    <thead>
    <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour </th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
    </table>
  </div>,
  document.getElementById("root")
);
