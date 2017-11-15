import React from "react"
import Image from "../../component-lib/image/Image";
import { Feed } from 'semantic-ui-react'

export default (props) => {
    return (
        <div>
            <h2>Sample: feed items</h2>
            {props.feed.map(item => {
            return (
                <Feed key={item.id}>
                    <Feed.Event>
                        <Feed.Label content={<Image src={item.thumbnailUrl} />} />
                        <Feed.Content content={item.title} />
                    </Feed.Event>
                </Feed>                 
            )
            })}
        </div>
    )
}
