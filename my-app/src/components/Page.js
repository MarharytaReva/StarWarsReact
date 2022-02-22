import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'

import InfoComp from './ChildComponents/InfoComp';
import service from '../ApiService';

import { Button } from 'react-bootstrap'

function Page(props){
       
       const [state, setState] = useState({
        result: [],
        next: '',
        previous: ''
       })
      
       const entityName = props.entityName
       const setList = data => {
           let dispalyedList = props.func(data, entityName)
           setState({
                    result: dispalyedList,
                    next: data.next,
                    previous: data.previous
                }, () => console.log('state', state))
       }
   
  
    useEffect(() => {service.getMethod(entityName, setList)},
    [])
    
    const next = () => {
        if(state.next){
            service.getPage(state.next, setList)
        }
    }
    const previous = () => {
        if(state.previous){
            service.getPage(state.previous, setList)
        }
    }
   
        return(
            <div>
                <div className="flexD">
                {state.result}
                </div>
                <div className="flexBtn">
                <Button variant="primary" onClick={() => previous()}>Previous</Button>
                <Button variant="primary" onClick={() => next()}>Next</Button>
                </div>
                <Route path={`/${entityName}/:id`} component={(props) => <InfoComp {...props} entity={entityName} />}></Route>
            </div>
        )
    
}
export default Page