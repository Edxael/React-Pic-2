import React from 'react'
// import axios from 'axios'
import Dropzone from 'react-dropzone'
import request from 'superagent'


const CLOUDINARY_UPLOAD_PRESET = 'edxael1';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/arhtdtoj/upload';


export default class extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          uploadedFileCloudinaryUrl: '',
          uploadedFile: []
        };
      }





// ----[ Functions ]------------------------------------------

      onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });
    
        this.handleImageUpload(files[0]);
      }



      handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
    
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
        });
      }


// --------------------------------------------------------------------------




    render() {

        console.log("In State: ", this.state.uploadedFile)
        return (
            <div>
                <h1>Upload IMG.</h1>
            
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>

                    <p>Drop an image or click to select a file to upload.</p>

                </Dropzone>
                        
            </div> 
        )
    }
}


// const DBResp = await axios.post('http://localhost:8080/api/pics', { pic: "Momentos" } )
//                 .then( (response) => { return response })
//                 .catch( (error) => { console.log(error) })

//             console.log(DBResp)

// ===========================================================================================






