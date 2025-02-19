const magnetData = [
    {"material":"Neodymium",    "grade":"N35",      "bh_max":"263",     "residual_induction":"1.17",    "coercive_force_induction":"868",   "coercive_force_magnetization":"955",   "curie_temperature":"80",   "density":"7.5"},
    {"material":"Neodymium",    "grade":"N38",      "bh_max":"287",     "residual_induction":"1.21",    "coercive_force_induction":"899",   "coercive_force_magnetization":"955",   "curie_temperature":"80",   "density":"7.5"},
    {"material":"Neodymium",    "grade":"N40",      "bh_max":"302",     "residual_induction":"1.25",    "coercive_force_induction":"923",   "coercive_force_magnetization":"955",   "curie_temperature":"80",   "density":"7.5"},
    {"material":"Neodymium",    "grade":"N42",      "bh_max":"318",     "residual_induction":"1.28",    "coercive_force_induction":"923",   "coercive_force_magnetization":"955",   "curie_temperature":"80",   "density":"7.5"},
    {"material":"Neodymium",    "grade":"N45",      "bh_max":"342",     "residual_induction":"1.32",    "coercive_force_induction":"876",   "coercive_force_magnetization":"955",   "curie_temperature":"80",   "density":"7.5"},
    {"material":"Neodymium",    "grade":"N48",      "bh_max":"366",     "residual_induction":"1.38",    "coercive_force_induction":"835",   "coercive_force_magnetization":"876",   "curie_temperature":"80",   "density":"7.5"},
    {"material":"Neodymium",    "grade":"N50",      "bh_max":"376",     "residual_induction":"1.4",     "coercive_force_induction":"835",   "coercive_force_magnetization":"880",   "curie_temperature":"80",   "density":"7.5"},
    {"material":"Neodymium",    "grade":"N30M",     "bh_max":"223",     "residual_induction":"1.08",    "coercive_force_induction":"780",   "coercive_force_magnetization":"1114",  "curie_temperature":"100",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N33M",     "bh_max":"239",     "residual_induction":"1.14",    "coercive_force_induction":"820",   "coercive_force_magnetization":"1114",  "curie_temperature":"100",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N35M",     "bh_max":"263",     "residual_induction":"1.17",    "coercive_force_induction":"860",   "coercive_force_magnetization":"1114",  "curie_temperature":"100",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N38M",     "bh_max":"287",     "residual_induction":"1.22",    "coercive_force_induction":"860",   "coercive_force_magnetization":"1114",  "curie_temperature":"100",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N40M",     "bh_max":"302",     "residual_induction":"1.26",    "coercive_force_induction":"860",   "coercive_force_magnetization":"1114",  "curie_temperature":"100",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N42M",     "bh_max":"318",     "residual_induction":"1.29",    "coercive_force_induction":"836",   "coercive_force_magnetization":"1114",  "curie_temperature":"100",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N45M",     "bh_max":"342",     "residual_induction":"1.33",    "coercive_force_induction":"836",   "coercive_force_magnetization":"1114",  "curie_temperature":"100",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N48M",     "bh_max":"358",     "residual_induction":"1.37",    "coercive_force_induction":"836",   "coercive_force_magnetization":"1114",  "curie_temperature":"100",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N30H",     "bh_max":"223",     "residual_induction":"1.08",    "coercive_force_induction":"780",   "coercive_force_magnetization":"1353",  "curie_temperature":"120",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N33H",     "bh_max":"247",     "residual_induction":"1.13",    "coercive_force_induction":"836",   "coercive_force_magnetization":"1353",  "curie_temperature":"120",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N35H",     "bh_max":"263",     "residual_induction":"1.17",    "coercive_force_induction":"868",   "coercive_force_magnetization":"1353",  "curie_temperature":"120",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N38H",     "bh_max":"287",     "residual_induction":"1.21",    "coercive_force_induction":"899",   "coercive_force_magnetization":"1353",  "curie_temperature":"120",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N40H",     "bh_max":"302",     "residual_induction":"1.24",    "coercive_force_induction":"923",   "coercive_force_magnetization":"1353",  "curie_temperature":"120",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N42H",     "bh_max":"318",     "residual_induction":"1.28",    "coercive_force_induction":"923",   "coercive_force_magnetization":"1353",  "curie_temperature":"120",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N45H",     "bh_max":"334",     "residual_induction":"1.32",    "coercive_force_induction":"955",   "coercive_force_magnetization":"1353",  "curie_temperature":"120",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N30S",     "bh_max":"223",     "residual_induction":"1.08",    "coercive_force_induction":"780",   "coercive_force_magnetization":"1595",  "curie_temperature":"150",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N33S",     "bh_max":"247",     "residual_induction":"1.13",    "coercive_force_induction":"844",   "coercive_force_magnetization":"1595",  "curie_temperature":"150",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N35S",     "bh_max":"263",     "residual_induction":"1.17",    "coercive_force_induction":"876",   "coercive_force_magnetization":"1595",  "curie_temperature":"150",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N38S",     "bh_max":"287",     "residual_induction":"1.21",    "coercive_force_induction":"907",   "coercive_force_magnetization":"1595",  "curie_temperature":"150",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N40S",     "bh_max":"302",     "residual_induction":"1.24",    "coercive_force_induction":"939",   "coercive_force_magnetization":"1595",  "curie_temperature":"150",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N42S",     "bh_max":"326",     "residual_induction":"1.3",     "coercive_force_induction":"963",   "coercive_force_magnetization":"1595",  "curie_temperature":"150",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N28U",     "bh_max":"207",     "residual_induction":"1.02",    "coercive_force_induction":"764",   "coercive_force_magnetization":"1990",  "curie_temperature":"180",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N30U",     "bh_max":"223",     "residual_induction":"1.08",    "coercive_force_induction":"812",   "coercive_force_magnetization":"1990",  "curie_temperature":"180",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N33U",     "bh_max":"247",     "residual_induction":"1.13",    "coercive_force_induction":"852",   "coercive_force_magnetization":"1990",  "curie_temperature":"180",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N35U",     "bh_max":"268",     "residual_induction":"1.17",    "coercive_force_induction":"860",   "coercive_force_magnetization":"1990",  "curie_temperature":"180",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N38U",     "bh_max":"279",     "residual_induction":"1.22",    "coercive_force_induction":"908",   "coercive_force_magnetization":"1990",  "curie_temperature":"180",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N40U",     "bh_max":"303",     "residual_induction":"1.26",    "coercive_force_induction":"940",   "coercive_force_magnetization":"1990",  "curie_temperature":"180",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N26E",     "bh_max":"191",     "residual_induction":"1.0",     "coercive_force_induction":"764",   "coercive_force_magnetization":"2400",  "curie_temperature":"200",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N28E",     "bh_max":"207",     "residual_induction":"1.04",    "coercive_force_induction":"780",   "coercive_force_magnetization":"2400",  "curie_temperature":"200",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N30E",     "bh_max":"223",     "residual_induction":"1.08",    "coercive_force_induction":"812",   "coercive_force_magnetization":"2400",  "curie_temperature":"200",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N33E",     "bh_max":"248",     "residual_induction":"1.14",    "coercive_force_induction":"835",   "coercive_force_magnetization":"2400",  "curie_temperature":"200",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N35E",     "bh_max":"263",     "residual_induction":"1.17",    "coercive_force_induction":"860",   "coercive_force_magnetization":"2400",  "curie_temperature":"200",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N28A",     "bh_max":"207",     "residual_induction":"1.04",    "coercive_force_induction":"796",   "coercive_force_magnetization":"2785",  "curie_temperature":"240",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N30A",     "bh_max":"223",     "residual_induction":"1.08",    "coercive_force_induction":"828",   "coercive_force_magnetization":"2785",  "curie_temperature":"240",  "density":"7.5"},
    {"material":"Neodymium",    "grade":"N32A",     "bh_max":"239",     "residual_induction":"1.14",    "coercive_force_induction":"867",   "coercive_force_magnetization":"2785",  "curie_temperature":"240",  "density":"7.5"},
    {"material": "Ferrite",     "grade": "Y10T",    "bh_max": "9.0",    "residual_induction": "0.24",   "coercive_force_induction": "135",  "coercive_force_magnetization": "205",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y20",     "bh_max": "19.0",   "residual_induction": "0.33",   "coercive_force_induction": "225",  "coercive_force_magnetization": "260",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y23",     "bh_max": "21.9",   "residual_induction": "0.34",   "coercive_force_induction": "260",  "coercive_force_magnetization": "320",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y25",     "bh_max": "22.0",   "residual_induction": "0.36",   "coercive_force_induction": "215",  "coercive_force_magnetization": "220",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y28",     "bh_max": "23.0",   "residual_induction": "0.36",   "coercive_force_induction": "230",  "coercive_force_magnetization": "240",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y30",     "bh_max": "24.0",   "residual_induction": "0.36",   "coercive_force_induction": "220",  "coercive_force_magnetization": "230",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y32",     "bh_max": "24.0",   "residual_induction": "0.36",   "coercive_force_induction": "260",  "coercive_force_magnetization": "350",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y33",     "bh_max": "25.0",   "residual_induction": "0.38",   "coercive_force_induction": "145",  "coercive_force_magnetization": "150",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y34",     "bh_max": "25.0",   "residual_induction": "0.38",   "coercive_force_induction": "165",  "coercive_force_magnetization": "170",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y35",     "bh_max": "25.5",   "residual_induction": "0.37",   "coercive_force_induction": "280",  "coercive_force_magnetization": "380",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y36",     "bh_max": "25.6",   "residual_induction": "0.37",   "coercive_force_induction": "270",  "coercive_force_magnetization": "326",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y38",     "bh_max": "26.0",   "residual_induction": "0.37",   "coercive_force_induction": "155",  "coercive_force_magnetization": "160",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y40",     "bh_max": "26.0",   "residual_induction": "0.37",   "coercive_force_induction": "230",  "coercive_force_magnetization": "240",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y25BH",   "bh_max": "26.4",   "residual_induction": "0.38",   "coercive_force_induction": "280",  "coercive_force_magnetization": "320",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y30BH",   "bh_max": "27.0",   "residual_induction": "0.38",   "coercive_force_induction": "215",  "coercive_force_magnetization": "220",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y15H",    "bh_max": "27.1",   "residual_induction": "0.38",   "coercive_force_induction": "270",  "coercive_force_magnetization": "310",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y20H",    "bh_max": "27.5",   "residual_induction": "0.38",   "coercive_force_induction": "285",  "coercive_force_magnetization": "380",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y22H",    "bh_max": "27.5",   "residual_induction": "0.38",   "coercive_force_induction": "374",  "coercive_force_magnetization": "398",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y26H",    "bh_max": "28.0",   "residual_induction": "0.39",   "coercive_force_induction": "165",  "coercive_force_magnetization": "170",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y26H-1",  "bh_max": "28.0",   "residual_induction": "0.39",   "coercive_force_induction": "240",  "coercive_force_magnetization": "250",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y26H-2",  "bh_max": "28.0",   "residual_induction": "0.38",   "coercive_force_induction": "290",  "coercive_force_magnetization": "370",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y27H",    "bh_max": "28.0",   "residual_induction": "0.38",   "coercive_force_induction": "250",  "coercive_force_magnetization": "395",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y28H-1",  "bh_max": "28.8",   "residual_induction": "0.39",   "coercive_force_induction": "236",  "coercive_force_magnetization": "275",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y28H-2",  "bh_max": "29.0",   "residual_induction": "0.38",   "coercive_force_induction": "290",  "coercive_force_magnetization": "400",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y30H-1",  "bh_max": "29.6",   "residual_induction": "0.4",    "coercive_force_induction": "250",  "coercive_force_magnetization": "255",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y30H-2",  "bh_max": "30.0",   "residual_induction": "0.39",   "coercive_force_induction": "305",  "coercive_force_magnetization": "350",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y32H-1",  "bh_max": "30.2",   "residual_induction": "0.41",   "coercive_force_induction": "225",  "coercive_force_magnetization": "230",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y32H-2",  "bh_max": "30.2",   "residual_induction": "0.4",    "coercive_force_induction": "290",  "coercive_force_magnetization": "320",  "curie_temperature": "300", "density": "5"},
    {"material": "Ferrite",     "grade": "Y33H",    "bh_max": "30.0",   "residual_induction": "0.39",   "coercive_force_induction": "300",  "coercive_force_magnetization": "370",  "curie_temperature": "300", "density": "5"}
];
    
document.addEventListener('DOMContentLoaded', () => {
  populateMagnetSelectorMaterial(magnetData);
});

function populateMagnetSelectorMaterial(data) {
  const selector = document.getElementById('magnet-material-selector');
  const uniqueMaterials = new Set(); // Use a Set to store unique materials

  data.forEach(magnet => {
    uniqueMaterials.add(magnet.material); // Add each material to the Set
  });

  // Convert Set to an array and populate the selector
  Array.from(uniqueMaterials).forEach(material => {
    const option = document.createElement('option');
    option.value = material;
    option.textContent = material;
    selector.appendChild(option);
  });
}

function populateMagnetSelectorGrade(data, selectedMaterial) {
  const selector = document.getElementById('magnet-grade-selector');
  selector.innerHTML = '<option value="">Select Grade</option>'; // Clear existing options

  // Filter the data based on the selected material
  const filteredData = data.filter(magnet => magnet.material === selectedMaterial);

  // Populate the selector with the filtered grades
  filteredData.forEach(magnet => {
    const option = document.createElement('option');
    option.value = magnet.grade;
    option.textContent = magnet.grade;
    selector.appendChild(option);
  });
}

// Change grade options after material change
const materialSelector = document.getElementById('magnet-material-selector');
materialSelector.addEventListener('change', () => {
  const selectedMaterial = materialSelector.value;
  populateMagnetSelectorGrade(magnetData, selectedMaterial);
});

function displayMagnetInfo() {
  const selectedGrade = document.getElementById('magnet-grade-selector').value;
  const shape = document.getElementById('magnet-shape-selector').value;
  const value1 = parseFloat(document.getElementById('shape-specific-value-1').value);
  const value2 = parseFloat(document.getElementById('shape-specific-value-2').value);
  const value3 = parseFloat(document.getElementById('shape-specific-value-3').value);

  if (!selectedGrade || !shape || isNaN(value1) || isNaN(value2) || (shape === 'block' && isNaN(value3))) {
      alert('Please fill in all required fields with valid numeric values.');
      return;
  }

  if (!magnetData || !Array.isArray(magnetData)) {
      alert('Error: Magnet data is missing or invalid.');
      return;
  }

  const magnet = magnetData.find(m => m.grade === selectedGrade);

  if (!magnet) {
      alert('Error: Magnet with the selected grade not found.');
      return;
  }

  const tbody = document.getElementById('magnet-info-table').getElementsByTagName('tbody')[0];
  tbody.innerHTML = ''; // Clear the table body

  const rows = [
      { characteristic: 'Maximum Energy Product', value: magnet.bh_max, unit: 'MGOe' },
      { characteristic: 'Residual Magnetic Flux Density', value: magnet.residual_induction, unit: 'T' },
      { characteristic: 'Coercive Force', value: magnet.coercive_force_induction, unit: 'kA/m' },
      { characteristic: 'Intrinsic Coercive Force', value: magnet.coercive_force_magnetization, unit: 'kA/m' },
      { characteristic: 'Maximum Operating Temperature', value: magnet.curie_temperature, unit: '°C' },
      { characteristic: 'Density', value: magnet.density, unit: 'g/cm³' },
      { characteristic: 'Mass', value: calculateMass(magnet), unit: 'g' },
      { characteristic: 'Pole Area', value: calculatePoleArea(), unit: 'm²'},
      { characteristic: 'Attractive Force', value: calculateAttractiveForce(magnet.residual_induction), unit: 'N'}
  ];

  rows.forEach(row => {
      const tr = document.createElement('tr');
      const characteristicTd = document.createElement('td');
      const valueTd = document.createElement('td');
      const unitTd = document.createElement('td');

      characteristicTd.textContent = row.characteristic;
      valueTd.textContent = row.value !== undefined ? row.value : 'N/A';
      unitTd.textContent = row.unit;

      tr.appendChild(characteristicTd);
      tr.appendChild(valueTd);
      tr.appendChild(unitTd);
      tbody.appendChild(tr);
  });
}

function calculateVolume(magnet) {
  const shape = document.getElementById('magnet-shape-selector').value;
  const value1 = parseFloat(document.getElementById('shape-specific-value-1').value);
  const value2 = parseFloat(document.getElementById('shape-specific-value-2').value);
  const value3 = parseFloat(document.getElementById('shape-specific-value-3').value);

  let volume = 0;
  if (shape === 'block') {
      const length = value1 / 10;
      const width = value2 / 10;
      const height = value3 / 10;
      volume = length * width * height;
  } else if (shape === 'disk') {
      const diameter = value1 / 10;
      const height = value2 / 10;
      const radius = diameter / 2;
      volume = Math.PI * Math.pow(radius, 2) * height;
  } else if (shape === 'ring') {
      const height = value3 / 10;
      const diameterExt = value1 / 10;
      const radiusExt = diameterExt / 2;
      let volumeExt = Math.PI * Math.pow(radiusExt, 2) * height;
      const diameterInt = value2 / 10;
      const radiusInt = diameterInt / 2;
      let volumeInt = Math.PI * Math.pow(radiusInt, 2) * height;
      volume = volumeExt - volumeInt;
  }

  return volume.toFixed(2);
}

function calculateMass(magnet) {
  const volume = calculateVolume(magnet);
  return (volume * magnet.density).toFixed(2); // Return mass with 2 decimal places
}

function calculatePoleArea() {
  const shape = document.getElementById('magnet-shape-selector').value;
  const value1 = parseFloat(document.getElementById('shape-specific-value-1').value);
  const value2 = parseFloat(document.getElementById('shape-specific-value-2').value);
  const value3 = parseFloat(document.getElementById('shape-specific-value-3').value);

  let area = 0;
  if (shape === 'block') {
      const length = value1 / 10; // Convert mm to cm
      const width = value2 / 10; // Convert mm to cm
      area = length * width;
  } else if (shape === 'disk') {
      const diameter = value1 / 10; // Convert mm to cm
      const radius = diameter / 2;
      area = Math.PI * Math.pow(radius, 2);
  }
  else if (shape === 'ring') {
      const diameterExt = value1 / 10; // Convert mm to cm
      const radiusExt = diameterExt / 2;
      const areaExt = Math.PI * Math.pow(radiusExt, 2);
      const diameterInt = value2 / 10; // Convert mm to cm
      const radiusInt = diameterInt / 2;
      const areaInt = Math.PI * Math.pow(radiusInt, 2);
      area = areaExt - areaInt;
  }

  const areaInSquareMeters = area / 10000; // Convert cm^2 to m^2
  return areaInSquareMeters.toFixed(8); // Return area with 8 decimal places
}

function calculateAttractiveForce(BH) {
  const diameter = parseFloat(document.getElementById('shape-specific-value-1').value);
  const thickness = parseFloat(document.getElementById('shape-specific-value-2').value);
  
  const diameterMeters = diameter / 1000;
  const thicknessMeters = thickness / 1000;

  const area = calculatePoleArea()
  const mu0 = 4 * Math.PI * Math.pow(10, -7);

  // Calculate magnetic flux density (B) directly from BH in T
  let B = 0.49;

  // Calculate the attractive force (F) in Newtons with thickness adjustment
  let forceN = (Math.pow(B, 2) * area) / (2 * mu0) * (1 + thicknessMeters / diameterMeters);

  // Convert force from Newtons to kilograms-force (kgf)
  let forceKgf = forceN * 0.10197;

  return forceKgf.toFixed(4);
}


/* Shape Specific Fields */
function toggleShapeFields() {
  const shapeSelector = document.getElementById('magnet-shape-selector');
  const shapeSpecificLabel1 = document.getElementById('shape-specific-label-1');
  const shapeSpecificLabel2 = document.getElementById('shape-specific-label-2');
  const shapeSpecificLabel3 = document.getElementById('shape-specific-label-3');

  const shapeSpecificValue1 = document.getElementById('shape-specific-value-1');
  const shapeSpecificValue2 = document.getElementById('shape-specific-value-2');
  const shapeSpecificValue3 = document.getElementById('shape-specific-value-3');

  const selectedShape = shapeSelector.value;
  if (selectedShape === 'block') {
    shapeSpecificLabel1.textContent = 'Length (MM):';
    shapeSpecificLabel2.textContent = 'Width (MM):';
    shapeSpecificLabel3.textContent = 'Height (MM):';

    shapeSpecificValue1.style.display = 'block';
    shapeSpecificValue2.style.display = 'block';
    shapeSpecificValue3.style.display = 'block';

    shapeSpecificValue1.required = true;
    shapeSpecificValue2.required = true;
    shapeSpecificValue3.required = true;
  } else if (selectedShape === 'disk') {
    shapeSpecificLabel1.textContent = 'Diameter (MM):';
    shapeSpecificLabel2.textContent = 'Height (MM):';
    shapeSpecificLabel3.textContent = '';

    shapeSpecificValue1.style.display = 'block';
    shapeSpecificValue2.style.display = 'block';
    shapeSpecificValue3.style.display = 'none';

    shapeSpecificValue1.required = true;
    shapeSpecificValue2.required = true;
    shapeSpecificValue3.required = false;
  } else if (selectedShape === 'ring') {
    shapeSpecificLabel1.textContent = 'Diameter Ext.(MM):';
    shapeSpecificLabel2.textContent = 'Diameter Int.(MM):';
    shapeSpecificLabel3.textContent = 'Height (MM):';

    shapeSpecificValue1.style.display = 'block';
    shapeSpecificValue2.style.display = 'block';
    shapeSpecificValue3.style.display = 'block';

    shapeSpecificValue1.required = true;
    shapeSpecificValue2.required = true;
    shapeSpecificValue3.required = true;
  }
}