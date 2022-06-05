import React, {useState} from "react"

const initialNewReview = {
    body: "",
    title: "",
    author: "",
    movie_id: "movie_id"
}

function Submit({setArray}){
    
    const [review, setReview] = useState(initialNewReview)

    function handleChange(e){
           setReview((currentNewReview) => ({
               ...currentNewReview,
               [e.target.name]: e.target.value
           }))
    }
 
     function handleSubmit(e){
         e.preventDefault()
       
         fetch("http://localhost:9292/reviews", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify(review)
         })
         .then(res => res.json())
         .then((data) => setArray((currentReviews) => [...currentReviews, data]))
         
        
     }
 
    return(
       <div className="results-container">
           <h2>Submit a review</h2>
           <form onSubmit={handleSubmit}>
               <input
               type="text"
               name="body"
               placeholder="review"
               value={review.body}
               onChange={handleChange}
               />
               <input
               type="text"
               name="title"
               placeholder="title"
               value={review.title}
               onChange={handleChange}
               />
               <input
               type="text"
               name="author"
               placeholder="author"
               value={review.author}
               onChange={handleChange}
               />
               <button className="create" type="submit">Add a Review</button>
               </form>
       </div>
    )
}

export default Submit