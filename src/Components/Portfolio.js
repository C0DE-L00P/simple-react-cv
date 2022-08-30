import React from 'react'
import DesignCard from './DesignCard';

function Protfolio(){
    return(
        <div>
            <div className='container text-center mt-4'>
            <h2 className='display-5'>Portfolio</h2>

            </div>
        <div className='d-flex flex-wrap container justify-content-center p-4'>
            
            <DesignCard type='Web Design' src='https://cdn.dribbble.com/users/2441488/screenshots/8798344/media/d1671e50fdd0d95fbdd4b91ee6b157e7.jpg'/>
            <DesignCard type='Web Design' src='https://i.pinimg.com/originals/03/c6/41/03c6411eaab129cba863ca27ac1d4929.png'/>
            <DesignCard type='Web Design' src='https://th.bing.com/th/id/OIP.Q8B5gWoVx7JaenIt2YknAQHaE8?pid=ImgDet&rs=1'/>
            <DesignCard type='Web Design' src='https://th.bing.com/th/id/OIP.3dKvcZJjtuZOUX2aCkUmhQAAAA?pid=ImgDet&rs=1'/>
            <DesignCard type='Web Design' src='https://i.pinimg.com/originals/e0/b6/fb/e0b6fbf855b94c2014d6df963e954fd3.png'/>
        </div>
        </div>
    )
}

export default Protfolio