import React from 'react'
import axios from 'axios'
 
export default class extends React.Component {
    state = { picture: [] }
	
    
    render() {

        const fileSelecter = (event) => {
            // console.log( event.target.files[0] )
            this.setState({ picture: event.target.files[0] })
        }

        const fileUpload = async () => {
            console.log("Uploading")

            const DBResp = await axios.post('http://localhost:8080/api/pics', { pic: this.state.picture[0] } )
                .then( (response) => { return response })
                .catch( (error) => { console.log(error) })
            await this.setState({ picture: [] })
        }

        console.log("The Pic: ", this.state.picture)

        return (
            <div>
                <h1>Upload IMG</h1>
            
                <input type="file" onChange={fileSelecter} />

                <br/><br/>

                <button onClick={ fileUpload } >Upload file</button>

            </div>
        );
    }
}



// <img src={ this.state.pictures["0"]["0"].webkitRelativePath } alt=""/>

// this.state.pictures["0"]["0"].webkitRelativePath
// ["0"]["0"].webkitRelativePath




// ===================================================

// How to use: 
// https://github.com/jakehartnell/react-images-upload


// import ImageUploader from 'react-images-upload'

// constructor(props) {
//     super(props);
//     this.state = { pictures: [] };
//     this.onDrop = this.onDrop.bind(this);
// }

// onDrop(picture) {
//     this.setState({
//         pictures: this.state.pictures.concat(picture),
//     })
    
// }


// <ImageUploader
//     withIcon={true}
//     buttonText='Choose images'
//     onChange={this.onDrop}
//     imgExtension={['.jpg', '.gif', '.png', '.gif']}
//     maxFileSize={5242880}
//     withPreview={true}
//     accept="accept=image"	
// />

// <hr/>

// { this.state.pictures[0] ? <img src={ this.state.pictures["0"]["0"].name } alt=""/> : <div>Pic will go here</div> }