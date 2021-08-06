import React from 'react';

const ImageCard = ({image}) => {
 const tags=image.tags.split(",")
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
       <img src={image.webformatURL} alt="images"  className="w-min md:w-auto"/>
       <div className=" px-4 py-6">
       <div className=" font-bold text-purple-600 text-xl mb-2 ">
         photo by {image.user}
       </div>
       <ul>
           <li><strong>Downloads:</strong>{image.downloads}</li>
           <li><strong>Views:</strong> {image.views}</li>
           <li><strong>Likes:</strong>{image.likes}</li>
         </ul>
         </div>
        <div className="inline-block px-6 py-4">
          {tags.map((tag,index)=>(
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py 2 text-sm text-gray-700 font-semibold mr-2">
              #{tag}</span>)
          )}
         </div>
     
     </div>
    )
}

export default ImageCard;
