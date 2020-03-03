const input = document.querySelector('input[type=file]');
input.addEventListener(
  'change',
  function(e) {
    let str = '';
    const reader = new FileReader();
    reader.onload = function() {
      const lines = reader.result.split('\n').map(function(line) {
        if (!(str == '')) {
          str += ';';
        }
        str += line;
      });
      console.log(str);
      let arrayOfShapes = str.split(';');
      if (arrayOfShapes.length == 1) {
        //case a rect alone
        if (arrayOfShapes[0] == 'rectangle') {
          console.log('true');
        } else {
          console.log('false');
        }
      }
      if (arrayOfShapes.length == 2) {
        console.log('There are 2 shapes');
        //case a circle within a rect alone
        let shapes = arrayOfShapes.map(e => e.split(' '));
        console.log(shapes[0][1]);
        if (
          (shapes[0][0] == 'circle' && shapes[1][0] == 'rectangle') ||
          (shapes[0][0] == 'rectangle' && shapes[1][0] == 'circle')
        ) {
          let shape1 = shapes[0].splice(1).toString();
          let shape2 = shapes[1].splice(1).toString();
          if (shape1 == shape2) {
            console.log('true');
          } else {
            console.log('false');
          }
        }
        if (shapes[0][0] == 'rectangle' && shapes[1][0] == 'rectangle') {
          //case 2 rects beside each other
          let shape1 = shapes[0].splice(1);
          let shape2 = shapes[1].splice(1);
          console.log('regards to the x: ');
          console.log(shape1[2] == shape2[0]);
          console.log('==========');
          console.log(shape1[1] == shape2[1]);
          console.log('==========');
          console.log(shape1[3], shape2[3]);
          if (shape1.toString() == shape2.toString()) {
            console.log('rectangles overlapping');
            console.log('false');
          } else if (
            (shape1[0] == shape2[2] || shape1[2] == shape2[0]) &&
            shape1[1] == shape2[1] &&
            shape1[3].replace(/[^\x20-\x7E]/gim, '') ==
              shape2[3].replace(/[^\x20-\x7E]/gim, '') &&
            !(shape1.toString() == shape2.toString())
          ) {
            console.log('true');
          } else {
            console.log('not beside each other');
            console.log('false');
          }
        }
      } else {
        //case rect and rect OR rect-circ and rect OR rect and rect-circ OR rect-circle and rect-circle
      }
    };
    reader.readAsText(input.files[0]);
  },
  false
);
