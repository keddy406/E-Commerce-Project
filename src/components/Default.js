import React, { Component } from 'react'

export default class Default extends Component {
    render() 
    {
        // console.log(this.props)
        return (
            <div className="container">
               <div className="row">
                   <div className="col mx-auto text-center text-title text-uppcase pt-5">
                       <h1 className="display-3">404</h1>
                       <h1>error</h1>
                       <h2>Page not found</h2>
                       <h3>this requested Url <span className="text-danger">{this.props.location.pathname}</span>was not found</h3>
                   </div>
               </div>
                </div>
        )
    }
}
