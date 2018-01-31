/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Photo from '../pages/photo.js'

describe('Photo page', () => {
  it('should render', () => {
    const url = {
      query: {
        uri: 'photo-uri'
      }
    }
    const component = shallow(<Photo url={url}/>)
    expect(component.getElements()).toMatchSnapshot();
  })
})

describe('Photo page', () => {
  it('should match with snapshot', () => {
    const url = {
      query: {
        uri: 'photo-uri'
      }
    }
    const component = renderer.create(<Photo url={url}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})