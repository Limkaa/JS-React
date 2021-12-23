export default function Home({ loginned }) {

  return (
    <section className="center">
      <h1 className="heading">Welcome to the homepage!</h1>
      <p className="subtitle">{loginned ? "You have successfully authed in your account! You can now enter your pages" : "You are not authed! Please login into the system"}</p>
    </section>
    
  )
}