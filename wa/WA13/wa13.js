const volumeControl = document.getElementById("volume");
const volumeLevel = document.getElementById("volume-level");
const errorText = document.getElementById("error-text");

// Update volume level display
volumeControl.addEventListener("input", function() {
  let value = parseInt(volumeControl.value);
  if (value % 5 !== 0) {
    value = Math.floor(value / 5) * 5;
    volumeControl.value = value;
    errorText.style.display = "block";
    setTimeout(function() {
      errorText.style.display = "none";
    }, 1000);
  } else {
    volumeLevel.textContent = `${value}%`;
  }
});

// Handle slider movement
volumeControl.addEventListener("mousedown", function() {
  let currentValue = parseInt(volumeControl.value);
  
  document.addEventListener("mousemove", function() {
    let newValue = parseInt(volumeControl.value);
    if (newValue > currentValue + 3) {
      volumeControl.value = currentValue + 3;
      currentValue += 3;
      volumeLevel.textContent = `${currentValue}%`;
    } else if (newValue < currentValue - 5) {
      volumeControl.value = currentValue - 5;
      currentValue -= 5;
      volumeLevel.textContent = `${currentValue}%`;
    } else {
      currentValue = newValue;
    }
  });
});

// Stop slider movement on mouseup
document.addEventListener("mouseup", function() {
  document.removeEventListener("mousemove", function() {});
});
