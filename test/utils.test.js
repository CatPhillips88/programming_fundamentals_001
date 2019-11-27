const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });

  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });


  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });

});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
})

describe("utils.makeHalfPrice", () => {
  test("returns 50 when passed 100 ", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
})

describe("utils.countBooks", () => {
  test("returns the total number of books in an array", () => {
    expect(utils.countBooks(["The Da Vinci Code", "Dracula", "Here Comes The Sun", "The Prince"])).toBe(4);
  });
});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "Here Comes The Sun ",
      author: "Nicole Dennis Ben",
      yearOfPublication: 2016,
      quantity: 26
    };

    expect(utils.isInStock(book)).toBe(true);
  });

});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      yearOfPublication: 2003,
      quantity: 0
    };

    expect(utils.isInStock(book)).toBe(false);
  });

});

describe("utils.getTotalOrderPrice", () => {
  test("returns multiples book price by quantity ordered then applies 20% VAT to total order", () => {
    expect(utils.getTotalOrderPrice(18, 2)).toBe(43.2);
  });

});


