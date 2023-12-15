const Course = ({ course }) => (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)

const Header = (props) => (
    <h3>{props.course}</h3>
)

const Content = (props) => <>
    {props.parts.map((c, index) => <div key={index}>{c.name} {c.exercises}</div>)}
</>

const Total = (props) => <p>Number of exercises {props.parts.reduce((prev, part) => prev + part.exercises, 0)}</p>

export default Course