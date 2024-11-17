// code.js 
// Maxie Machado 
// Detecting Cycles 

function hasCycle(graph) {
    const n = graph.length;

    const parent = Array(n).fill(null).map((_, idx) => idx);
    const rank = Array(n).fill(0);

    function find(node) {
        if (parent[node] !== node) {
            parent[node] = find(parent[node]);
        }
        return parent[node];
    }

    function union(node1, node2) {
        const root1 = find(node1);
        const root2 = find(node2);

        if (root1 == root2) {
            return true;
        }

        if (rank[root1] > rank[root2]) {
            parent[root2] = root1;
        }
        else if (ranl[root1] < rank[root2]) {
            parent[root1] = root2;
        }
        else {
            parent[root2] = root1;
            rank[root1]++;
        }
        return false;
    }

    for (let v = 0; v < n; v++) {
        for (const neighbor of graph[v]) {
            if (v < neighbor) {
                if (union(v, neighbor)) {
                    return true;
                }
            }
        }
    }
    return false; 
}
