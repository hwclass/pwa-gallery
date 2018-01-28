/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../components/Footer.js'

describe('With Enzyme', () => {
  it('Footer shows "Footer"', () => {
    const footer = shallow(<Footer />)

    expect(footer.text()).toEqual('Footer<JSXStyle />')
  })
})

describe('With Snapshot Testing', () => {
  it('Footer shows "Footer"', () => {
    const component = renderer.create(<Footer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})