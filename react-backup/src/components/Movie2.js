let Movie=()=>{
    let movie_Name="bahuballi"
    let rel_Date="Dc-16"
    let more_Details={
        dir_Name:'vishnu',
        "actor":"pk",
        "acters":"Samantha"

    }
    return<div>
        <h1>{movie_Name}</h1>
        <h2>Release Date:{rel_Date}</h2>
        <h3>dir_Name:{more_Details.dir_Name}</h3>
        <h3>acters:{more_Details.acters}</h3>
        <h3>actor:{more_Details.actor}</h3>
    </div>
}
export default Movie