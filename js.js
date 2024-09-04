
// Background Color change Function
function change(rgb, hex) {
    document.getElementById("bod").style.backgroundColor = rgb;
    disp1.innerHTML=rgb;
    disp2.innerHTML=hex;

    addCbox(rgb,hex);
}


let disp1 = document.getElementById('basic-addon1');
let disp2 = document.getElementById('basic-addon2');
let bodyBG=document.getElementById('bod');

// Function to generate Random color code
function ran() {

    let redd = Math.floor(Math.random() * 255);
    let bluee = Math.floor(Math.random() * 255);
    let greenn = Math.floor(Math.random() * 255);

        let r=`rgb(${redd},${bluee},${greenn})`;
        

        let z= `#${redd.toString(16).padStart(2, '0')}${bluee.toString(16).padStart(2, '0')}${greenn.toString(16).padStart(2, '0')}`;

        return {r,z};
        
        

}

function changeall(){
    const {r,z} = ran();
    bgColorChange(r,z);
    addCbox(r,z);
}

// backGround Color and display text-change change Function
function bgColorChange(r,z){
    disp1.innerHTML=r;
    disp2.innerHTML=z;
    bodyBG.style.backgroundColor=r;

}

// color BOX FUnction Starts

function addCbox(r,z){
    const newDiv= document.createElement('div');
    newDiv.classList.add('color-box');
    newDiv.style.backgroundColor=r;

    const rgb=document.createElement('h6');
    rgb.innerText=r;

    const hex=document.createElement('h6');
    hex.innerText=z;

    newDiv.appendChild(rgb);
    newDiv.appendChild(hex);


    // const container= document.getElementsByClassName('right-bar')[0];
    // container.insertBefore(newDiv, container.firstChild);
    document.getElementsByClassName('right-bar')[0].prepend(newDiv);
    newDiv.classList.remove('hidden');


// working code: reverse color box click

    // newDiv.addEventListener('click',()=>{
    //     bgColorChange(r,z);
    // })
}

// function for the toggle switch to change color automaticaly in fixed interval
let interval1, interval2;
function autoGen(type) {
    const auto = document.getElementById("toggle-1");
    const auto2 = document.getElementById("toggle-2");

 
    if(auto.checked){
        // interval1 = setInterval(ran(1), 400);
        interval1 = setInterval(()=> changeall(), 500);  
    }
    else {
        clearInterval(interval1);
    }

}

// copy function
function copy(n){
    if(n === 1){
        let rgb= disp1.innerText;
        navigator.clipboard.writeText(rgb);
    }
    else if(n === 2){
        navigator.clipboard.writeText(disp2.innerText);
    }
}

// color Box onclick function

let rightBar=document.querySelector('.right-bar');
rightBar.addEventListener('click',(event)=>{
let box=event.target.closest('.color-box');

if(box){
  const r = box.querySelector("h6:nth-child(1)").innerText;
  const z = box.querySelector("h6:nth-child(2)").innerText;
  bgColorChange(r, z);
  box.classList.toggle('clicked');
}



// clicked(1);

})

// function clicked(n){
//     if(n===1){
//         box.classList.add('clicked');
//     }
// }