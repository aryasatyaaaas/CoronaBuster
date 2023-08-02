import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import StartScene from "./scenes/StartScene";
import CoronaBusterScene from "./scenes/CoronaBusterScene";
import GameOverScene from "./scenes/GameOverScene";
const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 620,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [StartScene, CoronaBusterScene, GameOverScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

export default new Phaser.Game(config);
