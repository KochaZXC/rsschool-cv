// const quarterOf = (month) => {
//     if(month <= 3 && month >= 1) {
//       return 1;
//     } else if (month <= 6 && month >= 4) {
//       return 2;
//     } else if (month <= 9 && month >= 7) {
//       return 3;
//     } else if (month <= 12 && month >= 10) {
//       return 4;
//     }
//   }

// let word = 'example';

// function capitalizeWord(word) {
//     let wordUpper = '';
//     for (let i = 0; i < word.length; i++) {
//         if (i === 0) {
//             wordUpper += word[i].toUpperCase();
//         } else {
//             wordUpper += word[i];
//         }
//     }
//     return wordUpper;
// }

// console.log(capitalizeWord(word));

// function toBinary(n){

//     return n;
//   }

//   console.log(toBinary(3));

let r = 15;

function areaLargestSquare(r) { 
    console.log((r * r) * 2);
  }

  areaLargestSquare(r);


  console.log(parseInt('qwe' / 2));



  function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) {
      return 100;
    } else if (exam > 75 || projects >= 5) {
      return 90
    } else if (exam > 50 || projects >= 2) {
      return 75;
    } else if (exam < 50 || projects < 2){
      return 0;
    }
  }

  console.log(finalGrade(20, 2));