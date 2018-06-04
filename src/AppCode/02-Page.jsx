import React from 'react'
 
export default class extends React.Component{
    state = { uinput: '' }
    render(){
        let myVar = setTimeout(() => { console.log("Update mande") }, 500)
        return(
            <div>
                <h1>Page 2</h1>

                <p>Testing reset SetTimeout - 1</p>

                <input type="text" value={this.state.uinput} onChange={ (e) => {
                    this.setState({ uinput: e.target.value })
                    clearTimeout(myVar)
                } } />

            </div>
        )
    }
}