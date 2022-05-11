import React from 'react';
import { ImStarFull,ImStarHalf,ImStarEmpty } from 'react-icons/im';
import { Badge } from 'react-bootstrap';

const Rating = ({ratings,numberOfRatings}) => {
  return (
    <>
      <div 
        style={{color: "#FFBD69", fontSize: 14}} 
        className="mb-1"
      >
        {ratings>=1
          ?<ImStarFull/>
          :ratings>=.5
          ?<ImStarHalf/>
          :<ImStarEmpty/>
        }
        {ratings>=2
          ?<ImStarFull/>
          :ratings>=1.5
          ?<ImStarHalf/>
          :<ImStarEmpty/>
        }
        {ratings>=3
          ?<ImStarFull/>
          :ratings>=2.5
          ?<ImStarHalf/>
          :<ImStarEmpty/>
        }
        {ratings>=4
          ?<ImStarFull/>
          :ratings>=3.5
          ?<ImStarHalf/>
          :<ImStarEmpty/>
        }
        {ratings>=5
          ?<ImStarFull/>
          :ratings>=4.5
          ?<ImStarHalf/>
          :<ImStarEmpty/>
        }
      </div>
        
      <h6 style={{ fontSize: 14}}>
        Total 
        {" "}
        <Badge bg="secondary">
          {numberOfRatings}
        </Badge> 
        {" "}
        Ratings
      </h6>
    </>
  )
};

export default Rating;

