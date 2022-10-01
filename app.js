const person =[
  {
    img : " marie.jpg",
    name: "Marie",
    job : "student",
    text:"HI, i love moon . i believe that the moon would crash on earth one day  then i would become a part of it"
  },
  {
    img : " afsal.jpg",
    name: "Afsal",
    job : "footballer",
    text:"fools are those who says messi is better than ronaldo , even though ronaldo is better i love neymar and want to play like him"
  },
  {
    img : " ashiq.jpg",
    name: "ashiq",
    job : "Fullstack dev",
    text:"Html is the best ever programming language , you  know if you know 😏🤙🏾"
  },
  {
    img : " img1.jpg",
    name: "madhavan",
    job : "philosopher",
    text:"if one man trash is another man's treasure , then humanity is not a trash"
  },
  {
    img : " jas.png",
    name: "jasmine",
    job : "teacher",
    text:"If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people"
  },
  {
    img : " asraf.jpg",
    name: "Asraf",
    job : "student",
    text:"my cousin is a legend!!"
  },
  {
    img : " me.jpg",
    name: "Ahamed sha",
    job : "weirdo",
    text:"want to hear a joke? you should if you dont even want to . what's the worstest thing I've ever seen in my life ? , my life 😆🙂🙃🥲"
  },
  {
    img : " sam.jpg",
    name: "sam",
    job : "artist",
    text:"hit on a 4-inch wall!!"
  },
  {
    img : "baka.jpg",
    name: "robin",
    job : "game dev",
    text:"don't depend on others make your own way and ride"
  }
];

const prevButton = document.querySelector("#prev");

const nextButton = document.querySelector("#next");

const images = document.querySelector("#photo");

const nameOfPerson = document.querySelector("#name");

const personJob = document.querySelector("#job");

const personQoute = document.querySelector("#text");

let i =0;


nextButton.addEventListener("click",()=>{
// if (i<person.length-1){i++;}
// else{i=0;}
 i = (i<person.length-1)?i+1:i=0;
  let item = person[i];
  images.src = item.img;
  nameOfPerson.textContent = item.name;
  
  personJob.textContent = item.job;
  
  personQoute.textContent = item.text;
  
});
prevButton.addEventListener("click",()=>{
// if (i<person.length-1){i++;}
// else{i=0;}
 i = (i>0)?i-1:i=person.length-1;
  let item = person[i];
  images.src = item.img;
  nameOfPerson.textContent = item.name;
  
  personJob.textContent = item.job;
  
  personQoute.textContent = item.text;
  
});