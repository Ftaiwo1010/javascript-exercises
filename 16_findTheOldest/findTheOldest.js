const findTheOldest = function(people) {
    //   const currentYear = new Date().getFullYear();

    //   const getAge = (birth, death) => {
    //      if (!death) {
    //          death = currentYear;
    //      }   

    //      return death - birth;
    //   };

    //   return people.reduce((oldest, person) => {
    //      const oldestAge = getAge(
    //         oldest.yearOfBirth,
    //         oldest.yearOfDeath
    //      );

    //      const currentPersonAge = getAge(
    //         person.yearOfBirth,
    //         person.yearOfDeath
    //      );

    //      return oldestAge > currentPersonAge ? oldest : person;

    //   });

    // shorter version
     const currentYear = new Date().getFullYear();

     return people.reduce((oldest, person) => {
    
     const oldestYearDeath = oldest.yearOfDeath ?? currentYear;
     const oldestAge = oldestYearDeath - oldest.yearOfBirth;

     const personYearDeath = person.yearOfDeath ?? currentYear;
     const currentPersonAge = personYearDeath - person.yearOfBirth;

     return oldestAge > currentPersonAge ? oldest : person;

   });

};

// Do not edit below this line
module.exports = findTheOldest;
