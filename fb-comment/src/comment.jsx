import React from 'react';
import img from './download.png'




const Comment = props => {
        return (
            
            <div className='container border border-secondary '>
                
                <div className='row'>
                
                    <div className='col-4'>
                <img src={img} alt='facebook' style={{ height:'150px', width:'150px' }}/>
                </div>
                <div  className='col-8'>
             <h3>{props.name}</h3>
             <p>{props.comment}</p>
             <div className='row'>
             <a href='1' className='col-2'>Like </a>
             <a href='1' className='col-2'>Reply </a>
             <p className='text-muted'>3seconds ago</p>
             </div>
            
             </div>
            
            </div>
            
            </div>
            

         );
    }

 
export default Comment;