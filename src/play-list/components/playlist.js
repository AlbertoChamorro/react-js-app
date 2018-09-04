import React from 'react';
import Media from './media';

function PlayList (props) {
    const data = props.data;
    const playlist = data.categories[0].playlist;
    return (
        <div>
            {
                playlist.map((item) => {
                    return <Media key = {item.id} {... item} />
                })
            }
        </div>
    )
}

export default PlayList;