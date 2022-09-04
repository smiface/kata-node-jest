import "regenerator-runtime/runtime";
import { getTodo } from "../src/fetch";

const todoItem = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

test("the data is peanut butter", async () => {
  // Arange
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(todoItem),
    })
  );
  // Act
  const data = await getTodo();
  // Assert
  expect(data).toStrictEqual(todoItem);
});
