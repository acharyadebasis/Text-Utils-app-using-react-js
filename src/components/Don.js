import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Don(props) {
    const[aboutstyle]= useState({
        
      });
    
  return (
    <div style={aboutstyle}>
        <table className="table table-striped">
            <tbody>
        
        <tr ><td><Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/don">Google</Link></td></tr>
        <tr ><td><Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Facebook</Link></td></tr>
        </tbody>
        </table>
        
      
    </div>
  )
}

export default Don
