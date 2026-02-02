import React from 'react'
import Featuredetails from './Featuredetails'
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
const Features = () => {
  return (
    <div>
        <Featuredetails value={[{icon:<TrackChangesIcon/>,title:"At vero eos",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."},{icon:<PersonOutlineOutlinedIcon/>,title:"At vero eos",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."},{icon:<AssessmentOutlinedIcon/>,title:"At vero eos",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."}]}/>
    </div>
  )
}

export default Features
