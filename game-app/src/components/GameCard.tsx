import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from './hooks/useGames'

// import CriticScore from './CriticScore'
// import Emoji from './Emoji'
// import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow = 'hidden'>
      <Image src={(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
         
       
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard