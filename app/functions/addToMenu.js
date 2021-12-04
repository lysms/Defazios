// // this is what we can use as a function to add items to the menu db

// const handleAddOrder = () => {
//   // fill in the name/title of the item
//   let name = "enter name here";
  
//   // fill in the cost of the item along with the description and category
//   // leave image as null
//   // leave time as 0
//   firebase.firestore().collection('menu').add(
//     {
//       category: "enter category it belongs to",
//       cost: 9,
//       desc: "enter description here, if there is no description, leave it as an empty string",
//       image: null,
//       name: name,
//       time: 0
//     }
//   )
  
//   console.log('request completed for ' + name);

// }


// firebase.firestore().collection('traffic').doc('3').set(
//   {
//     pickup: {
//       elevenToFour: {
//         pizza: [{min: 20,max: 30},{min: 30,max: 40},{min: 45,max: 60},{min: 60,max: 70}],
//         pasta: [{min: 20,max: 30},{min: 20,max: 30},{min: 30,max: 45},{min: 30,max: 45}]
//       },

//       fourToClose: {
//         pizza: [{min: 40,max: 60},{min: 40,max: 60},{min: 60,max: 80},{min: 60,max: 80}],
//         pasta: [{min: 20,max: 30},{min: 20,max: 30},{min: 30,max: 45},{min: 60,max: 75}]
//       }
//     },

//     delivery: {
//       elevenToFour: {
//         pizza: [{min: 60,max: 75},{min: 60,max: 75},{min: 60,max: 75},{min: 75,max: 90}],
//         pasta: [{min: 60,max: 75},{min: 60,max: 75},{min: 60,max: 75},{min: 75,max: 90}]
//       },

//       fourToClose: {
//         pizza: [{min: 60,max: 75},{min: 60,max: 75},{min: 60,max: 75},{min: 75,max: 90}],
//         pasta: [{min: 60,max: 75},{min: 60,max: 75},{min: 60,max: 75},{min: 75,max: 90}]
//       }
//     },
//     name: "Monday"
//   }
// )