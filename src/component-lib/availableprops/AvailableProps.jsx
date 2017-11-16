import React from "react"
import _ from "lodash"
import ReactJson from 'react-json-view'
import { Responsive } from 'semantic-ui-react'

import "./AvailableProps.css"

const MIN_WIDTH = Responsive.onlyComputer.minWidth;

export default ({props:{ propPath, prop }}) => {   
    return (
        <div className="avail-props">

            <h2>Available Props on {propPath}</h2>
            <table>
                <thead>
                    <ComposeHead />
                </thead>
                <tbody>
                    <ComposeBody data={prop} />
                </tbody>
            </table>
        </div>
    )
}

const ComposeHead = () => {
    return (

            
            <tr>
                {/*For small screens*/}
                <Responsive as="th" maxWidth={MIN_WIDTH}>
                    <b>key</b>
                </Responsive>  

                {/*For all others*/}
                <Responsive as="th" minWidth={MIN_WIDTH - 1}>
                    key
                </Responsive>  
                <Responsive as="th" minWidth={MIN_WIDTH - 1}>
                    value
                </Responsive>

            </tr>

            )
}

const ComposeBody = ({data}) => {
    return _.keys(data).map( propName => {
        const propVal = data[propName]
        const json = decide(propName, propVal);
        return (
            <tr key={propName}>
                {/*For small screens*/}
                <Responsive as="td" maxWidth={MIN_WIDTH}>
                    <b>{propName}</b> : {json}
                </Responsive>  

                {/*For all others*/}
                <Responsive as="td" minWidth={MIN_WIDTH - 1}>
                    {propName}
                </Responsive>  
                <Responsive as="td" minWidth={MIN_WIDTH - 1}>
                    {json}
                </Responsive>
            </tr>)
    })    
}

function decide(propName, propVal) {

    const wrapWithItalics = (val) => <i>{val}</i>
    
    //isUndedined
    if(propVal === undefined) 
        return wrapWithItalics("undefined");

    //isFunction
    //important to keep before the 'isObject' check because a function is also an Object
    if(propVal instanceof Function) {
        const handleClick = (e) => {
            e.preventDefault();
            propVal();
        }
        return <a onClick={handleClick} href="#/someStuff">{wrapWithItalics(propVal.toString())}</a>;
    }
    
    //isObject
    if(propVal instanceof Object) 
        return <ReactJson name={null} collapsed={true} src={propVal} />

    //isScalar
    return wrapWithItalics(propVal.toString());
}
