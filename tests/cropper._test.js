import path from "node:path";
import config from "config";
import { crop } from "../src";

const getCroppedImage = async (number) => {
  const filename = `${number}.png`;
  const region = config.get("region");

  return crop(region, path.join(__dirname, "assets", filename));
};

test("1. Extract skills image from screenshot", async () => {
  const croppedImage = await getCroppedImage(1);

  expect(croppedImage).toMatchImageSnapshot({
    path: "../assets/1.cropped.png",
  });
});

test("2. Extract skills image from screenshot", async () => {
  const croppedImage = await getCroppedImage(2);

  expect(croppedImage).toMatchImageSnapshot({
    path: "../assets/2.cropped.png",
  });
});

test("3. Extract skills image from screenshot", async () => {
  const croppedImage = await getCroppedImage(3);

  expect(croppedImage).toMatchImageSnapshot({
    path: "../assets/3.cropped.png",
  });
});

test("4. Extract skills image from screenshot", async () => {
  const croppedImage = await getCroppedImage(4);

  expect(croppedImage).toMatchImageSnapshot({
    path: "../assets/4.cropped.png",
  });
});
