import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { Query } from 'react-apollo'

// Queries
import { repositories } from '../../services/queries'

const ProfilePage = () => {
  const { username } = useParams()

  useEffect(() => {}, [])

  return (
    <Query query={repositories} variables={{ username, quantity: 10 }}>
      {({ data, loading }) =>
        loading ? (
          <div>Profile</div>
        ) : (
          <p>{data.user.repositories.nodes[0].nameWithOwner}</p>
        )
      }
    </Query>
  )
}

export default ProfilePage
