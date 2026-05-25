export default function List(){
    const cars=["Bmw","Byd","Toyota"]
    return <>
       <ul>
        {cars.map((car,index)=>(
            <li key={index}>{car}
                
            </li>
        ))}
       </ul>
    
    </>

}