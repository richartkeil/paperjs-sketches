// Transformation Matrix:
let x1 = 0.9, x2 = -0.3;
let y1 = 0.3, y2 = 0.9;

// Display stuff
view.center = new Point(0, 0);

new Path.Rectangle({
  point: [0, 0],
  to: [1000, 1000],
  from: [-1000, -1000],
  fillColor: "#333",
});

let x = new Path.Line({
  from: [-1000, 0],
  to: [1000, 0],
  strokeWidth: 1,
  strokeColor: "#fff5",
});
let y = new Path.Line({
  from: [0, -1000],
  to: [0, 1000],
  strokeWidth: 1,
  strokeColor: "#fff5",
});

let vectors = [];

for (i = -10; i <= 10; i++) {
  for (j = -10; j <= 10; j++) {
    vectors.push(
      new Path.Circle({
        center: [i * 30, j * 30],
        radius: 2,
        fillColor: new Color(1, (i + 10) / 20, (j + 10) / 20),
      })
    );
  }
}

let matrix = new Matrix(x1, x2, y1, y2, 0, 0);
let inverse = matrix.clone().invert();

function onMouseDown() {
  vectors.forEach((v) => {
    v.tween(
      {
        position: v.position,
      },
      {
        position: v.position.transform(matrix),
      },
      1000
    );
  });
}
