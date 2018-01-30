/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Gallery from '../components/Gallery.js'

describe('Gallery', () => {
  it('should list images', () => {
    const images = [{
      "uri": "some-url/for-image-1.jpg",
      "set": "111"
    }, {
      "uri": "some-url/for-image-2.jpg",
      "set": "222"
    }, {
      "uri": "some-url/for-image-3.jpg",
      "set": "333"
    }, {
      "uri": "some-url/for-image-4.jpg",
      "set": "444"
    }, {
      "uri": "some-url/for-image-5.jpg",
      "set": "555"
    }]
    const title = 'Some title for gallery'
    const gallery = shallow(<Gallery images={images} title={title}/>)
    expect(gallery.find('.photoLink').length).toEqual(5)
  })
})

describe('Gallery', () => {
  it('should match with snapshot', () => {
    const images = [{
      "uri": "some-url/for-image-1.jpg",
      "set": "111"
    }, {
      "uri": "some-url/for-image-2.jpg",
      "set": "222"
    }, {
      "uri": "some-url/for-image-3.jpg",
      "set": "333"
    }, {
      "uri": "some-url/for-image-4.jpg",
      "set": "444"
    }, {
      "uri": "some-url/for-image-5.jpg",
      "set": "555"
    }]
    const title = 'Some title for gallery'
    const component = renderer.create(<Gallery images={images} title={title}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})