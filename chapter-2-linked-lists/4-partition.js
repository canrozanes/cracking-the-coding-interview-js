const LinkedList = require('./linked-list');

const partition = (node, value) => {
  const beforeList = LinkedList.create();
  const afterList = LinkedList.create();

  let current = node;
  
  while(current){
    if(current.value < value){
      beforeList.unshift(current.value)
    } else {
      afterList.unshift(current.value)
    }
    current = current.next;
  }
  //combine the two lists
  beforeList.tail.next = afterList.head;
  beforeList.tail = afterList.tail;
  return beforeList;
}

// const LL = LinkedList.create([8, 5, 1, 3]);
// console.log(partition(LL.head, 2).toArray())

module.exports = { partition }