import React from 'react';
import './App.css';
import Profile from './components/Profile';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      persons: [
        {
          name: "Alex",
          age: "32",
          country: "USA",
          skills: ["Web-programming", "Management"],
          photo: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
        },
        {
          name: "Kate",
          age: "27",
          country: "Spain",
          skills: ["Accounting", "Calculations"],
          photo: "https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
        },
        {
          name: "Dave",
          age: "30",
          country: "Kazakhstan",
          skills: ["Web-programming", "Physics"],
          photo: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1937349093.1628035200"
        },
        {
          name: "Martha",
          age: "28",
          country: "France",
          skills: ["Management", "Accounting"],
          photo: "https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg&ga=GA1.2.2008272138.1631923200"
        }
      ],
      current_id: 0
    }
  }

  getRandomProfile() {
    var num = Math.floor(Math.random() * this.state.persons.length);
    if (this.state.current_id !== num) {
      this.setState({
        current_id: num
      })
    } else {
      this.getRandomProfile()
    }
  }

  render() {
    return (
      <React.Fragment>
        <div class="profile-container">
          <Profile person={this.state.persons[this.state.current_id]}/>
          <button class="button" onClick={() => this.getRandomProfile()}>Random Profile</button>
        </div>
      </React.Fragment>
    )
  }
}
