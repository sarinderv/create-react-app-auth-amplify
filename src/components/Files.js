import React, { Component, Fragment } from 'react'
import Amplify, { Storage } from 'aws-amplify';
Amplify.configure({
    Auth: {
        identityPoolId: 'us-west-2:562a345b-0f73-4e95-94e4-c28b612f82ce', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-west-2', // REQUIRED - Amazon Cognito Region
        userPoolId: 'us-west-2_blApylYpk', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '6qb1t4fjo8gea9udltfju42gpj', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        bucket: 'filestoragebucket50812-devn', //REQUIRED -  Amazon S3 bucket
        region: 'us-west-2', //OPTIONAL -  Amazon service region
    }
});

export default class Files extends Component {
    state = {
        // Initially, no file is selected 
        selectedFile: null
    };

    // On file select (from the pop up) 
    onFileChange = event => {
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] });
    };

    // On file upload (click the upload button) 
    onFileUpload = () => {
        // Details of the uploaded file 
        console.log(this.state.selectedFile);

        Storage.put(this.state.selectedFile.name, this.state.selectedFile, {
            level: 'private',
            contentType: this.state.selectedFile.type,
            metadata: {
                'fileName': this.state.selectedFile.name,
                'firstName': 'Bob',
                'lastName': 'Virk',
            }
        })
        .then (result => console.log(result))
        .catch(err => console.log(err));
    };

    // File content to be displayed after 
    // file upload is complete 
    fileData = () => {
        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>File Size: {this.state.selectedFile.size}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {
        return (
            <Fragment>
                <h1>Files</h1>
                Upload and Download yer files.

                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button disabled={!this.state.selectedFile} onClick={this.onFileUpload}>
                        Upload!
                </button>
                </div>
                {this.fileData()}
            </Fragment>
        )
    }
}
