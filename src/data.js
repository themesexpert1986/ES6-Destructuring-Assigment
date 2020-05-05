const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" }
];

//refactor your code
function useAnimals(animal) {
  return [animal.name, () => console.log(animal.sound)];
}

export default animals;
export { useAnimals };
