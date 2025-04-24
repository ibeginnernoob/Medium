// import { useState, useEffect, JSX } from 'react';
// import { Heart } from 'lucide-react';

// const AnimatedLikeButton: ({
// 	initialLiked,

// }) => JSX.Element = ({ initialLiked = false, onLike, size = 24, activeColor = '#ed4956', inactiveColor = '#262626' }) => {
//   const [liked, setLiked] = useState(initialLiked);
//   const [animating, setAnimating] = useState(false);

//   const handleClick = () => {
//     setLiked(prevLiked => !prevLiked);
//     setAnimating(true);
//     if (onLike) onLike(!liked);
//   };

//   useEffect(() => {
//     if (animating) {
//       const timer = setTimeout(() => {
//         setAnimating(false);
//       }, 700);
//       return () => clearTimeout(timer);
//     }
//   }, [animating]);

//   return (
//     <div className="relative inline-block">
//       <button
//         aria-label={liked ? "Unlike" : "Like"}
//         onClick={handleClick}
//         className={`p-1 transition-transform duration-200 hover:scale-110 relative z-10 ${animating && liked ? "animate-heartBeat" : ""}`}
//         style={{
//           background: 'transparent',
//           border: 'none',
//           cursor: 'pointer',
//           outline: 'none'
//         }}
//       >
//         <Heart 
//           size={size} 
//           fill={liked ? activeColor : 'none'} 
//           color={liked ? activeColor : inactiveColor}
//         />
//       </button>
      
//       {animating && liked && (
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-explode"
//         >
//           <div
//             className="rounded-full"
//             style={{
//               width: `${size * 1.5}px`,
//               height: `${size * 1.5}px`,
//               backgroundColor: `${activeColor}33`
//             }}
//           />
//         </div>
//       )}
      
//       <style jsx>{`
//         @keyframes heartBeat {
//           0% { transform: scale(1); }
//           15% { transform: scale(1.3); }
//           30% { transform: scale(0.9); }
//           45% { transform: scale(1.2); }
//           60% { transform: scale(0.95); }
//           100% { transform: scale(1); }
//         }
        
//         @keyframes explode {
//           0% { 
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(0);
//           }
//           50% { 
//             opacity: 0.8;
//             transform: translate(-50%, -50%) scale(1.5);
//           }
//           100% { 
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(2);
//           }
//         }
        
//         .animate-heartBeat {
//           animation: heartBeat 0.7s;
//         }
        
//         .animate-explode {
//           animation: explode 0.7s forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AnimatedLikeButton