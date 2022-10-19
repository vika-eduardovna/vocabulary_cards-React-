import React from 'react'
import Card from './Card'
import { words } from '../data/words';

export default function CardsContainer({ cards, change }) {
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: '300px',
        gap: '10px',
        margin: '50px 0'
    }

    return (
        <div style={containerStyle}>
            {
                cards.map(card => <Card key={card.id} {...card} change={change} />)
            }
        </div>
    )
}
