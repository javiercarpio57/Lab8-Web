import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('Display data in input from button', () => {
    test('should display the text of buttons', () => {
        const app = shallow(<App />)

        const button = app.childAt(1).childAt(4).dive()
        button.simulate('click')

        const display = app.childAt(0).dive()
        expect(display.text()).toBe('7')
    })

    test('should display result from operation', () => {
        const app = shallow(<App />)

        const button7 = app.childAt(1).childAt(4).dive()
        button7.simulate('click')

        const buttonX = app.childAt(1).childAt(7).dive()
        buttonX.simulate('click')

        button7.simulate('click')

        const buttonIgual = app.childAt(1).childAt(18).dive()
        buttonIgual.simulate('click')

        const display = app.childAt(0).dive()
        expect(display.text()).toBe('49')
    })

    test('should clear display after clicked "C"', () => {
        const app = shallow(<App />)

        const button8 = app.childAt(1).childAt(5).dive()
        button8.simulate('click')
        button8.simulate('click')
        button8.simulate('click')
        button8.simulate('click')

        const buttonX = app.childAt(1).childAt(7).dive()
        buttonX.simulate('click')

        button8.simulate('click')

        const buttonC = app.childAt(1).childAt(0).dive()
        buttonC.simulate('click')

        const display = app.childAt(0).dive()
        expect(display.text()).toBe('')
    })

    test('should display the 9 numbers after operation (no ERROR)', () => {
        const app = shallow(<App />)

        const button2 = app.childAt(1).childAt(13).dive()
        button2.simulate('click')
        button2.simulate('click')

        const buttonD = app.childAt(1).childAt(3).dive()
        buttonD.simulate('click')

        const button7 = app.childAt(1).childAt(4).dive()
        button7.simulate('click')

        const buttonIgual = app.childAt(1).childAt(18).dive()
        buttonIgual.simulate('click')

        const display = app.childAt(0).dive()
        expect(display.text()).toBe('3.1428571')
    })

    test('should display ERROR', () => {
        const app = shallow(<App />)

        const button7 = app.childAt(1).childAt(4).dive()
        button7.simulate('click')
        button7.simulate('click')
        button7.simulate('click')
        button7.simulate('click')
        button7.simulate('click')
        button7.simulate('click')
        button7.simulate('click')
        button7.simulate('click')
        button7.simulate('click')

        const buttonX = app.childAt(1).childAt(7).dive()
        buttonX.simulate('click')

        button7.simulate('click')
        button7.simulate('click')
        button7.simulate('click')

        const buttonIgual = app.childAt(1).childAt(18).dive()
        buttonIgual.simulate('click')

        const display = app.childAt(0).dive()
        expect(display.text()).toBe('ERROR')
    })
})
