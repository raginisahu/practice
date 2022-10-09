/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
class CNode {
    constructor(v, n) {
        this.val = v;
        this.neighbors =  n ;
    }
    
    getvalue() {
        console.log(this.neighbors)
        return {'val':this.val,'n': this.neighbors}
    }
    
    makeFlat = () => {
        this.isChecked.push(this.val)
        this.flatNeighbours(this.neighbors)
        this.formatData(this.arrObj)
    }
    
    arrObj = []
    isChecked = []
    flatNeighbours = (n) => {
        this.arrObj.push(n)
        for(let i = 0; i < n.length; i++) {
            if(!this.isChecked.includes(n[i].val)) {
                this.isChecked.push(n[i].val)
                if(n[i] && n[i].neighbors && n[i].neighbors.length) {
                    this.flatNeighbours(n[i].neighbors)
                }   
            }
        }
    }
    
    result = []
    formatData = (arr) => {
        for(let i = 0; i < arr.length; i++) {
            let _n = [arr[i][0].val, arr[i][1].val]
            this.result.push(_n)
        }
    }
    // addEdge(p, list) {
    //     this.list.splice(p, 0, list)
    // }
}

let visited = {}
let cobj ={}
var cloneGraph = function(node) {
    // console.log("node value",node)
   //  let _node = new CNode(node.val, node.neighbors)
   //  _node.makeFlat()
   //  const a = _node.result;
   //  console.log(a)
   //  const data =[]
   // //const copyNode =  a.map((na) => na.map((ele)=> data.push(ele.val) ))
   //  console.log("copynode",a)
   //  return a
      if(node && node.val){
            if(!visited[node.val]){
                 cobj.push(new Node(node.val, node.neighbors))
                 console.log(cobj,"value")
                visited[node.val] = true
                for(let i=0; i< node.neighbors.length; i++) {
                    return cloneGraph(node.neighbors[i])
                } 
            } else return 
        } else return
};


