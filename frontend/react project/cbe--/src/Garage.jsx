

export default function Garage(props){
    return<>
    {props.cars && <h1>ther are {props.cars.length} cars in the garage</h1>}
    
    </>
}