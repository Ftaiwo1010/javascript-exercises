const palindromes = function (str) {
   // Normalize the string: lowercase, remove all non-alphanumeric characters
  const cleaned = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ''); // only letters and digits

  // Compare the cleaned string with its reverse
  const reversed = cleaned.split('').reverse().join('');
  
  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
