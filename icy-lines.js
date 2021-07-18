new Path.Rectangle({
  point: [0, 0],
  size: [1000, 1000],
  fillColor: "#3d4660",
});

let lines = [];

function onMouseDrag(event) {
  line = new Path();
  line.strokeColor = "white";
  line.strokeWidth = 2;
  line.strokeCap = "round";
  line.opacity = 0.7;
  line.add(event.point);
  lines.push({
    item: line,
    maxlen: Math.random * 300,
  });
}

function onFrame() {
  lines.forEach((line) => {
    if (line.item.segments.length > line.maxlen) {
      line.remove();
      return;
    }
    let speed = Math.random() * 12;
    line.item.add(
      line.item.lastSegment.point.x - 3 + Math.random() * 6,
      line.item.lastSegment.point.y - 6 + Math.random() * speed
    );
    line.item.opacity -= 0.005;
  });
  lines = lines.filter((line) => line.item.opacity > 0);
}
