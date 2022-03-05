import React from 'react'


import lips from '../images/lips.png'
import essentials from '../images/essentials.png'
import eyes from '../images/eyes.png'
import face from '../images/face.png'




export default function Categories(props) {

  let categories = [lips, essentials, eyes, face]

  

  const getContent = () => {
    let content =[];

    for(let i = 0; i < 4; i++) {
      content.push(
        <div className="category__bar">
          <img src={categories[i]} />
      </div>
      )
    }

    return content;
  }



  return (
    <div className="categories__bars">      
        {getContent()}
    </div>
  )



  
}


