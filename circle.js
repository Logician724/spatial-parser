class Circle {
  constructor(minX, minY, maxX, maxY) {
    if (minX >= maxX || minY >= maxY) {
      throw `invalid boundaries ${minX}, ${minY}, ${maxX}, ${maxY}`;
    }
    this.minX = minX;
    this.maxX = maxX;
    this.maxY = maxY;
    this.minY = minY;

    this.centerX = (minX + maxX) / 2;
    this.centerY = (minY + maxY) / 2;
    this.radius = (maxX - minX) / 2;
  }
  draw(stage) {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginStroke('#000000');
    this.shape.graphics.beginFill('#ffffff');
    this.shape.graphics.drawCircle(this.centerX, this.centerY, this.radius);
    this.shape.graphics.endFill();
    stage.addChild(this.shape);
    stage.update();
  }

  inside(rectangle) {
    return (
      this.minX < rectangle.maxX &&
      this.minX >= rectangle.minX &&
      this.minY < rectangle.maxY &&
      this.minY >= rectangle.minY &&
      this.maxX <= rectangle.maxX &&
      this.maxX > rectangle.minX &&
      this.maxY <= rectangle.maxY &&
      this.maxY > rectangle.minY
    );
  }
}
