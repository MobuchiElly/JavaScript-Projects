//Kindly peruse the README.md file for full clarification
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const pi = 3.14159265359;
//Custom cube function
let cube = (x) => x * x * x;
//function that calculates the period
let periodT = (avgAlt) => {return Math.round((2 * pi) * Math.sqrt(cube(earthRadius + avgAlt) / GM)); 
}
//Moved the arguments to newArr
  let newArr = [];
  for (let i = 0; i < arguments.length; i++)
  {
    newArr.push(...arguments[0]);
  }
//Accessing the keys in newArr to modify the values
  for (let i = 0; i < newArr.length; i++)
  {
    newArr[i]["orbitalPeriod"] = periodT(newArr[i]["avgAlt"]);
    delete newArr[i]["avgAlt"];
  }

  return newArr;
}