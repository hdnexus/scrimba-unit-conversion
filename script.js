const convertBtn = document.getElementById("convert-button");

const lengthEl = document.getElementById("length");
const convertedLengthEl = document.getElementById("converted-length");

const volumeEl = document.getElementById("volume");
const convertedVolumeEl = document.getElementById("converted-volume");

const massEl = document.getElementById("mass");
const convertedMassEl = document.getElementById("converted-mass");

function convertLength(typedNum) {
  const convertedFeet = typedNum * 3.28084;
  const convertedMeters = typedNum * 0.3048;

  lengthEl.textContent = "Length (Meter/Feet)";
  convertedLengthEl.textContent = `${typedNum} meters = ${convertedFeet.toFixed(
    3
  )} feet | ${typedNum} feet = ${convertedMeters.toFixed(3)} meters`;
}

function convertVolume(typedNum) {
  const convertedLiters = typedNum * 3.78541;
  const convertedGallons = typedNum / 3.78541;
  volumeEl.textContent = "Volume (Liters/Gallons)";
  convertedVolumeEl.textContent = `${typedNum} liters = ${convertedGallons.toFixed(
    3
  )} gallons | ${typedNum} gallons = ${convertedLiters.toFixed(3)} liters`;
}

function convertMass(typedNum) {
  const convertedKilograms = typedNum * 0.453592;
  const convertedPounds = typedNum * 2.20462;
  massEl.textContent = "Mass (Kilograms/Pounds)";
  convertedMassEl.textContent = `${typedNum} kilos = ${convertedPounds.toFixed(
    3
  )} pounds | ${typedNum} pounds = ${convertedKilograms.toFixed(3)} kilos`;
}

convertBtn.addEventListener("click", function () {
  let typedNumber = 0;
  if (document.getElementById("typed-number").value) {
    typedNumber = document.getElementById("typed-number").value;
  } else {
    alert("You must type a number!");
  }
  convertLength(typedNumber);
  convertVolume(typedNumber);
  convertMass(typedNumber);
});
