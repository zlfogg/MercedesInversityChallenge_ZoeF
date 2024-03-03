function getSelectedOption() {
    const options = document.getElementsByName('option');
    let selectedOption = '';
  
    options.forEach(option => {
      if (option.checked) {
        selectedOption = option.value;
      }
    });
  }

  let lapsRemaining = 0;

function setLapsRemaining() {
  const lapsInput = document.getElementById('lapsInput').value;
  
  if (lapsInput !== '' && parseInt(lapsInput) > 0) {
    lapsRemaining = parseInt(lapsInput);
  } else {
    alert('Please enter a valid number of laps (above 0).');
  }
}

let laptime = 0;

//function setLapTime() {
  //const optionSoft = document.getElementById('option1');
  //const optionMed = document.getElementById('option2');
  //const optionHard = document.getElementById('option3');

  //if (optionSoft.checked) {
    //laptime = 90;
    //alert(`Lap time set to: ${laptime}`);
  //} else if (optionMed.checked) {
    //laptime = 92;
    //alert(`set to: ${laptime}`);
  //} else if (optionHard.checked) {
    //laptime = 95;
    //alert(`set to ${laptime}`);
  //}
//}
//

const optionSoft = document.getElementById('option1');
const optionMed = document.getElementById('option2');
const optionHard = document.getElementById('option3');

optionSoft.addEventListener('change', function() {
    if (this.checked) {
      setLapTime(90);
    }
  });
  
optionMed.addEventListener('change', function() {
    if (this.checked) {
      setLapTime(92);
    }
  });

optionHard.addEventListener('change', function() {
    if (this.checked) {
      setLapTime(95);
    }
  });

function setLapTime(laptime) {
    alert(`Lap time set to: ${laptime}`);
}