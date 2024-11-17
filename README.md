# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Runtime Analysis, Maxie M. 
**Worst-Case Time Complexity:** $\Theta(E \times \alpha(V))$

  **Understanding That** 
  - $E$ is number of edges in the graph
  - $V$ is number of vertices in the graph
  - $\alpha$ is the Ackermann function
  -  This grows at an extremely slow and considerably constant rate
      
**Resoning Behind This** 
- **Initialization:** 
 - Initializing the **parent** and **rank** array will take $\Theta(V)$
- **Union-Find Operation:**
  - **find** funcition will use path compression
  - **union** function will use rank optimization
    - Per call these operations are amortized $\Theta(\alpha(V))$
  - each edge result in **a single* **union** operation
    - E edges result in $\Theta(E \times \alpha(V))$


## Plagiarism Statement:
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Resources:
- https://www.geeksforgeeks.org/detect-cycle-in-a-graph/
