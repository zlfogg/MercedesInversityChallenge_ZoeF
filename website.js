function getSelectedOption() {
    const options = document.getElementsByName('option');
    let selectedOption = '';
  
    options.forEach(option => {
      if (option.checked) {
        selectedOption = option.value;
      }
    });
  }