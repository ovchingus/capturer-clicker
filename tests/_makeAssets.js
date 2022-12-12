import fs from "node:fs";
import path from "node:path";
import config from "config";
import sharp from "sharp";

fs.readdir(path.join(__dirname, "assets"), async (err, files) => {
  const region = config.get("region");

  for (const file of files) {
    console.log("Done: ", file);

    await sharp(path.join(__dirname, "assets", file))
      .extract(region)
      .toFile(path.join(__dirname, "assets", `cropped.${file}`));
  }
});
