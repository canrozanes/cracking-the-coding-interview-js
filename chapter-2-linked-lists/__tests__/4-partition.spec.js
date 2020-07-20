const LinkedList = require('../linked-list');
const { partition } = require('../4-partition');

describe('deleteMiddleNode', () => {
  const testCases = [
    // {
    //   list: [8, 5, 1],
    //   value: 1
    // },
    // {
    //   list: [8, 5, 1, 3],
    //   index: 2
    // },
    // {
    //   list: [1, 2, 8, 3, 7, 0, 4],
    //   index: 4
    // },
    // {
    //   list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
    //   index: 10
    // },
    {
      list: [3, 5, 8, 5, 10, 2, 1],
      value: 5,
      expectedOutput: [3, 1, 2, 10, 5, 5, 8]
    }
  ];
  testCases.forEach(({ list, value, expectedOutput }) => {
    it(`should properly partition the list [${list.toString()}] with value: ${value}`, ()=>{
      const linkedList = LinkedList.create(list);

      const result = partition(linkedList.head, value);

      expect(result.toArray()).toEqual(expectedOutput)
    })
  })
})