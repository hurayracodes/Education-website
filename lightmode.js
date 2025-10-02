let lightmode = localStorage.getItem('lightmode');
const toggleBtn = document.querySelector('.themChange');

const enableLightMode = () =>{
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode','active')
}

const disableLightMode =() =>{
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode',null)
}

if(lightmode === 'active')enableLightMode()

toggleBtn.addEventListener('click', () =>{
    lightmode = localStorage.getItem('lightmode')
if(lightmode != 'active'){
    enableLightMode()
}else{
    disableLightMode()
}
});