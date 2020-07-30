import React from 'react'
import moment from 'moment'

// Components
import { ChartIcon, StarIcon } from '../icons'

// Style components
import { Button } from '../styledComponents'
import {
  Actions,
  Card,
  ColorLabel,
  Column,
  Description,
  DescriptionItem,
} from './repositoryItem.styles'

const RepositoryItem = ({ repository }) => {
  return (
    <Card>
      <Column>
        <h3>{repository.name}</h3>
        <Description>
          {repository.languages.edges[0]?.node.color && (
            <ColorLabel color={repository.languages.edges[0].node.color} />
          )}
          {repository.languages.edges[0]?.node.name && (
            <DescriptionItem>
              {repository.languages.edges[0].node.name}
            </DescriptionItem>
          )}

          {repository.updatedAt && (
            <DescriptionItem>
              Updated {moment(repository.updatedAt).startOf('day').fromNow()}
            </DescriptionItem>
          )}
        </Description>
      </Column>
      <Actions>
        <Button width={'fit-content'}>
          <StarIcon />
          Star
        </Button>
        <ChartIcon />
      </Actions>
    </Card>
  )
}

export default RepositoryItem
