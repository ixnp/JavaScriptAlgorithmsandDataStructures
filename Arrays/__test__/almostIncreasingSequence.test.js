'use strict';
//testing template 
const almostIncreasingSequence = require("../almostIncreasingSequence.js");

describe("almostIncreasingSequence base cases", () => {
  it("false if not sequential after removing one or less elements", () => {
    let result = almostIncreasingSequence([1, 3, 2, 1]);
    expect(result).toBeFalsy();
  });
  it("true if sequential after removing one or less elements", () => {
    let result = almostIncreasingSequence([1,2,3,4]);
    expect(result).toBeTruthy();
  });
});

describe("almostIncreasingSequence incorrect inputs", () => {
  it("will be false if given an empty array", () => {
    let result = almostIncreasingSequence([]);
    expect(result).toBeFalsy();
  });
  it("will be false if given non array", () => {
    let result = almostIncreasingSequence('str');
    expect(result).toBeFalsy();
  });
});

