
function Reviews({ author, renderArray, body, title})

{
   return(
       <div className="list-container">
           <ul className="watch">
               <h1>Community Reviews:</h1>
               <li>Title: {title}</li>
             <li> Review: {body}</li>
             <li>Author: {author}</li>
             <button onClick={handleDelete} >Delete</button>
           </ul>
          {renderArray}
       </div>
   )
}

function handleDelete(id){
   fetch(`http://localhost:9292/reviews/${id}`, {
       method: 'DELETE',
   }
   )
 
}
export default Reviews