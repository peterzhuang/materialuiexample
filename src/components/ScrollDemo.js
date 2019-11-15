import React, { useRef, useEffect } from 'react';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetBottom);

const ScrollDemo = () => {
	const myRef = useRef(null)

    useEffect(() => { 
        scrollToRef(myRef);
    }, []);

	return (
    <> 
      <div style={{height:600}} />	{/* just to demonstrate scroll*/}
      <div ref={myRef}>I wanna be seen</div> 
      {/* Attach ref object to a dom element */}
      <div style={{height:1500}} />	{/* just to demonstrate scroll*/}
      <button onClick={()=>scrollToRef(myRef)} >Click to scroll </button> 
    </>
	)

}

export default ScrollDemo;