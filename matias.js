function btnsOpen(){
    const over = document.querySelector(".demo-show")
    over.classList.add("show")
    over.classList.remove("hidden")
    console.log(over)
}
function btnsClose(){
    const over =  document.querySelector(".demo-show")
    over.classList.remove("show")
    console.log(over)
}