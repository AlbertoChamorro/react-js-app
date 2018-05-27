import React, {Component} from 'react';
import Media from './media';

class PlayList extends Component{

    render(){
        
        // console.log(this.props.data)
        const data = this.props.data;
        const playlist = data.categories[0].playlist;
        return (
            <div>
                {
                    playlist.map((item) => {
                        // return <Media key = {item.id} title = {item.title}
                        //         author = {item.author}
                        //         cover = {item.cover}
                        //         type = {item.type}/>
                        return <Media key = {item.id} {... item} />
                    })
                }
            </div>
        )
        // "./images/bitcoin.jpeg"
    }
}

export default PlayList;