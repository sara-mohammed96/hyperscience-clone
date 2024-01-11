import React from 'react';

function HeroCenter() {
  return (
    <div className="relativ h-screen">
      <video
        className="w-full h-full  object-cover absolute top-0 left-0 z-0"
        autoPlay
        muted
        loop
        playsInline
      > 
    
        <source src="https://player.vimeo.com/progressive_redirect/playback/825883366/rendition/540p/file.mp4?loc=external&amp;signature=89ff1899d9966cf933ed8dfd6e55cb67799c764813e61bea472425a3d10cc034" type="video/mp4" />
      </video>
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50 text-white">
        <h4 className="text-sm font-light">Industry Leading</h4>
        <h1 className="text-4xl font-bold">Enterprise AI Platform</h1>
        <h5 className="text-sm font-light">Machine[s] Learning. Humans Teaching.</h5>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py" > click</button>
        <div> 
            <h1> thats just for the video noth</h1>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/3 '> </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCenter;
