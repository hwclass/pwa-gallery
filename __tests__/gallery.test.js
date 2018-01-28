/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Gallery from '../components/Gallery.js'

describe('With Enzyme', () => {
  it('Gallery shows "Gallery"', () => {
    const gallery = shallow(<Gallery />)

    expect(gallery.text()).toEqual('Gallery')
  })
})

describe('With Snapshot Testing', () => {
  it('Gallery shows "Gallery"', () => {
    const component = renderer.create(<Gallery />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})