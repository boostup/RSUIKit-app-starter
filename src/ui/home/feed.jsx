import React from "react"
import { ImageLoader } from "@source360/react-semantic-ui-kit"
import { Item } from 'semantic-ui-react'

export default (props) => {
    return (
        <div>
            <h2>Sample: feed items</h2>
            <Item.Group unstackable divided>
            {props.feed.map(feedItem)}
            </Item.Group>
        </div>
    )
}

const feedItem = (item) => {
    return (
        <div className="item" key={item.childKey}>
            <Item.Image size='tiny' content={<ImageLoader src={item.image}/>} />
            <Item.Content>
                <Item.Header as='a'>{item.header}</Item.Header>
                <Item.Description>
                    {item.description}   
                </Item.Description>
            </Item.Content>
        </div>                    
    )   
}