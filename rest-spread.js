// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => {
    return nums.filter( (num) => num % 2 === 0);
}


//findMin

const findMin = (...nums) => {
    return nums.reduce((min, curNum) => {
        return min < curNum ? min : curNum;
    })
}

//mergeObjects

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

// doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...nums) => {
    const doubled = [...nums].map( (num) => num * 2 );
    return [...arr, ...doubled];
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const result = [...items];
    const removeIdx = Math.trunc(Math.random() * result.length);
    result.splice(removeIdx, 1);
    return result;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const result = {...obj};
    result[key] = val;
    return result;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
 const result = {...obj};
 delete result[key];
 return result;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
 return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const result = {...obj};
    if (key in obj) result[key] = val;
    return result;
}