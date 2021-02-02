/**
 * Atta Saleh
 * CSCI 39547
 * Professor Melissa Lynch
 * Assignment #2
 * 
 * Recreating most used methods in functional languages using JavaScript
 **/


let numArray = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15];

let myObject = {
    a: 'word',
    b: 13,
    c: false
};

//  myEach calls a callback function for each element in the array in ascending order.

Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

//  myMap creates a new array consisting of each element in the initial array passed through a callback function

Array.prototype.myMap = function(cb) {
    let mappedArr = [];
    for (let i = 0; i < this.length; i++) {
        mappedArr.myPush(cb(this[i], i, this));
    }
    return mappedArr;
}


//  myFilter checks if each element in an array against an argument and returns only elements that return true when checked

Array.prototype.myFilter = function(cb, arg) {
    let filteredArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb.call(arg, this[i], i, this))
            filteredArr.myPush(this[i]);
    }
    return filteredArr;
}

//  mySome executes a callback function on each element in array until one of the elements returns true when checked against an argument. 
//  If none result in true, returns false once it has checked each element

Array.prototype.mySome = function(cb, arg) {
    for (let i = 0; i < this.length; i++) {
        if (cb.call(arg, this[i], i, this))
            return true;
    }
    return false;
}

//  myEvery executes a callback function on each element in array with assigned values. Checks each against an argument until one returns false.
//  If none return false, we return true after checking each element (opposite of mySome())

Array.prototype.myEvery = function(cb, arg) {
    for (let i = 0; i < this.length; i++) {
        if (!cb.call(arg, this[i], i, this))
            return false;
    }
    return true;
}

//  myReduce executes a reducer function on each element resulting in a single return value

Array.prototype.myReduce = function(cb, init) {
    let out = arguments.length > 1 ? init : undefined;
    for (let i = 0; i < this.length; i++) {
        if (out === undefined) {
            out = this[i];
        } else {
            out = cb.call(out, out, this[i], i, this);
        }
    }
    return out;
}

//  myIncludes determines whether an array includes a value, returning true and stopping when a match is found
//  returns false after checking each element.

Array.prototype.myIncludes = function(element, index) {
    //  If we are provided with a starting index, use it, if not we start at 0
    let i = arguments.length > 1 ? index : 0;

    //  If the starting index is greater than the length of the array, return false
    if (i > this.length)
        return false;

    //  If the starting index is negative, it is taken as an offset from the end, or if the absolute value of i is
    //  greater than the length of the array, we check the whole array.
    if (i < 0) i = i <= (-1 * this.length) ? 0 : this.length + i;

    for (i; i < this.length; i++) {
        if (this[i] === element)
            return true;
    }
    return false;
}

//  myIndexOf returns the first element at which an element is found, or -1 if the element isn't present.

Array.prototype.myIndexOf = function(element, index) {
    //  If we are provided with a starting index, use it, if not we start at 0
    let i = arguments.length > 1 ? index : 0;

    //  If the starting index is greater than the length of the array, return -1
    if (i > this.length)
        return -1;

    //  If the starting index is negative, it is taken as an offset from the end, or if the absolute value of i is
    //  greater than the length of the array, we check the whole array.
    if (i < 0) i = i <= (-1 * this.length) ? 0 : this.length + i;

    for (i; i < this.length; i++) {
        if (this[i] === element)
            return i;
    }
    return -1;
}

//  myPush adds one or more elements to the end of an array and returns its new length

Array.prototype.myPush = function(element) {
    let index = this.length;
    for (let i = 0; i < arguments.length; i++) {
        this[index] = arguments[i];
        index++;
    }
    return this.length;
}

//  myLastIndexOf returns the last index at which an element can be found, or -1 if the element isn't present.
//  Starts at the last element and goes backwards.
//  index is set to array.length - 1 by default

Array.prototype.myLastIndexOf = function(element, index) {
    //  If we are provided with a starting index, use it, if not we start at 0
    let i = arguments.length > 1 ? index : this.length - 1;

    //  If the provided index is greater than or equal to the length of the array, we search the whole array starting at the last element
    if (i >= this.length)
        i = this.length - 1;

    //  If the given index is negative, it is taken as an offset from the end of the array. 
    if (i < 0)
        i = this.length + i;
    //  If the resulting calculated index is less than 0, return -1.
    if (i < 0)
        return -1;
    //  We then iterate through the array backwards, starting at i.
    for (i; i > -1; i--) {
        if (this[i] === element)
            return i;
    }
    return -1;
}

//  grabKeys returns an array consisting of each key in an object
Object.grabKeys = (obj) => {

    let keyArray = [];

    if (typeof obj !== 'object') {
        console.log("Object.grabKeys called on non-object");
        return [];
    } else {
        for (let key in obj) {
            if (obj.hasOwnProperty(key))
                keyArray.myPush(key);
        }
    }
    return keyArray;
}

//  grabValues returns an array consisting of each value associated with a key in an object
Object.grabValues = (obj) => {
    let valArray = [];
    if (typeof obj !== 'object') {
        console.log("Object.grabKeys called on non-object");
        return [];
    } else {
        for (let key in obj) {
            //  Check if a value exists for given key
            if (obj.hasOwnProperty(key))
                valArray.myPush(obj[key])
        }
    }
    return valArray;
}
