function drawViz(data) {
  const container = document.getElementById('table-container');
  container.innerHTML = '';

  const fields = data.fields;
  const row = data.rows[0];

  fields.forEach((field, i) => {
    const fieldName = field.name;
    const fieldValue = row[i] == null || row[i] === '' ? 'null' : row[i];

    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'cell name';
    nameDiv.textContent = fieldName;

    const valueDiv = document.createElement('div');
    valueDiv.className = 'cell value';
    valueDiv.textContent = fieldValue;

    rowDiv.appendChild(nameDiv);
    rowDiv.appendChild(valueDiv);
    container.appendChild(rowDiv);
  });
}

function draw(data) {
  drawViz(data);
}
