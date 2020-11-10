import {v4 as uuidv4} from 'uuid';

const chillHop = () => ([
    {
        name: "Daylight",
        artist: "Aiguille",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-300x300.jpg",
        id: uuidv4(),
        active: true,
        color: ["#EE839F", "#6E5EA9"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9272"
    },
    {
        name: "Witch Hat",
        artist: "Sleepy Fish",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg",
        id: uuidv4(),
        active: false,
        color: ["#2A3054", "#3199B6"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10017"
    },
    {
        name: "Happy Place",
        artist: "Philanthrope, Sitting Duck, squeeda",
        cover: "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-300x300.jpg",
        id: uuidv4(),
        active: false,
        color: ["#532E26", "#6D7E5E"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9781"
    },
    {
        name: "Caffeine",
        artist: "Blue Wednesday, Felty",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-300x300.jpg",
        id: uuidv4(),
        active: false,
        color: ["#174E84", "#1A74B3"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9334"
    },
    
]);

export default chillHop;