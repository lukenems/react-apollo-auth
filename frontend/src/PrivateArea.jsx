import React from 'react'
import { navigate } from '@reach/router'

const PrivateArea = () => {
  if (!Cookies.get('token')) {
    navigate('/')
  }
  return (
    <div>
      Private area!
    </div>
  )
}

export default PrivateArea