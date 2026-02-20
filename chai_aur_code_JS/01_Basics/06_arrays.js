const myArr = new Array(2, 5, 6,7,8)

// console.log(myArr.length);
// console.log(myArr);

// Array methods

// myArr.push(9)
// console.log(myArr);
// myArr.pop()


// myArr.unshift(8)
// console.log(myArr);
// myArr.shift()
// console.log(myArr.includes(5 ));
// console.log(myArr.indexOf(5 ));

// const newArr =  myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log("A--> ",myArr);
// console.log(myArr.slice(1,3));
// console.log("B--> " , myArr);
// console.log(myArr.splice(1,3));
// console.log("C--> " ,myArr);

// console.log(myArr);

const marvelHeroes = ["Thor", "Spiderman", "Ironman"]
// console.log(marvelHeroes);

const dcHeroes = ["Batman", "Superman", "WonderWoman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

const all_new_heroes = [...marvelHeroes, ...dcHeroes]
// console.log(all_new_heroes);

console.log(Array.from({marvelHeroes}));
