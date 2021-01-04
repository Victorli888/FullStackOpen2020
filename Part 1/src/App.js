import React from 'react'
import ReactDOM from 'react-dom'

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

// Three New Components "Header", "Content", and "Total"

const Header = (props) => {
    return(
    <h1>{props.name}</h1>
    )
}

const Content = (props) => {
    return(
        <p>
            {part1} {exercises1}<br/><br/>
            {part2} {exercises2}<br/><br/>
            {part3} {exercises3}
        </p>
)
}

const Total = (props) => {
    return(
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
}
const App = () => {


    return (
        <div>
            <Header name={course} />
            <Content/>
            <Total/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

