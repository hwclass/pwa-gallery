/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Image from '../components/Image'

describe('Image', () => {
  it('should render', () => {
    const component = shallow(<Image id='1' uri='/some-url/for-image-1.jpg' title='Image Title'/>)
    expect(component.getElements()).toMatchSnapshot();
  })
})

describe('Image', () => {
  it('should match with snapshot', () => {
    const component = renderer.create(<Image id='1' uri='/some-url/for-image-1.jpg' title='Image Title'/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})