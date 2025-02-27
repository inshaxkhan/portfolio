 import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
 
const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {[{title: 'item1', description: 'description1', id: 1},
                    {title: 'item1', description: 'description1', id: 1},
                    {title: 'item1', description: 'description1', id: 1},
                    {title: 'item1', description: 'description1', id: 1},
                    {title: 'item1', description: 'description1', id: 1},
                    {title: 'item1', description: 'description1', id: 1}
                ].map(
                    (item, i) => (
                        <BentoGridItem
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    )
                ) }
            </BentoGrid>
        </section>
    )
}
 
export default Grid