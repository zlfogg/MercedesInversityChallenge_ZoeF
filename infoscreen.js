//const urlParams = new URLSearchParams(window.location.search);
//  const baseLapTime = urlParams.get('baseLapTime');
//
//    if (laptime) {
//      document.write(`<p>Lap Time: ${baseLapTime}</p>`);
//      alert(`Lap time set to: ${baseLapTime}`);
//    } else {
//      document.write(`<p>Lap Time not set</p>`);
//    }

// window.addEventListener('load', () => {
//     const baseLapTime = localStorage.getItem('baseLapTime');
//     console.log(baseLapTime);
//   });
  
// document.getElementById("laptime").textContent = baseLapTime;

let laptime = localStorage.getItem("baseLapTime");
document.getElementById("laptime").innerHTML = laptime;