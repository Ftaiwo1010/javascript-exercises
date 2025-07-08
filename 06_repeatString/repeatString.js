const repeatString = function (str, times) {
   let string = "";
   if (times < 0) return 'ERROR';
   for (let i = 0; i < times; i++) {
      string += str;
   }

   return string;
};

// Do not edit below this line
module.exports = repeatString;
