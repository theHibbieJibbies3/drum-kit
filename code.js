
const howlers={
KeyA : new Howl({src: ['SNARE.wav']}),
KeyS : new Howl({src: ['KICK.wav']}),
KeyD : new Howl({src: ['HAT.wav']}),
KeyF : new Howl({src: ['RIDE.wav']}),
KeyG : new Howl({src: ['CRASH.wav']}),
KeyH : new Howl({src: ['TOM LOW.wav']}),
KeyJ : new Howl({src: ['TOM MID.wav']}),
KeyK : new Howl({src: ['TOM HIGH.wav']}),
KeyL : new Howl({src: ['TOM VERY HIGH.wav']})}


window.onload=() =>
{
    this.addEventListener("keypress",(a)=>{funkyPress(a)});
    let divs=document.querySelectorAll('.drum-kit >*');
    console.log(divs);
    divs.forEach(element => {
        element.addEventListener('transitionend',()=>{element.classList.remove('playing')});
        element.addEventListener('transitioncancel', ()=>{element.classList.remove('playing')})
    });

}



function funkyPress(k)
{
    
    howlers[k.code].play();
    let div=document.querySelector(`div [data-key="${k.code}"] `);
    div.classList.add('playing');
   

}
 