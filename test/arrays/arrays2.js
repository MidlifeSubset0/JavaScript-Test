// var officers = [
//     { id: 20, name: 'Captain Piett' },
//     { id: 23, name: 'General Veers' },
//     { id: 56, name: 'Admiral Ozzel' },
//     { id: 88, name: 'Commander Jerjerrod' }
//   ];

// var officersNames = officers.map(function(officer){
//     if(officer.id = officer.id%2 === 0) {
//         return officer.name
//     } else {
//         return ""
//     }
// });

// console.log(officersNames)

// var pilots = [
//     {
//       id: 10,
//       name: "Poe Dameron",
//       years: 14,
//     },
//     {
//       id: 2,
//       name: "Temmin 'Snap' Wexley",
//       years: 30,
//     },
//     {
//       id: 41,
//       name: "Tallissan Lintra",
//       years: 16,
//     },
//     {
//       id: 99,
//       name: "Ello Asty",
//       years: 22,
//     }
//   ];

//   var ids = pilots.filter(function(pilot){
//       if(pilot.id = (pilot.id%2 == 0)){
//           return pilot.id;
//       } else {

//       }
//   })
//   console.log(ids)

// var pilots = [
//     {
//       id: 2,
//       name: "Wedge Antilles",
//       faction: "Rebels",
//     },
//     {
//       id: 8,
//       name: "Ciena Ree",
//       faction: "Empire",
//     },
//     {
//       id: 40,
//       name: "Iden Versio",
//       faction: "Empire",
//     },
//     {
//       id: 65,
//       name: "Thane Kyrell",
//       faction: "Rebels",
//     }
//   ];

//   var rebels = pilots.filter(function(pilot){
//     return pilot.faction === "Rebels";
//   })
//   console.log(rebels)

var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
      gender: "Male",
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
      gender: "Female",
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
      gender: "Male",
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
      gender: "Male",
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
      gender: "Male"
    },
    {
        id: 69,
        name: "Han Solo",
        pilotingScore: 99,
        shootingScore: 99,
        isForceUser: false,
        gender: "Male",
    }
  ];

//   var Gender = personnel.filter(function(person){
//       return person.gender === 'Male';
//   });

// //   console.log(Gender)

// var jedi = Gender.filter(function(force){
//     return force.isForceUser === true;
// });

// // console.log(jedi)

// var scores = jedi.map(function(score){
//     return score.pilotingScore + score.shootingScore;
// });

// // console.log(scores)

// var totalScore = scores.reduce(function(acc, total){
//     return acc + total;
// });

// // console.log(totalScore)

exports.totalJediScores = personnel
  .filter(function(person){
      return person.gender === 'Male';
  })
  .filter(function(force){
      return force.isForceUser === true;
  })
  .map(function(score){
      return score.pilotingScore + score.shootingScore;
  })
  .reduce(function(acc, total){
      return acc + total;
  },0);

  //console.log(totalJediScores)