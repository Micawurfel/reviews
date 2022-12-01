const reviews = [
    {
        id: 1,
        name: "Gonzalo Lopez",
        job: "UX desaigner",
        opinion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: "media/avatar-1.png", 
    },
    {
        id: 2,
        name: "Rocio Martin",
        job: "Web developer",
        opinion: "Contrary to popular belief, Lorem Ipsum is not simply random text text text. It has roots in a piece of classical Latin literature from 45 BC",
        img: "media/avatar-2.png", 
    },
    {
        id: 3,
        name: "Marina Roque",
        job: "Project Manager",
        opinion: "The standard chunk of Lorem Ipsum used Lorem Ipsum used since the 1500s is reproduced below below for those interested.",
        img: "media/avatar-3.png",
    },
    {
        id: 4,
        name: "Juan Nacimiento",
        job: "Back end developer",
        opinion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        img: "media/avatar-4.png",
    },
    {
        id: 5,
        name: "Ricardo Nuestro",
        job: "Copywriter",
        opinion: "It is a long established fact that a reader will be distracted by the readable content of a page page when when looking at its layout",
        img: "media/avatar-5.png", 
    },
];

//select items
const img = document.getElementById("img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const opinion = document.getElementById("opinion");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

//set starting item
let currentItem = 0;

// load initial iteml
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
})

// show person 
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name; 
    job.textContent = item.job; 
    opinion.textContent = item.opinion; 
}

// show next person
nextBtn.onclick = () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
};

// show prev person
prevBtn.onclick = () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length -1
    };
    showPerson(currentItem);
};

