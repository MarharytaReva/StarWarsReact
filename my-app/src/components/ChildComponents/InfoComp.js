
import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import service from "../../ApiService";


function getRows(data){
    let rows = []
       
    for(let name of Object.getOwnPropertyNames(data)){
        if(!Array.isArray(data[name]) && !name.includes('id') && !name.includes('url')){
            let displayName = name.replace('_', ' ')
            rows.push(
                <tr>
                <td>{displayName}</td>
                <td>{data[name]}</td>
                </tr>
           )
           
        }
    }
    return rows;
}

function InfoComp(props){
  
    const [state, setState] = useState({
        rows: []
    })
    const entityName = props.entity

    const setInfo = (data) => {
        let rows = getRows(data)
        setState({
            rows: rows
        })
    }

    useEffect(() => { 
        let id = props.match.params.id
        console.log('id', id)
        service.getItem(entityName, id, setInfo)
    })
   
   
        return(
            <div className="general">
               <div id="infoForm">
               <div id="innerDiv">
                   <button id="close" onClick={() => props.history.push(`/${entityName}`)}>X</button>
                   <div class="infoList">
                   <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                               <th>Property</th>
                               <th>Value</th>
     
                            </tr>
                        </thead>
                        <tbody>
                            {state.rows}
                        </tbody>
                    </Table>
                </div>
                </div>
                </div>
                <div id="blur"></div>
            </div>
        )
    
}

export default InfoComp