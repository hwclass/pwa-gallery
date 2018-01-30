import React from 'react'
import uuid from 'uuid'

import Photo from '../components/Photo'

export default ({ url: { query: { uri, title } } }) =>
  <Photo id={uuid.v4()} uri={uri} title={title} />