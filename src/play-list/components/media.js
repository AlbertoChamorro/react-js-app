import React, {Component} from 'react';
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
                <div>
                    <img src="./images/bitcoin.jpeg" alt="" width={260} height={160}/>
                    <h3>Something React.js</h3>
                    <p>by Alberto Chamorro</p>
                </div>
            </div>
        )
    }
}

export default Media;