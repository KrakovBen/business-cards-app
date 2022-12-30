import * as React from 'react'
import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material'
import CardHead from './CardHead'
import CardBody from './CardBody'
import CardActionBar from './CardActionBar'
import { func } from 'prop-types'
import cardType from '../../models/types/cardType'

function CardComponent({card, handleDeleteCard, handleLikeCard}) {

    return (
        <Card sx={{ minWidth: 280 }} >
            <CardActionArea>
                {/* Card Head */}
                <CardHead image={card.image} />
                {/* Card Body */}
                <CardBody card={card}/>
            </CardActionArea>
            {/* Card Actions */}
            <CardActionBar cardId={card._id} handleDeleteCard={handleDeleteCard} handleLikeCard={handleLikeCard} />
        </Card>
    )
}

CardComponent.propTypes = {
    card: cardType.isRequired,
    handleDeleteCard: func.isRequired,
    handleLikeCard: func.isRequired
}

export default CardComponent