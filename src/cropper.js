import sharp from "sharp";

export const crop = async (region, fromBuffer) =>
  sharp(fromBuffer).extract(region).toBuffer();
