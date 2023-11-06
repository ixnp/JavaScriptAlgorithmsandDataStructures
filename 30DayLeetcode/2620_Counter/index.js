//Problem: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
let createCounter = function(n) {
    return function() {
        return n++
    };
};