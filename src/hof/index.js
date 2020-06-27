function getUsername() {
  return 'World'
}

// function hello() {
//   const username = getUsername()
//   console.log(`Hello, ${username}`)
// }
// function bye() {
//   const username = getUsername()
//   console.log(`Bye, ${username}`)
// }
// hello()
// bye()

// 高阶函数
function hello(username) {
  console.log(`Hello, ${username}!`)
}

function bye(username) {
  console.log(`Bye, ${username}~`)
}

// function wrapWithUsername(wrappedFunction) {
//   const tmpFunction = () => {
//     const username = getUsername()
//     wrappedFunction(username)
//   }
//   return tmpFunction
// }

// 简写
const wrapWithUsername = (wrappedFunction) => () => {
  const username = getUsername()
  wrappedFunction(username)
}

wrapWithUsername(hello)()
wrapWithUsername(bye)()
