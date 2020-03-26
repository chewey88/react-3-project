import React, {Component} from 'react'
import data from '../data/data'
import ProfileInfo from "./ProfileInfo"

class PeopleBox extends Component {
    constructor(){
        super()

        this.state = {
            data: data,
            currentPerson: data[0],
            currentIndex: 0

        }
    }
    render(){
        return(
            <div>
                <ProfileInfo currentPerson = {this.state.currentPerson}/>
            </div>
        )
    }
}
export default PeopleBox

