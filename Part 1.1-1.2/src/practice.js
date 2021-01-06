/*
            name: 'Fundamentals of React',
            exercises: 10

            name: 'Using props to pass data',

            name: 'State of a component',
            exercises: 14
 */

// Create three separate components Header Content and Total

import ReactDOM from "react-dom";

const Header = (props) => {
    return(
        <h1>{props.course.name}</h1>
    )
}

const Content = (props) => {
    return(
        <div>
            <Part/>
            <Part/>
            <Part/>
        </div>
    )
}

const Part = (props) => {
    <p>Place Hold</p>
}

const App = () => {
     const course = {
        name: 'Half Stack Application Development',
        parts:[
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State a Component",
                exercies: 14
            }
        ]
    }

    return(
        <Header course={course}/>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;