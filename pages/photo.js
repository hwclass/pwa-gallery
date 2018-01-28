import React from 'react'
import uuid from 'uuid'

// import Photo from '../components/Frame'
import Image from '../components/Image'

export default ({ url: { query: { uri } } }) => (
  <div className='permalink'>
    <div className='wrap'>
      <Image id={uuid.v4()} uri={uri} />
    </div>
    <style jsx>{`
      .permalink {
        padding: 100px;
        text-align: center;
      }
      .wrap {
        display: inline-block;
        border: 1px solid #999;
        margin: auto;
      }
    `}</style>
  </div>
)