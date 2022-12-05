let Movie=()=>{
    let movie_details={
        movie_Name:"Avatar 2",
        dir_Name:"teja",
       "actor":"Dont Know",
       "acters":"rani"


    
    }
    return <div>
        <pre>{JSON.stringify(movie_details.movie_Name)}</pre>
        <h2>Movie Info</h2>
        <h3>Movie Name:{movie_details.dir_Name}</h3>

    </div>
}
export default Movie