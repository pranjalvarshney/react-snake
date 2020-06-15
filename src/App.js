import React from 'react'
import './App.css'
import Snake from './components/Snake'
import Food from './components/Food'


const initalstate = {
    speed: 500, 
    fooddots: [21,66],
    direction: 'RIGHT',
    snakedots: [
        [3,0],
        [9,0]
    ]
}

class App extends React.Component{
    
 
        constructor(props) {
            super(props)
        
            this.state = initalstate
        }
        

    componentDidMount(){
        this.getfoodPosition()
        setInterval(this.moveSnake,this.state.speed)
        document.onkeydown = this.onKeyDown
    }
    componentDidUpdate(){
       this.checkBoundary() 
       this.snakeEatsItself()
       this.checkEatFood()
    }

    onKeyDown = (event) =>{
        // eslint-disable-next-line default-case
        switch(event.keyCode){
            case 37:
                this.setState({direction: 'LEFT'})
                break
            case 38:
                this.setState({direction: 'UP'})
                break
            case 39:
                 this.setState({direction: 'RIGHT'})
                break
            case 40:
                this.setState({direction: 'DOWN'})
                break
        }
    }

    moveSnake = () => {
        let dots = [...this.state.snakedots]
        let head = dots[dots.length - 1 ]
        // eslint-disable-next-line default-case
        switch(this.state.direction){
            case 'RIGHT':
                head = [head[0] + 3 , head[1]]
                break
            case 'LEFT':
                head = [head[0] - 3 , head[1]]
                break
            case 'UP':
                head = [head[0] , head[1] - 3]
                break
            case 'DOWN':
                head = [head[0] , head[1] + 3]
                break
        }
        console.log(this.state.direction)
        dots.push(head)
        dots.shift()
        this.setState({
            snakedots: dots
        })
    }

    checkBoundary = () => {
        let head = this.state.snakedots[this.state.snakedots.length - 1]
        if(head[0] >= 100 || head[0] <0 || head[1] >=100 || head[1] <0){
            this.gameOver()
        }
    }

    snakeEatsItself = () => {
        let snake = [...this.state.snakedots]
        let head = snake[snake.length - 1]
        snake.pop()
        snake.forEach(dot => {
            if(head[0] === dot[0] && head[1] === dot[1]){
                this.gameOver()
            }
        })
    }

    gameOver = () => {
        alert("Game Over" + this.state.snakedots.length + " is your score")
        this.setState(initalstate)
    }  

    checkEatFood = () => {
        let head = this.state.snakedots[this.state.snakedots.length - 1]
        let food = this.state.fooddots
        if(head[0] === food[0] && head[1] === food[1]){
            this.getfoodPosition()
            this.snakeBodyIncrease()
        }
    }

    snakeBodyIncrease = () => {
        let newSnake = [...this.state.snakedots]
        newSnake.unshift([])
        this.setState({
            snakedots: newSnake
        })
    }

    getfoodPosition = () =>{
        let xmaximum = 60
        let ymaximum = 90
        const x = Math.ceil((Math.random() * (ymaximum/3)))*3
        const y = Math.ceil((Math.random() * (xmaximum/3)))*3
        this.setState({
            fooddots: [y,x]
        })
        return [x,y]
    }
    
    render(){
        return(
            <div className="main-area">
               <Snake snakedots={this.state.snakedots}/>
                <Food food={this.state.fooddots} />
            </div>
        )
    }
}

export default App