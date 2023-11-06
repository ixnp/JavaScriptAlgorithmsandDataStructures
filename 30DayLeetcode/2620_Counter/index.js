//Problem: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
let createCounter = function(n) {
    let result = n-1
    return function() {
        result = result+1
        return result
    };
};