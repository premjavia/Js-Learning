const name = "Prem"
const RepoCount = 2

//console.log(name + RepoCount + "Value")

console.log(`My name is ${name} and my Repo count is ${RepoCount}`)
console.log(`Hello`)

console.table([`My name is ${name}`, `My repo count is ${RepoCount}`])

const GameName = new String("PremJ")
console.log(GameName)

console.log(typeof(name))
console.log(typeof(GameName))
console.log(GameName[0])

console.log(GameName.toUpperCase())
console.log(GameName.charAt(2))

const url = "https://prem.com/Prem%20Javia"

console.log(url.replace("%20", "-"))