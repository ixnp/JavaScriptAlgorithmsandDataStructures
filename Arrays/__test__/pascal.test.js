"use strict";

const pascal = require("../pascal.js");
// Sets spies on console object to make it possible to convert them into test failures. 
const spyLog = jest.spyOn(console, 'log');

const expected = pascal(5);

const results = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];



describe("Will print the pascal triangle", () => {
  it("function will print a console logs", () => {
    expect(spyLog).toHaveBeenCalled();
  });

  it("will return a 2d array matching results", () => {
    expect(results).toEqual(expect.arrayContaining(expected));
  });

  it("the start and end of each sub array will === 1", () => {
    let expected = true;
    //runs through array, if the start or end 
    //does not === 1 expected will turn to false 
    for (let i = 0; i < expected.length; i++){
      if (arr[i][0] !== 1 || arr[i][arr.length - 1] !== 1){
        expected = false;
        break;
      }
    }
    expect(expected).toBeTruthy();
  });
});