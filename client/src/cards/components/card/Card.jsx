import * as React from 'react'
import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material'
import CardHead from './CardHead'
import CardBody from './CardBody'
import CardActionBar from './CardActionBar'

function CardComponent({card, onDeleteClick, onLikeClick, onEditClick}) {

    return (
        <Card sx={{ minWidth: 280 }} >
            <CardActionArea>
                {/* Card Head */}
                <CardHead image={card.image} />
                {/* Card Body */}
                <CardBody card={card}/>
            </CardActionArea>
            {/* Card Actions */}
            <CardActionBar onDeleteClick={onDeleteClick} onLikeClick={onLikeClick} onEditClick={onEditClick} bizNumber={card.bizNumber} />
        </Card>
    )
}

export default CardComponent