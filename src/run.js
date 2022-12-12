import screenshot from "screenshot-desktop";
import { crop } from "./cropper";
import { Processor } from "./processor";
import { Recognizer } from "./recognizer";
import config from "config";
import { uIOhook, UiohookKey } from "uiohook-napi";

// const REGION = config.get("region");
// const recognizer = new Recognizer();

// (async () => {
//   await recognizer.init();

//   //   const processor = new Processor(async () => {
//   // const a = await shootAndGuess();
//   // console.log(a);
//   //   });

//   //   processor.init();
// })();

// const shootAndGuess = async () => {
//   return screenshot()
//     .then((imgBuffer) => crop(REGION, imgBuffer))
//     .then((imgBuffer) => recognizer.recognize(imgBuffer))
//     .catch((err) => console.err(err));
// };

uIOhook.on("keydown", (event) => {
  console.log(event.keycode);
});

uIOhook.start(true);

// processor.terminate();
