"use strict";
//testing template
const areSimilar = require("../areSimilar.js");

describe("Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in the arrays", () => {
  it("Will return true for the same array with integers", () => {
    let arrOne = [1, 2, 3];
    let arrTwo = [1, 2, 3];
    let results = areSimilar(arrOne, arrTwo);
    expect(results).toBeTruthy();
  });
  it("Will return true for the same array with string elements", () => {
    let arrOne = ['a', 'b', 'c'];
    let arrTwo = ['a', 'b', 'c'];
    let results = areSimilar(arrOne, arrTwo);
    expect(results).toBeTruthy();
  });
  it("Will return true when array swaps one pair of integers elements ", () => {
    let arrOne = ['a', 'b', 'c'];
    let arrTwo = ['a', 'c', 'b'];
    let results = areSimilar(arrOne, arrTwo);
    expect(results).toBeTruthy();
  });
  it("Will return true when array swaps one pair of string elements ", () => {
    let arrOne = [1, 2, 3];
    let arrTwo = [2, 1, 3];
    let results = areSimilar(arrOne, arrTwo);
    expect(results).toBeTruthy();
  });
  it("Will return false when array swap elements more then one pair of elements", () => {
    let arrOne = [1, 2, 3, 4];
    let arrTwo = [3, 4, 1, 3];
    let results = areSimilar(arrOne, arrTwo);
    expect(results).toBeFalsy();
  });
  it("Will return false when array swap elements more then one pair of elements", () => {
    let arrOne = [1, 2, 2];
    let arrTwo = [2, 1, 1];
    let results = areSimilar(arrOne, arrTwo);
    expect(results).toBeFalsy();
  });
});
describe("type test and base cases", () => {
  it("will return true when passed two empty arrays",() => {
    let emptyArr = [];
    let results = areSimilar(emptyArr, emptyArr);
    expect(results).toBeTruthy();
  });
  it("will return false when passed one empty array", () => {
    let emptyArr = [];
    let arrOne = [1, 2, 2];
    let results = areSimilar(emptyArr, arrOne);
    expect(results).toBeFalsy();
  });
  it("will return false when passed one element", () => {
    let arr = [1,2,3];
    let results = areSimilar(arr);
    expect(results).toBeFalsy();
  });
  it("will return false when passed a non-array", () => {
    let arr = [1, 2, 3];
    let str = ''
    let results = areSimilar(arr,str);
    expect(results).toBeFalsy();
  });
});

