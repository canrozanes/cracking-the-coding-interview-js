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
  const newList = beforeList;
  newList.tail.next = afterList.head;
  newList.tail = afterList.tail;
  console.log('before', beforeList)
  console.log('after', afterList)
  console.log('final', newList.toArray())
}

const input = LinkedList.create([3, 5, 8, 5, 10, 2, 1]).head;
partition(input, 5);

module.exports = { partition }