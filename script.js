let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listItem = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');

let timeRunning = 2000;
let timeAutoNext = 155000;
let runTimeOut;
let runAutoRun = setTimeout(()=> {
    nextBtn.click();
}, timeAutoNext);;


nextBtn.onclick = function() {
    showSlider('next');
}

prevBtn.onclick = function(){
    showSlider('prev');
}

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next') {
        listItem.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        carousel.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[positionLastItem]);
        thumbnail.prepend(itemThumbnail[positionLastItem]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning)

    clearInterval(runAutoRun);
    runAutoRun =setTimeout(()=> {
        nextBtn.click();
    }, timeAutoNext);
}


// MAP
// Функция для инициализации карты
function initMap() {
    const center = [53.902735, 27.555691];
    const map = new ymaps.Map('map', {
        center: center, 
        zoom: 6,
    });

    // Массив с координатами
    const markers = [
        { coords: [52.574227, 23.804779], title: "Belovezhskaya Pushcha" },
        { coords: [54.747713, 28.312632], title: "Berezinsky Nature Reserve" },
        { coords: [54.909583, 26.706681], title: "Narochansky National Park" },
        { coords: [55.639491, 27.031618], title: "Braslav Lakes" },
        { coords: [54.022159, 26.596853], title: "Nalibokskaya Pushcha" },
        { coords: [51.652087, 29.996670], title: "Polesie State Radiation Reserve" }
    ];

    // Добавляем маркеры на карту
    markers.forEach(marker => {
        const placemark = new ymaps.Placemark(
            marker.coords, 
            { hintContent: marker.title }, 
            { preset: 'islands#blueDotIcon' }
        );
        map.geoObjects.add(placemark);
    });
}

ymaps.ready(initMap);








