/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../components/Header'

describe('Header', () => {
  it('should render', () => {
    const header = shallow(<Header text={"Car Photos"}/>)
    expect(header.text()).toEqual('Car Photos<JSXStyle />')
  })
})

describe('Header', () => {
  it('should match with snapshot', () => {
    const component = renderer.create(<Header text={"Car Photos"}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})