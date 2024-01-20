function validatePIN(pin) {
    // Use a regular expression to check if the PIN is either 4 or 6 digits
    var regex = /^[0-9]{4}$|^[0-9]{6}$/;
    
    // Test the PIN against the regular expression
    return regex.test(pin);
  }
  
  // Examples
  console.log(validatePIN("1234"));    
  console.log(validatePIN("123245"));  
  console.log(validatePIN("a234"));    
  