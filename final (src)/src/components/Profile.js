export default function Profile({ profile }) {
  return (
    <section>
      <h1 className="heading center">Profile page!</h1>
      <div className="profile">
        <div className="photo">{ profile.name }</div>
        <div>
          <div>{ profile.name } { profile.surname }</div>
          <div>{ profile.age } years old</div>
        </div>
      </div>
    </section>
    
  )
}