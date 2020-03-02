# Spatial Parser

## The Grammar
```
Start -> BOX | TWO_BOXES
BOX -> rectangle
BOX -> contains(rectangle, circle)
TWO_BOXES-> left_of(BOX, BOX)
```
## How To Use
You add grahpical description rules of cirlces or rectangles that satisfy the above grammar.
For example
```
rectangle 0 0 100 100
circle 0 0 100 100
rectangle 150 0 250 100
```
then press on submit and if the input is valid it will be drawn in the canvas.

## How To Run
You can open and try the project by either opening `index.html` file or check the [online demo](https://logician724.github.io/spatial-parser/)