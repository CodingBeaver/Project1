const image=document.getElementById("currentimage");
const container=document.getElementById("open-img");
const bg= document.getElementById("modul-background");

const images = document.querySelectorAll('.gallery-item');
const imagesSrc=[];
images.forEach(item=>{
  imagesSrc.push(item.src);
});
images.forEach(item => {
  item.addEventListener('click', event => {
    handleImgClick(event);
  })
})
bg.addEventListener("click",event=>{
    if(event.target.id==="modul-background"){
        document.getElementById("background").style.filter="blur(0)";
        container.classList.remove("open");
        bg.classList.remove("open");
    }return;
})
const handleImgClick=(event)=>{

    let imgSrc=event.target.src;
  image.src=imgSrc;
  console.log(image.src);
  container.classList.add("open");
  bg.classList.add("open");
  document.getElementById("background").style.filter="blur(20px)";
 }

document.getElementById("leftarrow").addEventListener("click", event=>{
  let currentIndex=imagesSrc.indexOf(image.src);
  let newIndex=currentIndex-1;
  if(newIndex < 0 )
  {newIndex=imagesSrc.length-1;
   };
  console.log(newIndex);
  image.src=imagesSrc[newIndex];
  
})
document.getElementById("rightarrow").addEventListener("click", event=>{
  let currentIndex=imagesSrc.indexOf(image.src);
  console.log(currentIndex)
  let newIndex=currentIndex+1;
  if(currentIndex >= imagesSrc.length-1 )
  {newIndex=0;
  }
  image.src=imagesSrc[newIndex];
  
})