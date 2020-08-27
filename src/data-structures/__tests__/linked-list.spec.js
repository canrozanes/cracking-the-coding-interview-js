const linkedList = require('../linked-list');

describe('linkedList', () => {
  it('should create a new linked list on calling create()', () => {
    const LinkedList = linkedList.create();
    expect(LinkedList).toHaveProperty('head');
    expect(LinkedList).toHaveProperty('tail');
  });
  it('should create a new linked list with proper values on calling create()', () => {
    const LinkedList = linkedList.create([1, 2, 3]);
    expect(LinkedList).toHaveProperty('head');
    expect(LinkedList).toHaveProperty('tail');

    expect(LinkedList.head.value).toBe(1);
    expect(LinkedList.tail.value).toBe(3);
    expect(LinkedList.head.next.value).toBe(2);
    expect(LinkedList.head.next.next.value).toBe(3);
  });
  it('should append a value to the end of the linked list on calling append() when the list is empty', () => {
    const LinkedList = linkedList.create([]);
    LinkedList.append(4);
    expect(LinkedList.tail.value).toBe(4);
    expect(LinkedList.tail.value).toBe(4);
  });
  it('should append a value to the end of the linked list on calling append() when the list has values', () => {
    const LinkedList = linkedList.create([1, 2, 3]);
    LinkedList.append(4);
    expect(LinkedList.tail.value).toBe(4);
  });

  it('should add a value to the beginning of the linked list on calling unshift() when the list has no values', () => {
    const LinkedList = linkedList.create([]);
    LinkedList.unshift(4);
    expect(LinkedList.head.value).toBe(4);
    expect(LinkedList.tail.value).toBe(4);
  });

  it('should add a value to the beginning of the linked list on calling unshift() when the list has values', () => {
    const LinkedList = linkedList.create([1, 2, 3]);
    LinkedList.unshift('Julius');
    expect(LinkedList.head.value).toBe('Julius');
    expect(LinkedList.head.next.value).toBe(1);
  });

  it('should get the proper value at index by calling _getNodeByIndex', () => {
    const emptyLinkedList = linkedList.create([]);
    expect(emptyLinkedList._getNodeByIndex(1)).toBeUndefined();
    expect(emptyLinkedList._getNodeByIndex(0)).toBeUndefined();

    const shortLinkedList = linkedList.create(['istanbul', 'izmir', 'Batman']);
    expect(shortLinkedList._getNodeByIndex(2).value).toBe('Batman');
    expect(shortLinkedList._getNodeByIndex(3)).toBeUndefined();

    const longLinkedList = linkedList.create(['red', 'orange', 'yellow', 'green', 'blue', 'violet']);
    expect(longLinkedList._getNodeByIndex(0).value).toBe('red');
    expect(longLinkedList._getNodeByIndex(1).value).toBe('orange');
    expect(longLinkedList._getNodeByIndex(2).value).toBe('yellow');
    expect(longLinkedList._getNodeByIndex(3).value).toBe('green');
    expect(longLinkedList._getNodeByIndex(4).value).toBe('blue');
    expect(longLinkedList._getNodeByIndex(5).value).toBe('violet');
  });
  it('should create an Array on toArray()', () => {
    const emptyLinkedList = linkedList.create([]);
    expect(emptyLinkedList.toArray()).toMatchObject([]);

    const shortLinkedList = linkedList.create(['istanbul', 'izmir', 'Batman']);
    expect(shortLinkedList.toArray()).toMatchObject(['istanbul', 'izmir', 'Batman']);

    const longLinkedList = linkedList.create(['red', 'orange', 'yellow', 'green', 'blue', 'violet']);
    expect(longLinkedList.toArray()).toMatchObject(['red', 'orange', 'yellow', 'green', 'blue', 'violet']);
  });
  it('should return null on calling unshift() when the list has no values', () => {
    const LinkedList = linkedList.create();
    const poppedValue = LinkedList.shift();
    expect(poppedValue).toBe(null);
  });
  it('should return the first element on calling unshift() when the list has values', () => {
    const LinkedList = linkedList.create(['a', 'b', 'c', 'd']);
    const poppedValue0 = LinkedList.shift();
    const poppedValue1 = LinkedList.shift();
    const poppedValue2 = LinkedList.shift();
    const poppedValue3 = LinkedList.shift();
    expect(poppedValue0).toBe('a');
    expect(poppedValue1).toBe('b');
    expect(poppedValue2).toBe('c');
    expect(poppedValue3).toBe('d');
  });
});
