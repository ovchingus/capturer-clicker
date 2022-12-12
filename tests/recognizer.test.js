import path from "node:path";
import fs from "node:fs";
import { Recognizer } from "../src";

const recognizer = new Recognizer();

beforeAll(() => {
  return recognizer.init();
});

afterAll(() => {
  return recognizer.terminate();
});

test("Recognizer gets symbol from skill image with sign 'F'", async () => {
  const image = fs.readFileSync(
    path.join(__dirname, "assets", "cropped.1.png")
  );
  const data = await recognizer.recognize(image);
  expect(data).toBe("F");
});

test("Recognizer gets symbol from skill image with sign '1'", async () => {
  const image = fs.readFileSync(
    path.join(__dirname, "assets", "cropped.2.png")
  );
  const data = await recognizer.recognize(image);
  expect(data).toBe("1");
});

test("Recognizer gets symbol from skill image with sign '1'", async () => {
  const image = fs.readFileSync(
    path.join(__dirname, "assets", "cropped.3.png")
  );
  const data = await recognizer.recognize(image);
  expect(data).toBe("1");
});

test("Recognizer gets symbol from skill image with sign 'ST'", async () => {
  const image = fs.readFileSync(
    path.join(__dirname, "assets", "cropped.4.png")
  );
  const data = await recognizer.recognize(image);
  expect(data).toBe("ST");
});
