import { Processor } from "../src";

const processor = new Processor();

beforeAll(() => {
  return processor.init();
});

afterAll(() => {
  return processor.terminate();
});

test("Test processor init and terminate", async () => {
  console.log("test");

  await new Promise((resolve) => setTimeout(resolve, 5000));
});
