function Header(){
    return(
       <nav className="navbar">
           <h1>Movie App</h1>
           <div>
               <a href="/">Home</a>
               <a href="/Reviews">Reviews</a>
               <a href="/Submit">Submit</a>
           </div>
       </nav>
    )
}

export default Header