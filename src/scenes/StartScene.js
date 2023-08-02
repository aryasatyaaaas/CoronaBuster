import Phaser from "phaser";
export default class StartScene extends Phaser.Scene {
  constructor() {
    super("start-scene");
  }
  init(data) {
    this.startButton = undefined;
  }
  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("start", "images/starticon.png");
    this.load.image("start-button", "images/start-button.png");
  }
  create() {
    this.add.image(200, 300, "background");
    this.add.image(200, 200, "start");

    this.replayButton = this.add
      .image(200, 400, "start-button")
      .setInteractive()
      .setScale(0.5);

    this.replayButton.once(
      "pointerup",
      () => {
        this.scene.start("corona-buster-scene");
      },
      this
    );
  }
}
