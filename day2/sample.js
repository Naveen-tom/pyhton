function getnewcolor()
{
    const r = Math.floor(Math.random() * 100) + 100;
    const g = Math.floor(Math.random() * 100) + 100;
    const b = Math.floor(Math.random() * 100) + 100;
    return `rgb(${r}, ${g}, ${b})`;
}

let change = document.getElementById("change");
change.addEventListener("click", function(){
    const newcolor = getnewcolor()
    document.body.style.backgroundColor = newcolor
    setInterval(getnewcolor, 200)
})