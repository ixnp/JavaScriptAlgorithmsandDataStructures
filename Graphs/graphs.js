class Graph {
    constructor(){
      this.list = {}
    }
    addVertex(node){
      if(!this.list[node]){
        this.list[node] = []
        }
        return this.list;
      }
      addEdge(node1,node2){
        this.list[node1].push(node2)
        this.list[node2].push(node1)
      }
       depthFirst(startingNode){
          const result = [];
          const visited = {};
          const list = this.list;
        _depthFirst(startingNode);
          function _depthFirst(node){
              if(!node) return null;
              visited[node] = true;
              result.push(node);
              list[node].forEach(neighbor => {
                  if(!visited[neighbor]){
                      return  _depthFirst(neighbor)
                  }
              });
           
          };
          return result;
      }
      
  }
  
  let G = new Graph();
  
  
  G.addVertex('bob');
  G.addVertex('rob');
  G.addVertex('mark');
  G.addVertex('maria');
  G.addVertex('alice');
  G.addEdge('bob','alice');
  G.addEdge('bob','rob');
  G.addEdge('alice','mark');
  G.addEdge('maria','alice');
  G.addEdge('maria','rob');
  G.addEdge('mark','rob');
  console.log(G.list)
  
  G.depthFirst('bob')