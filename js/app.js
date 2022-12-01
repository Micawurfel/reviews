const reviews = [
    {
        id: 1,
        name: "Gonzalo Lopez",
        job: "UX desaigner",
        opinion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: 'https://flyclipart.com/thumbs/circle-headshot-gentleman-951053.png', 
    },
    {
        id: 2,
        name: "Rocio Martin",
        job: "Web developer",
        opinion: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        img: 'https://img2.freepng.es/20180713/qke/kisspng-janella-salvador-model-portrait-photography-cheek-round-face-5b494410392d42.1956755215315282082342.jpg', 
    },
    {
        id: 3,
        name: "Marina Roque",
        job: "Project Manager",
        opinion: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
        img: 'https://img2.freepng.es/20180713/sar/kisspng-business-marketing-strategy-round-face-5b49440a1d17c1.6701917115315282021192.jpg', 
    },
    {
        id: 4,
        name: "Juan Nacimiento",
        job: "Back end developer",
        opinion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        img: 'https://img1.freepng.es/20180713/aaw/kisspng-user-profile-linkedin-netwerk-money-order-fulfillm-round-face-5b494408cd2468.5239235115315282008403.jpg', 
    },
    {
        id: 5,
        name: "Ricardo Nuestro",
        job: "Copywriter",
        opinion: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PzbGl7iOgbPb4IB5R9HWZX6dtTb2MqZxsHfIDYitTtuzl3IRUgxM8nglUA3U1-Pzac8&usqp=CAU', 
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

