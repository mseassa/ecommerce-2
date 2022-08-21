import React from 'react'
import { SubTitle, UserProfile } from '../../components'

const UserProfilePage = ({title}) => {
  return (
    <>
    <SubTitle title={title} />
    <UserProfile />
    </>
  )
}

export default UserProfilePage