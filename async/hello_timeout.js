const myTimeout = (sentence) => {
  let print = sentence.split(" ")
  let delay = 0
for (let word of print){
setTimeout(() => {console.log(word)}
,delay)
delay += 3000
  }

}

myTimeout("hi how are you")