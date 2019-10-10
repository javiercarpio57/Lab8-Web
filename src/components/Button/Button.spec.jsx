import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'
import Input from '../Input/Input'

describe('Input button', () => {
    test('should display a number', () => {
        const button = shallow(<Button content="1" />)

        expect(button.find('span').text()).toBe('1')
    })
})

describe('Input content', () => {
    test('should display the text of the clicked button', () => {
        // const input = shallow(<Input />)
        // const button = shallow(<Button content="1" />)
        // const buttonDot = shallow(<Button content="." />)
        // button.simulate('click')
        // buttonDot.simulate('click')
        // button.simulate('click')

        // expect(input.find('span').text()).toBe('1.1')
    })
})
