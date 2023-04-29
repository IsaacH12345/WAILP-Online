let controllerIndex = null;

window.addEventListener("gamepadconnected", (event) => {
  handleConnectDisconnect(event, true);
});

window.addEventListener("gamepaddisconnected", (event) => {
  handleConnectDisconnect(event, false);
});

const xBoxButtonB = gamepad.buttons[1]
if (xBoxButtonB.pressed) {
  doSomethingOnButtonPress();
}

const rAF = window.mozRequestAnimationFrame || window.requestAnimationFrame; 

window.addEventListener('gamepadconnected', function() {
  updateLoop();
}); 

function updateLoop() {
  // check button states
  rAF(updateLoop);
}

const focusableElements = document.querySelectorAll(
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

let current;

function updateLoop() {
  const gamepad = navigator.getGamepads()[0]
  const gamepadBumperL = gamepad.buttons[4]
  const gamepadBumperR = gamepad.buttons[5]
  
  if (gamepadBumperL.pressed) { prevItem(current) }
  if (gamepadBumperR.pressed) { nextItem(current) }
  
  setTimeout(() => rAF(updateLoop), 100)
}

function prevItem(index) {
  current = (index - 1) % focusableElements.length
  focusableElements[current].focus()
}

function nextItem(index) {
  current = (index + 1) % focusableElements.length
  focusableElements[current].focus()
}

clickItem(index)
  focusableElements[index].click();

gamepad.vibrationActuator.playEffect('dual-rumble', {
  startDelay: 0, // Add a delay in milliseconds
  duration: 1000, // Total duration in milliseconds
  weakMagnitude: 0.5, // intensity (0-1) of the small ERM 
  strongMagnitude: 1 // intesity (0-1) of the bigger ERM
});