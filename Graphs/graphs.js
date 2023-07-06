class Graph{
  constructor(){
      this.adjacencyList = {}
  }
  addVertex(vertex){
     this.adjacencyList[vertex] = [];
  }
  //Non directed 
  addEdge(v1,v2){
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1)
  }
  //Directed 
  addOneWayEdge(v1,v2){
      this.adjacencyList[v1].push(v2);
  }
  removeEdge(v1,v2){
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)

  }
  removeOneWayEdge(v1,v2){
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
  }
  removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
          const adjacentVertex = this.adjacencyList[vertex].pop()
          this.removeOneWayEdge(adjacentVertex, vertex)
      
      }
      delete this.adjacencyList[vertex]
  }
  depthFirstSearchRecursive(start){
      const results = [];
      const visited = {};
      //preserves context
      const adjacencyList = this.adjacencyList;
      if(!this.adjacencyList[start]) return; 
      function _helper(vertex){
          if(!adjacencyList[vertex]) return null;
          visited[vertex] = true;
          results.push(vertex)
          adjacencyList[vertex].forEach(neighbor => {
              if(!visited[neighbor]){
                  return _helper(neighbor)
              }
          })
   
      }
      _helper(start);
      return results;
  }
  breadthFirst(start){
      const queue = [start];
      const result = [];
      const visited = [start];
      while(queue.length){
          let currentVertex = queue.shift()
          result.push(currentVertex)
          this.adjacencyList[currentVertex].forEach(neighbor => {
              if(!visited[neighbor]){
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          })
      }
      return result;
  }

}

let g = new Graph();
g.addVertex("Seattle")
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Hong Kong")
g.addVertex("Los Angeles")
g.addEdge("Seattle", "Tokyo")
g.addEdge("Seattle", "Los Angeles")
g.addEdge("Seattle", "Hong Kong")
g.addEdge("Hong Kong", "Tokyo")
g.addEdge("Hong Kong", "Dallas")



class WeightedGraph{
  constructor(){
      this.adjacencyList = {};
  }
  addVertex(vertex){
      this.adjacencyList[vertex] = [];
   }
   addEdge(v1,v2,weight){
      this.adjacencyList[v1].push({vertex:v2, weight});
      this.adjacencyList[v2].push({vertex:v1, weight});
   }
}

let wg = new WeightedGraph()
wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")
wg.addEdge("A","B", 9)
wg.addEdge("A","C", 5)
wg.addEdge("B","C", 7)