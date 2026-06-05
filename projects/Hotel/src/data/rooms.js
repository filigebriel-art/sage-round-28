import room1 from"../assets/room1.jpg";
import family from "../assets/family.jpg"
import luxury from "../assets/luxury.jpg"
import room from"../assets/room.jpg"
import room2 from"../assets/room2.jpg"
import room3 from"../assets/room3.jpg"


 const rooms=[
        {
            id:1,
            name:"Luxury Room",
            price:120,
            image:luxury,
            description:"A spacious luxury room with modern facilities."
        },
        {
            id:2,
            name:"VIP Suite",
            price:180,
            image:room2,
            description:"Premium suite with extra confort and services."
        },
        {
            id:3,
            name:"Standard Room",
            price: 80,
            image:room3,
            description:"Affordable and confortable room."

        },
        {
            id:4,
            name:"Family Room",
            price:150,
            image:family,
            description:"Perfect for families and groups."

        }
        
    ];
    export default rooms;