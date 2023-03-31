document.querySelector(`.form-range`).addEventListener(`input`, (evt)=>{
    console.log(evt.target.value)
    document.querySelector(`.wai`)
    .src=`assets/${evt.target.value}.png`
})