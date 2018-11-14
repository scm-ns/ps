import React, {Component} from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonSelected: "None" 
        }
    }

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-dark">
                <button className="navbar-brand" > Navbar</button>

               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>


            </div>
        )
    }
}