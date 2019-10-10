import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Input button', () => {
    test('should display a number', () => {
        const button = shallow(<Button content="1" />)

        expect(button.find('span').text()).toBe('1')
    })
})
