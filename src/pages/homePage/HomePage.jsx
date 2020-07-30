import React, { useState } from 'react'

import { useQuery } from '@apollo/client'

// Queries
import { USERS_BY_TEXT } from '../../services/queries'

const HomePage = () => {
  const [inputText, setInputText] = useState('')

  const { loading, data, error } = useQuery(USERS_BY_TEXT, {
    variables: { inputValue: `${inputText} in:login` },
  })

  if (error) {
    console.log(error)
    return <p>error</p>
  }
  console.log(data)

  return (
    <>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <div>{data.search.userCount}</div>
          {data.search.edges.map((user) => (
            <div key={user.node.id}>
              <img src={user.node.avatarUrl} alt={user.node.login} />
              <p>{user.node.name}</p>
              <p>{user.node.login}</p>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default HomePage
