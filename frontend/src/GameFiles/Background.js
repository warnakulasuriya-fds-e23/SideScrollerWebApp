class Layer {
  constructor(game, layerWidth, layerHeight, speedModifier, layerImage) {
    this.gameReref = game;
    this.layerWidth = layerWidth;
    this.layerHeight = layerHeight;
    this.speedModifier = speedModifier;
    this.layerImage = layerImage;
    this.posX = 0;
    this.posY = 0;
  }
  update() {
    if (this.posX < -this.layerWidth) this.posX = 0;
    else
      this.posX -=
        this.gameReref.maxSpeed *
        this.gameReref.speedFraction *
        this.speedModifier;
  }
  draw(context) {
    //here we will be drawing the layer image twice to make things seamless
    //note that second drawing of the layer will never be fully viewed, this.x resets to zero before it can
    context.drawImage(
      this.layerImage,
      this.posX,
      this.posY,
      this.layerWidth,
      this.layerHeight
    );

    context.drawImage(
      this.layerImage,
      this.posX + this.layerWidth,
      this.posY,
      this.layerWidth,
      this.layerHeight
    );
  }
  PropLoader(GameStateData, layerMarker) {
    if (layerMarker == "layer1") {
      this.layerWidth = GameStateData.background.layer1.layerWidth;
      this.layerHeight = GameStateData.background.layer1.layerHeight;
      this.speedModifier = GameStateData.background.layer1.speedModifier;
      this.layerImage = GameStateData.background.layer1.layerImage;
      this.posX = GameStateData.background.layer1.posX;
      this.posY = GameStateData.background.layer1.posY;
    } else if (layerMarker == "layer2") {
      this.layerWidth = GameStateData.background.layer2.layerWidth;
      this.layerHeight = GameStateData.background.layer2.layerHeight;
      this.speedModifier = GameStateData.background.layer2.speedModifier;
      this.layerImage = GameStateData.background.layer2.layerImage;
      this.posX = GameStateData.background.layer2.posX;
      this.posY = GameStateData.background.layer2.posY;
    } else if (layerMarker == "layer3") {
      this.layerWidth = GameStateData.background.layer3.layerWidth;
      this.layerHeight = GameStateData.background.layer3.layerHeight;
      this.speedModifier = GameStateData.background.layer3.speedModifier;
      this.layerImage = GameStateData.background.layer3.layerImage;
      this.posX = GameStateData.background.layer3.posX;
      this.posY = GameStateData.background.layer3.posY;
    } else if (layerMarker == "layer4") {
      this.layerWidth = GameStateData.background.layer4.layerWidth;
      this.layerHeight = GameStateData.background.layer4.layerHeight;
      this.speedModifier = GameStateData.background.layer4.speedModifier;
      this.layerImage = GameStateData.background.layer4.layerImage;
      this.posX = GameStateData.background.layer4.posX;
      this.posY = GameStateData.background.layer4.posY;
    } else if (layerMarker == "layer5") {
      this.layerWidth = GameStateData.background.layer5.layerWidth;
      this.layerHeight = GameStateData.background.layer5.layerHeight;
      this.speedModifier = GameStateData.background.layer5.speedModifier;
      this.layerImage = GameStateData.background.layer5.layerImage;
      this.posX = GameStateData.background.layer5.posX;
      this.posY = GameStateData.background.layer5.posY;
    }
  }
}

export class Background {
  constructor(game) {
    this.gameReref = game;
    this.width = 1667;
    this.height = 500;
    this.layer1image = document.getElementById("layer1");
    this.layer2image = document.getElementById("layer2");
    this.layer3image = document.getElementById("layer3");
    this.layer4image = document.getElementById("layer4");
    this.layer5image = document.getElementById("layer5");

    this.layer1 = new Layer(
      this.gameReref,
      this.width,
      this.height,
      0,
      this.layer1image
    );
    this.layer2 = new Layer(
      this.gameReref,
      this.width,
      this.height,
      0.2,
      this.layer2image
    );
    this.layer3 = new Layer(
      this.gameReref,
      this.width,
      this.height,
      0.4,
      this.layer3image
    );
    this.layer4 = new Layer(
      this.gameReref,
      this.width,
      this.height,
      0.8,
      this.layer4image
    );
    this.layer5 = new Layer(
      this.gameReref,
      this.width,
      this.height,
      1,
      this.layer5image
    );

    this.BackgroundLayers = [
      this.layer1,
      this.layer2,
      this.layer3,
      this.layer4,
      this.layer5,
    ];
  }
  update() {
    this.BackgroundLayers.forEach((layer) => {
      layer.update();
    });
  }
  draw(context) {
    this.BackgroundLayers.forEach((layer) => {
      layer.draw(context);
    });
  }
  PropLoader(GameStateData) {
    this.width = GameStateData.background.width;
    this.height = GameStateData.background.height;
    this.layer1image = GameStateData.background.layer1image;
    this.layer2image = GameStateData.background.layer2image;
    this.layer3image = GameStateData.background.layer3image;
    this.layer4image = GameStateData.background.layer4image;
    this.layer5image = GameStateData.background.layer5image;
    this.layer1.PropLoader(GameStateData, "layer1"); // [Completed Prop Loader]
    this.layer2.PropLoader(GameStateData, "layer2"); // [Completed Prop Loader]
    this.layer3.PropLoader(GameStateData, "layer3"); // [Completed Prop Loader]
    this.layer4.PropLoader(GameStateData, "layer4"); // [Completed Prop Loader]
    this.layer5.PropLoader(GameStateData, "layer5"); // [Completed Prop Loader]
  }
}
