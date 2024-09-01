import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
//   return <div 
//     ref={myRef}>
//     Foreground content goes here
//   </div>

    return (
        <div 
        ref={myRef}
        style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1
        }}
        >
        <div style={{ position: 'relative', zIndex: 1 }}>
            Foreground content goes here
        </div>
        </div>
    )
}

export default MyComponent;



// import React, { useState, useEffect, useRef } from 'react';
// import BIRDS from 'vanta/dist/vanta.birds.min';
// import * as THREE from 'three';

// const VantaBackground = () => {
//   const [vantaEffect, setVantaEffect] = useState(null);
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         BIRDS({
//           el: vantaRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 600.0,
//           minWidth: 600.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return (
//     <div ref={vantaRef} style={{ width: '100%', height: '100vh' }}>
//       Foreground content goes here
//     </div>
//   );
// };

// export default VantaBackground;