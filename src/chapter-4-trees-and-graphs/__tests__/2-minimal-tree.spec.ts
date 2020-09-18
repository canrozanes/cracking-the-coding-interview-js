import constructMinimalTree, { dfs } from '../2-minimal-tree';

describe('constructMinimalTree', () => {
  const testCases = [
    [0, 1, 2, 3, 4, 5],
    ['a', 'b', 'c', 'd'],
    [],
    ['abc'],
    ['lewis', 'valteri', 'max', 'daniel', 'esteban', 'charles', 'sebastian'],
  ];

  it('should properly create a minimal tree from an array of numbers', () => {
    const nums = [0, 1, 2, 3, 4, 5];
    const minimalTree = constructMinimalTree(nums);

    const backToArray = dfs(minimalTree);
    expect(nums).toMatchObject(backToArray);
  });

  it('should properly create a minimal tree from an array of strings', () => {
    const strings = ['a', 'b', 'c', 'd'];
    const minimalTree = constructMinimalTree(strings);

    const backToArray = dfs(minimalTree);
    expect(strings).toMatchObject(backToArray);
  });
  it('should properly create a minimal tree from an empty string', () => {
    const empty = [];
    const minimalTree = constructMinimalTree(empty);

    const backToArray = dfs(minimalTree);
    expect(empty).toMatchObject(backToArray);
  });
  it('should properly create a minimal tree from an array of string with length = 1', () => {
    const stringArray = ['abc'];
    const minimalTree = constructMinimalTree(stringArray);

    const backToArray = dfs(minimalTree);
    expect(stringArray).toMatchObject(backToArray);
  });
  it('should properly create a minimal tree from an array of strings', () => {
    const strings = [
      'lewis',
      'valteri',
      'max',
      'daniel',
      'esteban',
      'charles',
      'sebastian',
    ];
    const minimalTree = constructMinimalTree(strings);

    const backToArray = dfs(minimalTree);
    expect(strings).toMatchObject(backToArray);
  });
});
