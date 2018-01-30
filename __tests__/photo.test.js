/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Photo from '../components/Photo'

describe('Photo', () => {
  it('should render', () => {
    const component = shallow(<Photo id='1' uri='/some-url/for-image-1.jpg' title='Photo Title'/>)
    expect(component.getElements()).toMatchSnapshot();
  })
})

describe('Photo', () => {
  it('should match with snapshot', () => {
    const component = renderer.create(<Photo id='1' uri='/some-url/for-image-1.jpg' title='Photo Title'/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})