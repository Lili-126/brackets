// let stack = []
// let brackets = {
//  ')': '(',
//  ']': '[',
//  '}': '{',
//  '|': '|',
//  '1': '1',
//  '2': '2',
//  '3': '3',
//  '4': '4',
//  '5': '5',
//  '6': '6',
//  '7': '7',
//  '8': '8'
// }
// for (let i = 0; i < str.length; i++) {
//  const current = str
//  let topSymbol = stack[stack.length -1]

//  if (openBrackets.includes(current)) {
//         stack.push(current)
//       } 
//  if (isClosedBracket(current) === topSymbol) {
//    stack.pop()
//  } else {
//   return false
//  }
// }
// return stack.length === 0

// }

// function isClosedBracket(symbol) {
//       return [')', ']', '}', '|', '1', '2', '3', '4', '5', '6', '7', '8']
//          }

module.exports = function check(str, bracketsConfig) {
  let stack = []
         let brackets = {
          ')': '(',
          ']': '[',
          '}': '{',
          '|': '|',
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
          '6': '6',
          '7': '7',
          '8': '8'
         }

        for (let i = 0; i < str.length; i++) {
          const current = str
  
          if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) return false
          } else {
            stack.push(current)
          }
        }
        return stack.length === 0
  
       }
       function isClosedBracket(symbol) {
               return [')', ']', '}', '|', '1', '2', '3', '4', '5', '6', '7', '8']
       }


 
 




        //    let stack = []
        //    let brackets = {
        //     ')': '(',
        //     ']': '[',
        //     '}': '{',
        //     '|': '|',
        //     '1': '1',
        //     '2': '2',
        //     '3': '3',
        //     '4': '4',
        //     '5': '5',
        //     '6': '6',
        //     '7': '7',
        //     '8': '8'
        //    }
        //   for (let i = 0; i < str.length; i++) {
        //     const current = str
         
        //     if (isClosedBracket(current)) {
        //       if (brackets[current] !== stack.pop()) return false
        //     } else {
        //       stack.push(current)
        //     }
        //   }
        //   return stack.length === 0
         
        //  }
        //  function isClosedBracket(symbol) {
        //          return [')', ']', '}', '|', '1', '2', '3', '4', '5', '6', '7', '8']
        //             }




// let openBrackets = ['(', '[', '{', '|', '1', '2', '3', '4', '5', '6', '7', '8']
// let brackets = {
//        ')': '(',
//        ']': '[',
//        '}': '{',
//        '|': '|',
//        '1': '1',
//        '2': '2',
//        '3': '3',
//        '4': '4',
//        '5': '5',
//        '6': '6',
//        '7': '7',
//        '8': '8'
//      }
//      let stack = []

//      for (let i = 0; i < str.length; i++) {
//      const current = str
//      if (openBrackets.includes(current)) {
//       stack.push(current)
//      } else {
//       if (stack.length === 0) {
//         return false
//       }
//       let topSymbol = stack[stack.length -1]
//       if (brackets[current] === topSymbol) {
//         stack.pop()
//       } else {
//         return false
//       }
//      }
//      }
//      return stack.length === 0




//     function isClosedBracket(symbol) {
//       return [')', ']', '}', '|', '1', '2', '3', '4', '5', '6', '7', '8']
//     }

// let brackets = {
//   ')' : '(',
//   ']' : '[',
//   '}' : '{',
//   '|' : '|',
//   '1' : '1',
//   '2' : '2',
//   '3' : '3',
//   '4' : '4',
//   '5' : '5',
//   '6' : '6',
//   '7' : '7',
//   '8' : '8'
// }

// return [')', ']', '}', '|', '1', '2', '3', '4', '5', '6', '7', '8']

//  for (let i = 0; i < bracketsConfig.length; i++) {
  // const current = bracketsConfig
  // if (isClosedBracket(current)) {
  //   if (brackets[current] !== stack.pop()) return false
  // }else {
  //   stack.push(current)
  // }
  // }
  // return stack.length === 0

//   let stack = []
// let brackets = bracketsConfig

// for (let i = 0; i < str.length; i++) {
//   const current = str
//   if (isClosedBracket(current)) {
//     if (brackets[current] !== stack.pop()) return false
//   }else {
//     stack.push(current)
//   }
//   }
//   return stack.length === 0

// /

// function isClosedBracket(symbol) {
//   return bracketsConfig
// }