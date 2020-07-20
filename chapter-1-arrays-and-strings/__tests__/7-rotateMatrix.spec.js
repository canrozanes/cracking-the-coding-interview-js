const { rotateMatrix } = require('../7-rotateMatrix');

describe('Rotate Matrix', ()=>{
  it("should properly rotate matrix", () => {
    expect(rotateMatrix([
      [0,0,1],
      [1,0,0], 
      [1,1,1]
    ])).toEqual([
        [1,1,0],
        [1,0,0], 
        [1,0,1]])
  })
})
