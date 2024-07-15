function setState(initialVal) {
    let state = initialVal;

    function setStateFunction(newVal) {
        state = newVal;
    }
    function getStateFunction() {
        return state
    }

    return [getStateFunction, setStateFunction];
}

var [someVar, SetsomeVar] = setState("salam");

console.log(someVar()); 
SetsomeVar("ali")
// console.log(someVar()); 