


export default function Profile(props){

    return<>
    <h1>{props.name}</h1>
    <p>{props.job}</p>
    <h2>{props.hobby}</h2>
    <img  src={props.image} alt="image" width="200" />
    </>
}