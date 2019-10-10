/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import React, { PureComponent } from 'react'
import './Button.css'

const validation = require('../../utils/Validation/Check')

export default class Input extends PureComponent {
    mouseClick() {
        const { click } = this.props
        click()
    }

    render() {
        const { content, width } = this.props

        let color = ''
        let style = 'buttonSize'

        if (validation.isNumber(content) === 1) {
            color = 'lightGray'
        } else if (validation.isNumber(content) === 2) {
            color = 'orange'
        } else {
            color = 'darkGray'
        }

        if (width === 2) {
            style = 'buttonSize2'
        }

        return (
            <button className={`boxSizing ${style} buttonStyle ${color}`} type="button" onClick={() => this.mouseClick()}>
                <span className="buttonNumber">{content}</span>
            </button>
        )
    }
}
