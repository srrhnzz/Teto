console.log('Hello World!');
document.addEventListener('DOMContentLoaded', () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  let phoneBrand = "Unknown";
  let androidVersion = "Unknown";
  let iOSVersion = "Unknown";

  if (/android/i.test(userAgent)) {
    phoneBrand = userAgent.match(/(Samsung|Huawei|Honor|Google|OnePlus|Oppo|Realme|Vivo|Xiaomi|Redmi|Poco|LG|Sony|Motorola|Nokia|HTC|Asus|Lenovo|ZTE|Meizu)/i)[0] || "a Trash phone";
    androidVersion = userAgent.match(/Android\s([0-9\.]+)/) ? userAgent.match(/Android\s([0-9\.]+)/)[1] : "Android 69";
  } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
    phoneBrand = "Apple";
    iOSVersion = userAgent.match(/OS\s([0-9_]+)/) ? userAgent.match(/OS\s([0-9_]+)/)[1].replace("_", ".") : "iOS 69";
  }

  console.log(`Phone brand: ${phoneBrand}`);
  console.log(`Android version: ${androidVersion}`);
  console.log(`iOS version: ${iOSVersion}`);

  document.getElementById('Brand').innerText = `${phoneBrand}`;
  document.getElementById('Version').innerText = `Android Version ${androidVersion}`;
  document.getElementById('IVersion').innerText = `iOS Version ${iOSVersion}`;
});
function changeBackground() {
  document.body.style.backgroundImage = 'url("lol.png")';
  const noteSequence = [1, 1, -3, -2, -1, -2, -3, -4, -4, -2, 1, -1, -2, -3, -2, -1, 1, -2, -4, -4, -1, 2, 4, 3, 2, 1, -2, 1, -1, -2, -3, -3, -2, -1, 1, -2, -4, -4];
  const soundFiles = [
    '1.mp3', // E5
    '2.mp3', // B4
    '3.mp3', // C4
    '4.mp3', // D4
    '-1.mp3', // E4
    '-2.mp3', // C4
    '-3.mp3', // B4
    '-4.mp3', // A4
  ];
  var pitchIndex = changeBackground.pitchIndex || 0;
  
  var soundIndex;
  if (noteSequence[pitchIndex] > 0) {
    soundIndex = noteSequence[pitchIndex] - 1;
  } else {
    soundIndex = 3 + Math.abs(noteSequence[pitchIndex]);
  }
  
  var sound = new Audio(soundFiles[soundIndex]);
  sound.play();
  console.log("Playing note:", noteSequence[pitchIndex]);
  
  changeBackground.pitchIndex = (pitchIndex + 1) % noteSequence.length;
}

 function resetBackground() {
      document.body.style.backgroundImage = 'url("teto.png")';
    }