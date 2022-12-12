import { createWorker } from "tesseract.js";

export class Recognizer {
  constructor() {
    this.worker = null;
  }

  async init() {
    this.worker = await createWorker({
      logger: (m) => console.log(m),
    });

    await this.worker.loadLanguage("eng");
    await this.worker.initialize("eng");
  }

  async recognize(imageBuffer) {
    const {
      data: { text },
    } = await this.worker.recognize(imageBuffer);

    return text;
  }

  async terminate() {
    await this.worker.terminate();
    this.worker = null;
  }
}
