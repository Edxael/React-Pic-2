# Notes while dev.


### Libraries:

base64-img
Node.js: IMG <--> Base64 : https://www.npmjs.com/package/base64-img




Image: 

one that also crops:
https://www.npmjs.com/package/react-core-image-upload


react-images-upload
https://www.npmjs.com/package/react-images-upload




---[ Videos ]---------------------------
https://www.youtube.com/watch?v=XeiOnkEI7XI

prequel: https://www.youtube.com/watch?v=qZ1EFnFOGvE



https://www.youtube.com/watch?v=WOTFmPkWbxo



================================================================
https://codeburst.io/asynchronous-file-upload-with-node-and-react-ea2ed47306dd
https://levelup.gitconnected.com/file-upload-with-node-js-react-js-686e342ad7e7

Code HOME.jsx before other try:  

import React from 'react'
import axios from 'axios'
// var base64Img = require('base64-img')
import base64Img from 'base64-img'


 
export default class extends React.Component {
    state = { picture: [] }
	
    
    render() {

        const fileSelecter = (event) => {
            // console.log( event.target.files[0] )
            this.setState({ picture: event.target.files[0] })
        }

        const fileUpload = async () => {
            console.log("Uploading")

            // console.log("onState: ", this.state.picture)


            // base64Img.base64('./img/dcb1.jpg', (err, data) => {
            //     console.log("Hello from inside....")
            // })




            // var data64 = base64Img.base64Sync('./img/dcb1.jpg')
            // console.log("The 64IMG: ", data64)

            // const DBResp = await axios.post('http://localhost:8080/api/pics', { pic: "Momentos" } )
            //     .then( (response) => { return response })
            //     .catch( (error) => { console.log(error) })

            // console.log(DBResp)
            await this.setState({ picture: [] })
        }

        console.log("The Pic: ", this.state.picture)

        return (
            <div>
                <h1>Upload IMG.</h1>
            
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
















=============================================
====== Full Component exampple below ========
=============================================


// ====[ this converst image to Base64 ]=========================================================

import React from 'react'
// import axios from 'axios'
import FileBase64 from 'react-file-base64'

export default class extends React.Component {
    state = { picture: '' }

    getFiles(files){
        this.setState({ picture: files })
    }

    render() {

        console.log("The Pic: ", this.state.picture)

        return (
            <div>
                <h1>Upload IMG.</h1>
            
                <FileBase64
                    multiple={ false }
                    onDone={ this.getFiles.bind(this) } 
                />
            
                <hr/>
            
                { this.state.picture.length !== 0 ?
                    <div>
                        <h3 className="text-center mt-25">Callback Object</h3>
                        <div className="pre-container">
                        <pre>{ JSON.stringify(this.state.picture, null, 2) }</pre>
                        </div>
                    </div>
                    : null 
                }
            
                <hr/>
            
                <h3>The Picture</h3>
            
                { this.state.picture.length !== 0 ?  
                    <div>
                        <p>Loc</p>
                    </div>
                :   null 
                }
            
            </div> 
        )
    }
}






// ===[  Example Ouptput JSON Object ]======================================================================================

// {
//     "name": "dcb2.jpg",
//     "type": "image/jpeg",
//     "size": "84 kB",
//     "base64": "data:image/jpeg;baq5JxOmEga5itEk/vEcsiHISO3CmRpDwigMVHL4DeZeKUYjnLo2bQW06TR7+40025UkRMUHqRxXJyMtI6MMLY/u9CkP/9k=",
//     "file": {}
// }

// ==========================================================================================================