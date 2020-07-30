import React from 'react';
import Avatar from './component/Avatar/Avatar'
import Course from './component/course/Course'
import Info from './component/profile/Info'




function App() {
  let datas = [
    {
      title:'Html',
      description:'Learn Fundamental HTML',
      image:'https://images.unsplash.com/photo-1538024333176-f25f63f873ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
    },
    {
      title:'Html',
      description:'Learn Fundamental HTML',
      image:'https://images.unsplash.com/photo-1538024333176-f25f63f873ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',

    },
  ]
  
  return (
    <div className='container'>
      <div className='bulat'>
        <div className='avatar'>
          <Avatar />
        </div>
        <Info />
      </div>
      <div className="my"> 
        <h1>My Course</h1>
      </div>
      <div className="card">
        <Course card = {datas} />
      </div>
    </div>
    
  );
}

export default App;
