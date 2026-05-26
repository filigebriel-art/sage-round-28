export default function List(){
  const cars=["bmw","byd","toyota"]
    return<>
    
   <ul>
    {cars.map((cars,index)=>(
        <li key={index}>{cars}</li>
    ))}
   </ul>
    </>
}
