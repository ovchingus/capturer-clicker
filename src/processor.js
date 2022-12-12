import config from "config";

const POLL_INTERVAL = config.get("poll_interval");

export class Processor {
  constructor(actFn) {
    this.pinger = null;
    this.act = actFn;
  }

  init() {
    this.pinger = setInterval(() => {
      this.act();
    }, POLL_INTERVAL);
  }

  terminate() {
    clearInterval(this.pinger);
    this.pinger = null;
  }
}
