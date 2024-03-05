
let images = [
    'pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg',
    'petr-sevcovic-e5Q5vWO55uU-unsplash.jpg',
    'kai-pilger-tL92LY152Sk-unsplash.jpg',
    'engin-akyurt-IJuze-KdTFk-unsplash.jpg',
    'engin-akyurt-a22DYPpfMqA-unsplash.jpg',
    'dan-burton-vm-cV-h28SM-unsplash.jpg',
];


let slideImg = document.querySelector('.imgs');

let count = 0;

function preSlide(){
    if(count <= 0)
    count = images.length;
    count--;
    return setImage();

}

function nextSlide(){
  if(count > images.length -1)
    count = -1;
    count++;
    
    return setImage();
  
}

function setImage(){
    return slideImg.setAttribute('src','./images/' + images[count]);
}

// drag function

const dropZone = document.getElementById('drop');
const draggableElements = document.querySelectorAll('.draggable');

draggableElements.forEach(element => {
    element.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', element.id);
    });
});

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});




dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    if (draggedElement) {
        const rightDiv = document.querySelector('.flex_right');
        const clonedElement = draggedElement.cloneNode(true);
        rightDiv.appendChild(clonedElement);
        clonedElement.setAttribute('contenteditable', 'true');
    }
    const logoImage = document.querySelector(".flex_right  #secondImg");

    logoImage.addEventListener("click", function() {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.style.display = "none";

        fileInput.addEventListener("change", function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const newImage = document.createElement("img");
                    newImage.src = e.target.result;
                    // console.log(e.target.result)
                    newImage.alt = "User Selected Image";
                    logoImage.parentNode.replaceChild(newImage, logoImage);
                };
                reader.readAsDataURL(file);
            }
        });
        fileInput.click();
    });
});








function Print(){
    // window.print();
   let leftBox = document.querySelector('.flex_left');
   leftBox.style.display = "none";
   
   let rightBox = document.querySelector('.flex_right');
   rightBox.style.width = "100%";

   let prints = document.querySelector('.btns')
   prints.style.display = 'none';
   window.print();

}



document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".lists li", {
      y: -50,
      opacity: 0,
      duration: 1.5,
      delay: 0.5, 
      stagger: 0.2 
    });
});








