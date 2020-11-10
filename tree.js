// Tree 구조
// 트리 : Node 와 Branch 를 이용해서, 사이클을 이루지 않도록 구성한 데이터 구조
// 탐색(검색)알고리즘 구현을 위해 많이 사용됨

// 용어
// Node: 데이터를 저장하는 기본 요소(브랜치와 다른노드에 대한 연결 정보 포함)
// Root Node : 맨 위에 있는 노드
// level : 최상단 노드를 level 0으로 깊이를 나타냄
// parent Node, child Node : 상위 노드 하위 노드
// Leaf Node : child node가 없는 노드
// siblings : 동일한 parent Node를 가진 노드
// Depth : 트리에서 Noder가 가질 수 있는 최대 Level

// 2진 트리 : 노드의 최대 Branch 가 2개인 트리
// !!! 이진 탐색 트리(BST : Binary Search Tree) : 왼쪽 노드는 해당 노드보다 작은 값, 오른 쪽 노드는 큰 값
// 주요 용도: 데이터 검색
// 장점 : 탐색 속도가 빠름  단점: 복잡하다...


// Binary Search Tree
class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.depth = 1;
  }
}

class NodeManager{
  constructor(root){
    this.root = root;
    this.allData = [this.root.value];
    this.allDataCount = 1;
  }

  insert(value){
    this.allData[this.allDataCount++] = value
    let currentNode = this.root;
    let tempDepth = 2;
    while(true){
      if(value < currentNode.value){
        if(currentNode.left !== null){
          currentNode = currentNode.left;
          ++tempDepth
        }else{
          currentNode.left = new Node(value);
          currentNode.left.depth = tempDepth;
          break;
        }
      }else{
        if(currentNode.right !== null){
          currentNode = currentNode.right;
          ++tempDepth
        }else{
          currentNode.right = new Node(value);
          currentNode.right.depth = tempDepth;
          break
        }
      }
    }
  }

  // 와씨 만드는건 쉬운데 어떻게 없에지...
  //scenario
  // 1. Leaf node 일때... (자식이 없다.)
// 2. Child node 1개일때... (자식이 하나)
// 3. child node 2개일때... (자식이 둘)

  delete(value){
    let searched = false;
    let currentNode = this.root;
    let parentNode = this.root;
    while(currentNode){
      if(currentNode.value == value){
        searched = true;
        break;
      }else if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }else{
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    if(searched == false){
      return false;
    }
    //case1 node가 leaf node 일때
    if(currentNode.left == null && currentNode.right == null){
      if(value < parentNode){
        parentNode.left = null;
      }else{
        parentNode.right = null;
      }
      return searched;
    }
    //case2 child node가 한개 일때
    //1. 왼쪽에 가지고 있을 때
    //2. 오른쪽에 가지고 있을 때
    if(currentNode.left != null && currentNode.right == null){
      if(value < parentNode.value){
        parentNode.left = currentNode.left;
      }else{
        parentNode.right = currentNode.left;
      }
    }else if(currentNode.left == null && currentNode.right != null){
      if(value < parentNode.value){
        parentNode.left = currentNode.right;
      }else{
        parentNode.right = currentNode.right;
      }
      return searched;
    }

    //case3 chid node가 2개
    if(currentNode.left != null && currentNode.right !=null){
      //case3-1 부모 노드의 왼쪽에 있을 때
      if(value < parentNode.value){
        let changeNode = currentNode.right;
        let changeNodeParent = currentNode.right;
        while(changeNode.left != null){
          changeNodeParent = changeNode;
          changeNode = changeNode.left;
        }
        if(changeNode.right != null){
          changeNodeParent.left = changeNode.right;
        }else{
          changeNodeParent.left = null;
        }
        parentNode.left = changeNode;
        changeNode.right = currentNode.right;
        changeNode.left = currentNode.left;
        return searched;
      }//case 3-2 부모 노드의 오른쪽에 있을 때
      else{
        let changeNode = currentNode.right;
        let changeNodeParent =currentNode.right;
        while(changeNode.left != null){
          changeNodeParent = changeNode;
          changeNode = changeNode.left;
        }
        if(changeNode.right != null){
          changeNodeParent.left = changeNode.right;
        }else{
          changeNodeParent.left = null;
        }
        parentNode.right = changeNode;
        changeNode.left = currentNode.left;
        changeNode.right = currentNode.right;
        return searched;
      }
    }

  }

  search(value){
    let currentNode = this.root;
    while(currentNode){
      if(currentNode.value == value){
        return [true, currentNode.depth];
      }else if(value < currentNode.value){
        currentNode = currentNode.left;
      }else{
        currentNode = currentNode.right
      }
    }
    return currentNode;
  }
}

//test code
const randomValue = [];
let count = 0;
while(randomValue.length <= 100){
  randomValue[count] = Math.floor(Math.random()*1000);
  count++;
}
const node = new Node(500);
const BST = new NodeManager(node);

for(let i of randomValue){
  BST.insert(i);
}

console.log(BST.allData)