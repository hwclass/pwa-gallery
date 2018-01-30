/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Modal from '../components/Modal'

describe('Modal', () => {
  it('should render', () => {
    const component = shallow(<Modal id='1' uri='/some-url/for-image-1.jpg' title='Modal Title'/>)
    expect(component.getElements()).toMatchSnapshot();
  })
})

describe('Modal', () => {
  it('should match with snapshot', () => {
    const component = renderer.create(<Modal id='1' uri='/some-url/for-image-1.jpg' title='Modal Title'/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})