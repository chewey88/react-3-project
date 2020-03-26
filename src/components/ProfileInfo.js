import React, {Component} from 'react'

function ProfileInfo(props){
    console.log(props)
    return(
        <div className='container-box'>
            <h1 className='first-last-name'>{props.currentPerson.name.first} {props.currentPerson.name.last}</h1>
            <h2 className='from-country'>From: {props.currentPerson.country} </h2>
            <h2 className='job-title'>Job Title: {props.currentPerson.title} </h2>
            <h2 className='employer'>Employer: {props.currentPerson.employer} </h2>
            <h2 className='favorite-movies'>Favorite Movies:
                <p>1. {props.currentPerson.favoriteMovies[0]}</p>
                <p>2. {props.currentPerson.favoriteMovies[1]}</p>
                <p>3. {props.currentPerson.favoriteMovies[2]}</p>
            </h2>
        </div>
    )
}
export default ProfileInfo