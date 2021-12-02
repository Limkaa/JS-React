import React from 'react';
import './profile.css';

export default class Profile extends React.Component {
    render() {
        return ( 
            <div class="info-container">
                <img src={this.props.person.photo} alt="person" class="image"/>
                <b>{this.props.person.name}</b>
                <div>Age: {this.props.person.age}</div>
                <div>Country: {this.props.person.country}</div><br/>
                <div><b>Skills:</b>
                    <ul>
                    {this.props.person.skills.map(listItem => {
                        return(<li>{listItem}</li>)
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}