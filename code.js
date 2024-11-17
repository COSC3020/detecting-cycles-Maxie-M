// code.js 
// Maxie Machado 
// Detecting Cycles 

function hasCycle(graph) {
    function find(parent, i) {
        if (parent[i] !== i) {
            parent[i] = find(parent, parent[i]);
        }
        return parent[i];
    }

    function union(parent, rank, x, y) {
        let rootX = find(parent, x);
        let rootY = find(parent, y);

        if (rootX !== rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        } else {
            return true;
        }
        return false;
    }

    let parent = {};
    let rank = {};

    for (let node in graph) {
        parent[node] = node;
        rank[node] = 0;
    }

    for (let node in graph) {
        for (let neighbor of graph[node]) {
            if (union(parent, rank, node, neighbor)) {
                return true;
            }
        }
    }

    return false;
}
