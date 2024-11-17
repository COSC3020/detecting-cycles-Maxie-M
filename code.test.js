// code.test.js 
// Maxie Machado 
// Detecting Cycles 

const fs = require('fs');
const test = require('unit.js');

eval(fs.readFileSync('code.js') + '');

const tests = [
    //grpah with cycle 
    {
        graph: [[1, 2], [0, 2], [0, 1, 3], [2]],
        expected: true,
    },

    //graph without cycle 
    {
        graph: [[1], [0, 2], [1]],
        expected: false,
    },

    //disconnected w/ cycle 
    {
        graph: [[1], [0, 2], [1], [4, 5], [3, 5], [3, 4]],
        expected: true,
    },

    //disconnected w/o cycle 
    {
        graph: [[1], [0], [3], [2]],
        expected: false,
    },
];

tests.forEach(({ graph, expected }, idx) => {
    test.value(hasCycle(graph)).is(expected);
    console.log('Test case ${idx + 1}: Passed');
});
