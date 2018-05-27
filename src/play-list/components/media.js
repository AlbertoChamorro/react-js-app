import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import './media.css'

class Media extends Component {

    state = {
        author: this.props.author,
        cover: this.props.cover,
        type: this.props.type,
        title: this.props.title
    }
    // constructor(props){
    //     super(props)
    //   //  this.handleOnClickMedia = this.handleOnClickMedia.bind(this)

    //     this.state = {
    //         author: this.props.author,
    //         cover: this.props.cover,
    //         type: this.props.type,
    //         title: this.props.title
    //     }
    // }

    handleOnClickMedia = (event) => {
        console.log(this.props.title);
        this.setState({
            title: `New ${this.state.title}`
        });
    }

    render(){
        const styles = {
            container: { 
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '0.5px solid red',
            }
        }
        return (
            //  style={styles.container}
            <div className="Media" onClick = {this.handleOnClickMedia}>
                <div className="Media-content">
                    <img className="Media-cover" src={this.state.cover} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.state.title}</h3>
                    <p className="Media-author">by {this.state.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    author: PropTypes.string.isRequired,
    cover: PropTypes.string,
    type: PropTypes.oneOf(['audio', 'video']),
    title: PropTypes.string.isRequired
};

export default Media;