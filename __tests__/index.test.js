/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('App', () => {
  beforeEach(() => {
    global.sessionStorage = jest.genMockFunction();
    global.sessionStorage.setItem = jest.genMockFunction();
    global.sessionStorage.getItem = jest.genMockFunction();
  })

  it('should render', () => {
    const url = {
      query: {
        photoUri: '/photo-uri'
      }
    }
    const data = {
      title: 'App Title',
      images: [{
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
    }
    const component = shallow(<App url={url} data={data}/>)
    expect(component.getElements()).toMatchSnapshot();
  })
})

describe('App', () => {
  it('should match with snapshot', () => {
    const url = {
      query: {
        photoUri: '/photo-uri'
      }
    }
    const data = {
      title: 'App Title',
      images: [{
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
    }
    const component = renderer.create(<App url={url} data={data}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})