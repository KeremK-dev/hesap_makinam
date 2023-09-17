let i1  = document.getElementById("i1")
let i2 = document.getElementById("i2")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let h2 = document.getElementById("h2")
let tem = document.getElementById("tem")
let kyt = document.getElementById("kyt")
let l_sil = document.getElementById("l_sil")
let l_div = document.getElementById("l_div")
let ul = document.getElementById("l")
let dizi = []
tem.onclick=()=>{
    h2.textContent = ''
}

b1.onclick=()=>{
    let v1 = parseInt(i1.value)
    let v2 = parseInt(i2.value)
    i1.value = ''
    i2.value = ''
    h2.textContent = v1 + v2
}

b2.onclick=()=>{
    let v1 = parseInt(i1.value)
    let v2 = parseInt(i2.value)
    i1.value = ''
    i2.value = ''
    h2.textContent = v1 - v2
}
b3.onclick=()=>{
    let v1 = parseInt(i1.value)
    let v2 = parseInt(i2.value)
    i1.value = ''
    i2.value = ''
    h2.textContent = v1 * v2
}

b4.onclick=()=>{
    let v1 = parseInt(i1.value)
    let v2 = parseInt(i2.value)
    i1.value = ''
    i2.value = ''
    h2.textContent = v1 / v2
}

kyt.onclick=()=>{
    let li = document.createElement("li")
    li.textContent = h2.textContent
    l_div.appendChild(li)
    h2.textContent=''
    kayit()
}
window.onload=()=>{
    let kumo = JSON.parse(window.localStorage.getItem("kumoo"))
    if(kumo){
        dizi = kumo
    for (let k = 0; k < kumo.length; k++) {
        let li = document.createElement("li")
        li.textContent = kumo[k]
        l_div.appendChild(li)
    }
    }
}
    
l_sil.onclick=()=>{
    l_div.textContent=''
    window.localStorage.removeItem("kumoo")
}

function kayit(){
    let liler = document.getElementsByTagName("li")
    dizi.push(liler[liler.length-1].textContent)
    window.localStorage.setItem("kumoo", JSON.stringify(dizi))
    
}