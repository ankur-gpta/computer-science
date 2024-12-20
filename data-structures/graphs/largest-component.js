const largestComponent = (graph) => {
  let largest = 0;
  const visited = new Set();
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > largest) largest = size;
  }

  return largest;
};

const exploreSize = (graph, current, visited) => {
  if (visited.has(String(current))) return 0;

  visited.add(String(current));
  let size = 1;

  for (let neighbour of graph[current]) {
    size += exploreSize(graph, neighbour, visited);
  }
  return size;
};

const largest = largestComponent({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
});

console.log(largest);
