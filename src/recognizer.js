import config from "config";
import { createWorker } from "tesseract.js";

export class Recognizer {
  constructor() {
    this.worker = null;
  }

  async init() {
    this.worker = await createWorker();

    await this.worker.loadLanguage("eng");
    await this.worker.initialize("eng");

    const characters = config.get("char_whitelist");
    await this.worker.setParameters({
      tessedit_char_whitelist: characters,
    });
  }

  async recognize(imageBuffer) {
    const {
      data: { text },
    } = await this.worker.recognize(imageBuffer);

    return String(text).trim();
  }

  async terminate() {
    await this.worker.terminate();
    this.worker = null;
  }
}
