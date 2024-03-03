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