console.clear()
let k = 0
let n = Math.trunc(Math.random())*12
let data = document.querySelector ("input")
function guess(){
  k++
  if (k==3){
    setTimeout(
      ()=>alert("You lose!"),
      1000
    )
    document.body.style.backgroundImage = "url(https://azteca.com.ua/wp-content/uploads/2020/05/igra-rukami.jpeg)"
  }
  else if(data.value==n){
    setTimeout(
      ()=>alert("Ви виграли"),
      1000
    )
    document.body.style.backgroundImage = "url(https://sportsvit.com.ua/sites/default/files/inline-images/82074565.jpg)"
  }
  else if(data.value<n){
    setTimeout(
      ()=>alert("Загадане число більше"),
      1000
    )
    document.body.style.backgroundImage = "url(data:image/jpeg;base64,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)"
  }
  else if(data.value>n){
    setTimeout(
      ()=>alert("Загадане число менше"),
      1000
    )
    document.body.style.backgroundImage = "url(https://daytoday.ua/wp-content/uploads/2021/02/Vseukrainskyy-Den-futbolu.jpg)"
  }
  console.log(n)
}