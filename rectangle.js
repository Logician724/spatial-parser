class Rectangle {
  constructor(minX, minY, maxX, maxY) {
    if (minX >= maxX || minY >= maxY) {
      throw `invalid boundaries ${minX}, ${minY}, ${maxX}, ${maxY}`;
    }
    this.minX = minX;
    this.maxX = maxX;
    this.maxY = maxY;
    this.minY = minY;
  }
  draw(stage) {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginStroke('#000000');
    this.shape.graphics.drawRect(
      this.minX,
      this.minY,
      this.maxX - this.minX,
      this.maxY - this.minY
    );
    this.shape.graphics.endFill();
    stage.addChild(this.shape);
    stage.update();
  }

  isLeftOf(rectangle) {
    return this.maxY == rectangle.maxY && this.minX >= rectangle.maxX;
  }
}
