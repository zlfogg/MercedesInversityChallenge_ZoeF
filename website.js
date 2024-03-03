function getSelectedOption() {
    const options = document.getElementsByName('option');
    let selectedOption = '';
  
    options.forEach(option => {
      if (option.checked) {
        selectedOption = option.value;
      }
    });
  
    if (selectedOption !== '') {
      document.getElementById('result').innerText = `Selected Option: ${selectedOption}`;
    } else {
      document.getElementById('result').innerText = 'Please select an option.';
    }
  }