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
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
    }

    handleNext(){
        if(this.state.currentIndex != data.length - 1){
            this.setState({
                currentPerson: data[this.state.currentIndex + 1],
                currentIndex: this.state.currentIndex + 1
            
            })
        } else {
            this.setState({
                currentPerson: data[0],
                currentIndex: 0
            })
        }
    }

    handlePrevious(){
        if(this.state.currentIndex === data.length - data.length ){
            this.setState({
                currentPerson: data[24],
                currentIndex: 24
            })

        } else {
            this.setState({
                currentPerson: data[this.state.currentIndex - 1],
                currentIndex: this.state.currentIndex - 1
                
            })
        }
    }
    
    render(){
        return(
            <div className='prev-next-buttons'>
                <ProfileInfo currentPerson = {this.state.currentPerson}/>
                <button 
                className='previous-button'
                onClick={this.handlePrevious}
                >Previous</button>
                <button 
                className='next-button'
                onClick={this.handleNext}
                >Next</button>
            </div>
        )
    }
}
export default PeopleBox

