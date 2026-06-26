import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

export default function RoomDetails(){
    const{id}=useParams();

    const [room, setRoom]= useState(null)
    const [isBooked,setIsBooked] = useState(false)


    
    const [rating,setRating] = useState(5)
    const [comment,setComment] = useState("")
    const [reviews,setReviews] =useState([])



    const [editingReviewId,setEditingReviewId] = useState(null)
    const [editComment,setEditComment] = useState("")
    const [editRating,setEditRating] = useState(5)

    const currentUser =JSON.parse(
        localStorage.getItem("currentUser")
    )

  
  useEffect(()=>{
    if(!room)return

       fetch("http://localhost:5000/api/reviews")
       .then(res => res.json())
       .then(data => {
          
            const roomReviews = data.filter(
                 review => review.roomId === room?._id
            )
                
               setReviews(roomReviews)
       })
  },[room])



  
  
  
  async function submitReview(){

    

     if(!comment.trim()){
        alert("Please write a review")
        return
     }


     if(!currentUser){
          alert("Login first")
          return
     }

     const review = {
        
         roomId: room._id,
         userId: currentUser._id,
         userName:currentUser.name,
         rating,
         comment
     }

     const response = await fetch(
      "http://localhost:5000/api/reviews",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(review)
      }
     )

     const newReview = await response.json()

     setReviews([...reviews,newReview])
     setComment("")
     setRating(5)
     alert("Review submitted successfully!")
  }



async function deleteReview(id){

    const confirmDelete = window.confirm(
        "Delete this review?"
    )

    if(!confirmDelete) return

    try{

        await fetch(
            `http://localhost:5000/api/reviews/${id}`,
            {
                method:"DELETE"
            }
        )

        setReviews(
            reviews.filter(
                review => review._id !== id
            )
        )

    }catch(error){
        console.log(error)
    }
}
  


function startEdit(review){

    setEditingReviewId(review._id)
    setEditComment(review.comment)
    setEditRating(review.rating)

}


    useEffect(()=>{

        fetch(`http://localhost:5000/api/rooms/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Rooms:, data")
                setRoom(data)

               
            })
            .catch(err => console.log(err))
            
    },[id])

   



   

     if (!room){
        return <h2>Loading...</h2>
    }




    async function updateReview() {
  try {
    const response = await fetch(
      `http://localhost:5000/api/reviews/${editingReviewId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          rating: editRating,
          comment: editComment
        })
      }
    )

    const updatedReview = await response.json()

    setReviews(
      reviews.map(review =>
        review._id === editingReviewId
          ? updatedReview
          : review
      )
    )

    setEditingReviewId(null)
    setEditComment("")
    setEditRating(5)

    alert("Review updated successfully")
  } catch (error) {
    console.log(error)
  }
}


    return (
        <div>

            <h1>{room.name || room.roomName}</h1>
            {room.image && (
                <img
                    src={room.image}
                    alt={room.name || room.roomName}
                    width="400"/>
            )}


            <p>{room.description}</p>

            <h2>${room.price}/Night</h2>

           


                 <Link to={`/book/${room._id}`}>
                 
                 <button >Book Now</button>
            </Link>

            




                       
            <hr />
            <h2>Reviews</h2>
            <select 
                value={rating}
                onChange={(e)=>setRating(Number(e.target.value))}>
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
                <br /><br />


                <textarea
                   placeholder="Write a review..."
                   value={comment}
                   onChange={(e)=>setComment(e.target.value)}/>
                        <br /><br />
                
                <button onClick={submitReview}>
                    Submit Review
                </button>



                 {reviews.length === 0 && (
                      <p>No reviews yet</p>
                 )}

                {reviews.map(review => (
                    <div key={review._id}  style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0"}}>
                        <h4>{review.userName}</h4>
                        <p>{"⭐".repeat(review.rating)}</p>
                        <p>{review.comment}</p>

                         {currentUser && review.userId === currentUser._id && (
                    <>

                    <button onClick={()=> startEdit(review)}>Edit Review</button>


                    <button  onClick={()=>deleteReview(review._id)}>Delete</button>
                    
                    </>
                )}
                    </div>
                ))}

                {editingReviewId && (
  <div  style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}>
    <h3>Edit Review</h3>

    <select
      value={editRating}
      onChange={(e) => setEditRating(Number(e.target.value))}
    >
      <option value="1">⭐</option>
      <option value="2">⭐⭐</option>
      <option value="3">⭐⭐⭐</option>
      <option value="4">⭐⭐⭐⭐</option>
      <option value="5">⭐⭐⭐⭐⭐</option>
    </select>

    <br /><br />

    <textarea
      value={editComment}
      onChange={(e) => setEditComment(e.target.value)}
    />

    <br /><br />

    <button onClick={updateReview}>
      Save Changes
    </button>

             <button 
                        onClick={() => {
                            setEditingReviewId(null);
                            setEditComment("");
                            setEditRating(5);
                        }}
                        style={{ marginLeft: "10px" }}
                    >
                        Cancel
                    </button>
  </div>
)}

               


        </div>
    )


   
}