import React from 'react'
import ReactDOM from 'react-dom'


/*
1.1 We want to refactor this code in a manner that uses Components and Properties
1.2 The Content Component should be rendered to 3 "Part" components

Create an array with three separate dictionaries to contain all the necessary information and use it to create our
components
 */


// Three New that are separated from one another Components "Header", "Content", and "Total"
const Header = (props) => {
    return(
    <h1>{props.course.name}</h1>
    )
}

// So we can split our Content Component's properties into their own separate "Part"

const Part = (props) => {
    return(<p>
        {props.name}{props.exercises}
    </p>)
}

const Content = (props) => {
    return(
     <div>
         <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/>
         <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/>
         <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>
     </div>
)
}

const Total = (props) => {
    return(
        <p>Number of Exercises are {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
}
const App = () => {

    // Create a dictionary that contains an array that separates its own dictionaries
const course = {
    name: "Half Stack application development",
    parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }

    ]
}

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts}/>
            <Total parts = {course.parts}/>


        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

