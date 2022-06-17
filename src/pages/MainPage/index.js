import React, { useState } from 'react'
import MainPageContainer from '../../containers/MainPage'
import { MdMenu } from 'react-icons/md'

const MainPage = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <div>
      <MainPageContainer sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
      {<MdMenu style={{color: 'white', width: '45px', height: '45px'}} onClick={()=>{setSideBarOpen(true); 
      console.log('setSideBarOpen: ', sideBarOpen);
      }}/>}
    </div>
  )
}

export default MainPage