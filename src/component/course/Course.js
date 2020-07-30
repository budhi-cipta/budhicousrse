import React from 'react';
import './course.css'

import ReactPlayer from 'react-player';


const Course = ({card}) => {
    return(
        <>
            {
                card.map((element) => (
                    <div className='main'>
                        <ReactPlayer url='https://youtu.be/w4T3QUs_Nzc' width='320' height='240'/>
                        <div className='content2'>
                            <h3>{element.title}</h3>
                            <p>{element.description}</p>
                        </div>
                        <img className='avatarku' src={element.Avatar} alt={element.foto}/>
                    </div> 
                )
                ) 
            }
        </> 
    );        
};
export default Course;












