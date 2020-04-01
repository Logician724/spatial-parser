

function executeParsedText() {
  init();
  const desc = document.querySelector("#parsed-text-area").value;
  parseGraphics(desc);
}

function parseGraphics(desc) {
  let shapes = [];
  let rectangles = [];
  let circles = [];
  let commands = desc.split("\n");
  try {
    for (const command of commands) {
      let commandParams = command.split(" ");
      if (commandParams[0] === 'rectangle') {
        const newRect = new Rectangle(parseInt(commandParams[1]), parseInt(commandParams[2]), parseInt(commandParams[3]), parseInt(commandParams[4]));
        shapes.push(newRect);
        rectangles.push(newRect);

      } else {
        if (commandParams[0] === 'circle') {
          const newCircle = new Circle(parseInt(commandParams[1]), parseInt(commandParams[2]), parseInt(commandParams[3]), parseInt(commandParams[4]));
          shapes.push(newCircle);
          circles.push(newCircle);
        }
      }
    }
  }catch(err){
    return alert(err);
  }
  

  if (shapes.length == 0 || shapes.length > 4) {
    return alert("Invalid number of shapes " + shapes.length);
  }
  if (rectangles.length < 1 || rectangles.length > 2) {
    return alert("Invalid number of rectangles " + rectangles.length);
  }

  if (circles.length > 2) {
    return alert("Too many circles " + circles.length);
  }

  if (rectangles.length === 1 && circles.length > 1) {
    return alert("Too many circles " + circles.length);
  }


  if (rectangles.length == 2 && !rectangles[0].isLeftOf(rectangles[1]) && !rectangles[1].isLeftOf(rectangles[0])) {
    return alert("Boxes are not to the left of each other");
  }

  for (const circle of circles) {
    let isContained = false;
    for (const rectangle of rectangles) {
      if (circle.inside(rectangle)) {
        isContained = true;
      }
    }
    if (!isContained) {
      return alert(`Circle is not contained (${circle.centerX}, ${circle.centerY}, ${circle.radius})`);
    }
  }
  for (const shape of shapes) {
    shape.draw(stage);
  }
  alert(`The answer is ${10 ** shapes.length }`);
} 