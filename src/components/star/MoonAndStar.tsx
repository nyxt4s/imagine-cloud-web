export default function MoonAndStar () {
    return (
      <div className="place-items-center">
       
          <div className="w-96 h-96 rounded-[50%] shadow-[-60px_20px_0_15px_white]  flex items-center justify-center">
            <div id="star" className="absolute flex flex-col items-center justify-center animate-spin">
              <div className="w-48 bg-white h-1 rotate-90 rounded-full"></div>
              <div className="w-48 bg-white h-1 rotate-[210deg] rounded-full"></div>
              <div className="w-48 bg-white h-1 rotate-45 rounded-full"></div>
              <div className="w-48 bg-white h-1 -rotate-45 rounded-full"></div>
            </div> 
          </div>
       
      
        
      </div>
    );
  };
  