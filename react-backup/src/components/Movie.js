import React from 'react'
class Movie extends React.Component{
    Movie_name="aarya"
    type=['2d','3d']
    more_details={
dir_name:"teja",
actor:"Rajini kanth",
actress:"nayana"

    }
    render(){
        return<>
        <h1>Movie Component</h1>
        <h2>Movie Name:{this.Movie_Name}</h2>
        <h3>Selected type:{this.type[0]}</h3>
        <button className='rahul'>Book Tickets</button>
        <ul>
            <li>crew:{this.more_details.dir_name}</li>
            <li>crew:{this.more_details.actor}</li>
            <li>crew:{this.more_details.actress}</li>
        </ul>
        </>
        
        
    }
    
    
}
export default Movie