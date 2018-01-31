/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../pages/index.js'

describe('Index page', () => {
  beforeEach(() => {
    global.sessionStorage = jest.genMockFunction();
    global.sessionStorage.setItem = jest.genMockFunction();
    global.sessionStorage.getItem = jest.genMockFunction();
  })

  it('should render', () => {
    const url = {
      query: {
        photoUri: 'photo-uri'
      }
    }
    const data = {
      title: 'App Title',
      images: [{
        "uri": "some-url/for-image-1",
        "set": "111"
      }, {
        "uri": "some-url/for-image-2",
        "set": "222"
      }, {
        "uri": "some-url/for-image-3",
        "set": "333"
      }, {
        "uri": "some-url/for-image-4",
        "set": "444"
      }, {
        "uri": "some-url/for-image-5",
        "set": "555"
      }]
    }
    const component = shallow(<Index url={url} data={data}/>)
    expect(component.getElements()).toMatchSnapshot();
  })
})

describe('Index page', () => {
  it('should match with snapshot', () => {
    const url = {
      query: {
        photoUri: 'photo-uri'
      }
    }
    const data = {
      title: 'App Title',
      images: [{
        "uri": "some-url/for-image-1",
        "set": "111"
      }, {
        "uri": "some-url/for-image-2",
        "set": "222"
      }, {
        "uri": "some-url/for-image-3",
        "set": "333"
      }, {
        "uri": "some-url/for-image-4",
        "set": "444"
      }, {
        "uri": "some-url/for-image-5",
        "set": "555"
      }]
    }
    const component = renderer.create(<Index url={url} data={data}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})