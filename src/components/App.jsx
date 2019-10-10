/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable indent */
import React from 'react'
import Input from './Input/Input'
import Button from './Button/Button'
import './style.scss'

const validation = require('../utils/Validation/Check')
const math = require('../utils/Math/Math')

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            stack: [],
            clean: 0,
        }
    }

    addToInput(data) {
      const { clean } = this.state
      let { input } = this.state

      if (clean === 1) {
        this.clean()
        input = ''
      }

      if (data === '.') {
        if (validation.canAddDot(input)) {
          this.setState({
            input: validation.check(input + data),
          })
        }
      } else {
        this.setState({
          input: validation.check(input + data),
        })
      }
    }

    clean() {
      this.setState({
        input: '',
        clean: 0,
      })
    }

    operate(symbol) {
      const { stack, input } = this.state
      if (symbol === '=') {
        stack.push(input)
        const result = this.calculate()
        stack.length = 0

        this.setState({
          input: result,
          clean: 1,
          stack,
        })
      } else {
        if (stack.length === 0) {
          stack.push(input)
          stack.push(symbol)
        } else {
          stack.push(input)

          const result = this.calculate()
          stack.length = 0
          stack.push(result)
          stack.push(symbol)

          this.setState({
            input: result,
          })
        }

        this.setState({
          clean: 1,
          stack,
        })
      }
    }

    calculate() {
      const { stack } = this.state
      console.table(stack)
      const [num1, operator, num2] = [...stack]
      let result = 0
      this.setState({
        stack: [],
      })
      switch (operator) {
        case '+':
          result = math.sum(Number(num1), Number(num2))
          break
        case '-':
            result = math.sub(Number(num1), Number(num2))
            break
        case '×':
            result = math.mult(Number(num1), Number(num2))
            break
        case '÷':
            result = math.div(Number(num1), Number(num2))
            break
        case '%':
            result = math.mod(Number(num1), Number(num2))
            break
        default:
          break
      }

      return result
    }

    removeAll() {
      this.setState({
        stack: [],
        input: '',
        clean: 0,
      })
    }

    render() {
      const { input } = this.state

      return (
        <div className="content">
          <Input number={input} />
          <div className="calculator">
            <Button content="C" click={() => { this.removeAll() }} />
            <Button content="+/-" />
            <Button content="%" click={() => { this.operate('%') }} />
            <Button content="&#247;" click={() => { this.operate('÷') }} />
            <Button content="7" click={() => { this.addToInput('7') }} />
            <Button content="8" click={() => { this.addToInput('8') }} />
            <Button content="9" click={() => { this.addToInput('9') }} />
            <Button content="&#215;" click={() => { this.operate('×') }} />
            <Button content="4" click={() => { this.addToInput('4') }} />
            <Button content="5" click={() => { this.addToInput('5') }} />
            <Button content="6" click={() => { this.addToInput('6') }} />
            <Button content="-" click={() => { this.operate('-') }} />
            <Button content="1" click={() => { this.addToInput('1') }} />
            <Button content="2" click={() => { this.addToInput('2') }} />
            <Button content="3" click={() => { this.addToInput('3') }} />
            <Button content="+" click={() => { this.operate('+') }} />
            <Button content="0" click={() => { this.addToInput('0') }} width={2} />
            <Button content="." click={() => { this.addToInput('.') }} />
            <Button content="=" click={() => { this.operate('=') }} />
          </div>
        </div>
      )
    }
}
