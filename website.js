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

let baseLapTime = 0;

const optionSoft = document.getElementById('option1');
const optionMed = document.getElementById('option2');
const optionHard = document.getElementById('option3');

optionSoft.addEventListener('change', function() {
    if (this.checked) {
      setBaseLapTime(90);
    }
  });
  
optionMed.addEventListener('change', function() {
    if (this.checked) {
      setBaseLapTime(92);
    }
  });

optionHard.addEventListener('change', function() {
    if (this.checked) {
      setBaseLapTime(95);
    }
  });

function setBaseLapTime(baseLapTime) {
    alert(`Lap time set to: ${baseLapTime}`);
    localStorage.setItem("baseLapTime",baseLapTime);
}

function openNewPage() {
    window.open('infoscreen.html', '_blank');
    window.location.href = `infoscreen.html?baseLapTime=${baseLapTime}`;
  }

//function openNewPage() {
//   window.open('newpage.html', '_blank');
//  }

// window.addEventListener('load', () => {
//     localStorage.setItem('baseLapTime', baseLapTime);
//   });

//localStorage.setItem("baseLapTime",baseLapTime);
