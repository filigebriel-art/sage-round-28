import "./Facilities.css"
export default function Facilities(){
    const facilities=[
     {
        title:"Free wiFi",
        description:"Fast internet in all rooms"
     },

     {title:"Swiming pool",
        description:"Clean and relaxing pool"
     },
     {
        title:"Restaurant",
        description:"Delicious food and drinks"
     },

     {
        title:"Fitness Center",
        description:"Modern gym equipment"
     }
      
    ]


    return(
    <section className="facilities">
        <h1>Our Facilities</h1>
        <div className="cards" >
            {
                facilities.map((item,index)=>(
            <div className="card"key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>

            </div>
            
                ))
}
        </div>



            

    </section>






    )
}