var rows = [];

for (var i = 0; i < 2; i++) {
  var row = [];
  for (var j = 0; j < 2; j++) {
    if((j+i) % 2 == 0)
      row.push(new TextCell("##"));
    else
      row.push(new TextCell("  "));
  }
  rows.push(row);
}
console.log(drawTable(rows));

function TextCell(text) {
  this.text = text.split("\n");
}
