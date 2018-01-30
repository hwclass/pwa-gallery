/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../components/Layout'

describe('Layout', () => {
  it('should render', () => {
    const component = shallow(<Layout title='Title' headerText='Header Text'/>)
    expect(component.getElements()).toMatchSnapshot();
  })
})

describe('Layout', () => {
  it('should match with snapshot', () => {
    const component = renderer.create(<Layout title='Title' headerText='Header Text'/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})