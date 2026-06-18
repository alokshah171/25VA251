function StudentCard(props) {

  return (

    <div className="student-card">

      <h2>Student Details</h2>

      <p>Name: {props.name}</p>

      <p>Course: {props.course}</p>

      <p>Marks: {props.marks}</p>

    </div>

  )

}

export default StudentCard