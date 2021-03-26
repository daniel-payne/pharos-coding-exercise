import nameSort from "src/utils/nameSort";

const data = [{ name: "dave" }, { name: "arnold" }];

test("It Sorts", () => {
  const sorted = data.sort(nameSort);

  expect(sorted[0].name).toBe("arnold");
});
