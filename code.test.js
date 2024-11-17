// code.test.js 
// Maxie Machado 
// Detecting Cycles 

const jsverify = require("jsverify");
const { hasCycle } = require("./code");

jsverify.property("Detect cycle in a graph", () => {
    const graphWithCycle = {
        1: [2],
        2: [3],
        3: [1],
    };
    return hasCycle(graphWithCycle) === true;
});

jsverify.property("Detect no cycle in a graph", () => {
    const graphWithoutCycle = {
        1: [2],
        2: [3],
        3: [],
    };
    return hasCycle(graphWithoutCycle) === false;
});
