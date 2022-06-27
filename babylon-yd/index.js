import _ from "lodash";
import mitt from "mitt";
import { Scheme } from "./enum/scheme.js";

export default class BabylonYD {
  constructor(canvas) {
    this.ydCanvas = canvas;
    this.engine = new BABYLON.Engine(this.ydCanvas);
    this.scene = new BABYLON.Scene(this.engine);
    this.ydMitter = window.YDMITTER;
    this.initBabylon();
  }
  createScene(scene, canvas) {
    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      3,
      new BABYLON.Vector3(0, 0, 0)
    );
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 0)
    );
    const box = BABYLON.MeshBuilder.CreateBox("box", {});
  }
  setupRenderLoop(engine, scene) {
    engine.runRenderLoop(() => {
      scene.render();
    });
  }
  onWindowResize() {
    if (this.engine) this.engine.resize();
  }
  initBabylon() {
    this.createScene(this.scene, this.ydCanvas);
    this.setupRenderLoop(this.engine, this.scene);
    window.addEventListener("resize", this.onWindowResize);
    console.log("initBabylon ", this.ydCanvas);
  }
  ydScheme() {
    let numArr = [2, 77, 12, 345, 56];
    let newArr = _.tail(numArr);
    console.log("newArr", newArr);
  }

  ydSchemeEmit() {
    console.log("ydSchemeEmit");
    this.ydMitter.emit(Scheme.NeedLogin, {
      user: "18511036516",
      pwd: "abcd",
    });
  }
  ydSchemeTest() {
    console.log("ydSchemeTest");
    this.ydMitter.emit("name", {
      name: "18511036516",
    });
  }

  ydSchemeTest2() {
    console.log("ydSchemeTest2");
    this.ydMitter.emit("user", {
      user: "18511036516",
      pwd: "abcd",
    });
  }
}
