let createCounter = function(init) {
    let current = init;
    return {
        increment: () => current = current+1,
        decrement: () => current = current-1,
        reset: () => {
            current = init 
            return current
        }
    }
};