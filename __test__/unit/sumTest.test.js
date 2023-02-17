// test1
function sum(x1, x2){
    return x1+x2
}


// if sum() run correctly 1+2 must be 3
test("sum() 1+2 must be 3 ??", () => {
    expect(sum(1, 2)).toBe(3);
  });