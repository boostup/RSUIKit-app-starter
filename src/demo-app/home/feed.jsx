import React from "react"
import {default as ImageLoader} from "../../component-lib/image/Image"
import { Item } from 'semantic-ui-react'

export default (props) => {
    return (
        <div>
            <h2>Sample: feed items</h2>
            <Item.Group unstackable divided>
            {props.feed.map(item => (
                    <div className="item" key={item.childKey}>
                        <Item.Image size='tiny' content={<ImageLoader src={item.image}/>} />
                        <Item.Content>
                            <Item.Header as='a'>{item.header}</Item.Header>
                            <Item.Description>
                                {item.description}   
                            </Item.Description>
                        </Item.Content>
                    </div>                    
            ))}
            </Item.Group>
        </div>
    )
}