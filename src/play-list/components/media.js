import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import './media.css'

class Media extends Component {
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
            <div className="Media">
                <div className="Media-content">
                    <img className="Media-cover" src={this.props.imagePath} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">by {this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    author: PropTypes.string.isRequired,
    image: PropTypes.string,
    type: PropTypes.oneOf(['audio', 'video']),
    title: PropTypes.string
};

export default Media;