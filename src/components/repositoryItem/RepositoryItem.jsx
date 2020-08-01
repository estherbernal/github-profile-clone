import React from 'react'
import moment from 'moment'

// Components
import { ReactComponent as ChartIcon } from '../icons/chartIcon.svg'
import { ReactComponent as StarIcon } from '../icons/starIcon.svg'

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
  const language = repository.languages.edges[0]
    ? repository.languages.edges[0]?.node
    : null
  return (
    <Card>
      <Column>
        <h3>{repository.name}</h3>
        <Description>
          {language && (
            <>
              <ColorLabel color={language.color} />
              <DescriptionItem>{language.name}</DescriptionItem>
            </>
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
