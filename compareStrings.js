//After almost three months I have returned to modify this code and realised that a lot of the functions I created were not needed... Lol.

function confirmEnding(str, target) {

    let strArr = [];
    for (let i = str.length-1; i >= (str.length - target.length); i--) {
      strArr.unshift(str[i]);
    }
      str = strArr.join('');
  
    if (str == target)
    {
        return true;
    } else {
        return false;
      }
    }
    
    console.log(confirmEnding("Bastian", "stian"));