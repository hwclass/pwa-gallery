/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../components/Header.js'

describe('With Enzyme', () => {
  it('Header shows "Header"', () => {
    const header = shallow(<Header />)

    expect(header.text()).toEqual('Header')
  })
})

describe('With Snapshot Testing', () => {
  it('Header shows "Header"', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})