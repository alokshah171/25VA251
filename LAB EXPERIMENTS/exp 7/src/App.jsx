import StudentCard from './StudentCard'
import './StudentCard.css'

function App() {

  return (

    <div className="student-container">

      <StudentCard
        name="Monika"
        course="B.Tech Data Science"
        marks="95"
      />

      <StudentCard
        name="Rahul"
        course="B.Tech CS"
        marks="88"
      />

      <StudentCard
        name="Sneha"
        course="B.Tech IT"
        marks="92"
      />

    </div>

  )

}

export default App