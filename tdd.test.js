test("Add with empty string", () => {
    expect(add("")).toBe(0);
  });
  
  test("Add with one number", () => {
    expect(add("1")).toBe(1);
  });
  
  test("Add with two numbers", () => {
    expect(add("1,2")).toBe(3);
  });
  
  test("Add with unknown amount of numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  
  test("Add with new line between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  
  test("Add with custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  
  test("Add with negative numbers", () => {
    expect(() => add("-1,2,-3")).toThrow("Negatives not allowed: -1,-3");
  });
  
  test("Add with numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });
  