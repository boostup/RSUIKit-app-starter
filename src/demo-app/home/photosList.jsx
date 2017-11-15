import React from "react"
import Image from "../../component-lib/image/Image";

export default (props) => {
    return (
        <div>
            <h2>Sample: media list</h2>
            <ul className="list-unstyled">
                {props.photos.map(photo => {
                return (
                    <li key={photo.id} className="media my-3">
                        <Image className="mr-3" src={photo.thumbnailUrl} alt="Generic placeholder" />
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">{photo.title}</h5>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat eligendi dolorum sint est dicta, minima placeat dolor quis.
                        </div>
                    </li>                    
                )
                })}
            </ul>
        </div>
    )
}
