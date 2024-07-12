const reviews = [
    {
        id: 1,
        name: "David Lopez",
        job: "Backend Developer",
        img: "./Images/person-1.jpg",
        text: "I am a UX Designer and would like to craft something amazing that looks awsome to eyesight at every glimpse"

    },
    {
        id: 2,
        name: "Susan Smith",
        job: "Full Stack Developer",
        img: "./Images/person-2.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, molestiae molestias odit libero dolore ipsam exercitationem iusto. Labore id expedita, dolor, sint totam consequatur deserunt reprehenderit molestiae suscipit quos omnis?"

    },
    {
        id: 3,
        name: "Samantha Brookes",
        job: "UI/UX Desiner",
        img: "./Images/person-3.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, molestiae molestias odit libero dolore ipsam exercitationem iusto. Labore id expedita, dolor, sint totam consequatur deserunt reprehenderit molestiae suscipit quos omnis?"

    },
    {
        id: 4,
        name: "Naqeeb Asim",
        job: "Flutter Developer",
        img: "./Images/person-5.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, molestiae molestias odit libero dolore ipsam exercitationem iusto. Labore id expedita, dolor, sint totam consequatur deserunt reprehenderit molestiae suscipit quos omnis?"

    }
];

//select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem)
});

//show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}

// set next button
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem)
});

// set previous button for previous person review
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = Number(reviews.length - 1);
    }
    showPerson(currentItem)
})

// set random button for random person
randomBtn.addEventListener('click', function () {
    currentItem = Number(Math.floor(Math.random() * reviews.length))
    showPerson(currentItem)
})

