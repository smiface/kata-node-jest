import { isIcon } from "../src/icon";

it("is it icon", () => {
  const name = "Vladilen";

  expect(isIcon(name)).toBe(true);
});
