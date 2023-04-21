let adviceText = document.querySelector(".advice__text")
let adviceId = document.querySelector("#advice__id")
const button = document.querySelector
(".button")

async function getAdvice(){
    try {
       const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      const result =data.slip
       console.log(result)

       const id = result.id
       const advice = result.advice

       adviceText.innerHTML = advice
       adviceId.innerHTML = "#" +id

        
    } catch (er){
        console.log(e)
        
    }
}
getAdvice()

button.addEventListener("click",getAdvice)