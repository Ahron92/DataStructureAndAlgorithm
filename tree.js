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
    this.depth = null;
  }
}

class NodeManager{
  constructor(root){
    this.root = root;
  }

  insert(value){
    let currentNode = this.root;
    let tempDepth = 1;
    while(true){
      if(value < currentNode.value){
        if(currentNode.left !== null){
          currentNode = currentNode.left;
          tempDepth++
        }else{
          currentNode.left = new Node(value);
          currentNode.left.depth = tempDepth;
          break;
        }
      }else{
        if(currentNode.right !== null){
          currentNode = currentNode.right;
          tempDepth++
        }else{
          currentNode.right = new Node(value);
          currentNode.right.depth = tempDepth;
          break
        }
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
    return false 
  }
}

const rootNode = new Node(3);
const BST = new NodeManager(rootNode);
BST.insert(2);
BST.insert(4);
BST.insert(5);
BST.insert(6);


console.log(BST.root);
console.log(BST.search(6))