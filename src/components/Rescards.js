import {PIC_URL} from '../utils/constant';

const Rescards=(props)=>{
    const {resdata}=props;
    const {name,cuisines,avgRating,cloudinaryImageId}=resdata?.info;
     return (
          <div className='rescard-shell'>
          <div className="rescard">
                  <img alt="arabianmajlis" src={PIC_URL+cloudinaryImageId}/>
                  <h3>{name}</h3>
                  <h4>{avgRating}* Stars</h4>
                  <h5>{cuisines.join(" , ")}</h5>
          </div>
          </div>
     )
 }

export default Rescards;