import React from "react"
import {default as ImageFader} from "../../component-lib/image/Image"
import { Image, Item } from 'semantic-ui-react'

export default (props) => {
    return (
        <div>
            <h2>Sample: feed items</h2>
            <Item.Group items={props.feed} unstackable></Item.Group>

            <h2>Sample: feed items</h2>
            <Item.Group unstackable>
            {props.feed.map(item => {
                return (
                    <Item key={item.childKey}>
                        <Item.Image size='tiny' content={<ImageFader src={'https://react.semantic-ui.com/assets/images/wireframe/image.png'}/>} />
                        <Item.Content>
                            <Item.Header as='a'>{item.header}</Item.Header>
                            <Item.Description>
                                {item.description}   
                            </Item.Description>
                        </Item.Content>
                    </Item>                    
            )})}
            </Item.Group>
        </div>
    )
}

// {item.description} {item.image}

                    // <Item key={item.childKey}>
                    //     <Item.Image size='tiny' content={<Image src={item.image} />} />
                    //     <Item.Header as='a'>{item.header}</Item.Header>
                    //     <Item.Description>{item.description}</Item.Description>                 
                    // </Item>