let gallery = [
    {
        id:1,
        category: "Nature",
        img: "./item-1.jpg",
        author: "Daniel Armstrong",
        date: "14.06.2021"
    },
    {
        id:2,
        category: "Movies",
        img: "./item-2.jpg",
        author: "Marko Johnson",
        date: "11.02.2022"
    },
    {
        id:3,
        category: "Musics",
        img: "./item-3.jpg",
        author: "Nenn Arrison",
        date: "26.05.2020"
    },
    {
        id:4,
        category: "Sports",
        img: "./item-4.jpg",
        author: "Marc Williams",
        date: "14.09.2011"
    },
    {
        id:5,
        category: "Movies",
        img: "./item-5.jpg",
        author: "Ann Richarson",
        date: "01.04.2016"
    },
    {
        id:6,
        category: "Sports",
        img: "./item-6.jpg",
        author: "Joe Johnson",
        date: "05.12.2015"
    },
    {
        id:7,
        category: "Nature",
        img: "./item-7.jpg",
        author: "Elena Walker",
        date: "22.01.2012"
    },
    {
        id:8,
        category: "Musics",
        img: "./item-8.jpg",
        author: "Pitter Anderson",
        date: "02.02.2017"
    },
    {
        id:9,
        category: "Sports",
        img: "./item-9.jpg",
        author: "Ketrin Olmo",
        date: "25.10.2018"
    },
    {
        id:10,
        category: "Muiscs",
        img: "./item-10.jpg",
        author: "Elon Campbell",
        date: "04.03.1998"
    }
];

let galleryDisplay = document.querySelector("#galleryDisplay");


window.addEventListener("DOMContentLoaded", () => {
    galleryDisplayItems();
});


function galleryDisplayItems() {
    let galleryItems = gallery.map((item) => {
        return `<div class="col-md-5">
        <div class="gallery">
            <h6 class="text-center">${item.category}</h6>
            <div class="gallery-img">
                <img src="${item.img}" class="img-fluid" alt="img">
            </div>
            <div class="gallery-footer">
                <span>Photo by : <strong>${item.author} ${item.date}</strong></span>
            </div>
        </div>
    </div>`;
    });
    galleryItems = galleryItems.join("");
    galleryDisplay.innerHTML = galleryItems;
}
