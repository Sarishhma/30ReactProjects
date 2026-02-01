
// import React, { useState, useRef, useEffect } from 'react';


// // Sample playlist data
// const initialPlaylist = [
//   {
//     id: 1,
//     title: "Angle wings",
//     artist: "Mdison beer",
//     duration: "3:45",
//     src: "https://youtu.be/4kp_RCn8A08?si=3YrUcW_1JFxjNO3P",
//     cover: "https://picsum.photos/200/200?random=1"
//   },
//   {
//     id: 2,
//     title: "I just might",
//     artist: "Bruno mars",
//     duration: "3:32",
//     src: "https://youtu.be/mrV8kK5t0V8?si=o8yniwSf4AdfxyCo",
//     cover: "https://picsum.photos/200/200?random=2"
//   },
//   {
//     id: 3,
//     title: "SMero hajur",
//     artist: "swopna suman",
//     duration: "6:05",
//     src: "https://youtu.be/YJC5Qk3OprY?si=uq8yPFCL2tCtF_NK",
//     cover: "https://picsum.photos/200/200?random=3"
//   }
// ];

// const MusicPlayer = () => {
//   // Refs
//   const audioRef = useRef(null);
//   const progressBarRef = useRef(null);
  
//   // State
//   const [playlist, setPlaylist] = useState(initialPlaylist);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [isMuted, setIsMuted] = useState(false);
//   const [playbackRate, setPlaybackRate] = useState(1);
//   const [isLooping, setIsLooping] = useState(false);
//   const [isShuffling, setIsShuffling] = useState(false);
//   const [showPlaylist, setShowPlaylist] = useState(true);

//   const currentSong = playlist[currentSongIndex];

//   // Initialize audio
//   useEffect(() => {
//     const audio = audioRef.current;
    
//     const updateTime = () => setCurrentTime(audio.currentTime);
//     const updateDuration = () => setDuration(audio.duration);
//     const handleEnded = () => playNext();
    
//     audio.addEventListener('timeupdate', updateTime);
//     audio.addEventListener('loadedmetadata', updateDuration);
//     audio.addEventListener('ended', handleEnded);
    
//     return () => {
//       audio.removeEventListener('timeupdate', updateTime);
//       audio.removeEventListener('loadedmetadata', updateDuration);
//       audio.removeEventListener('ended', handleEnded);
//     };
//   }, []);

//   // Play/Pause functionality
//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const playSong = (index) => {
//     setCurrentSongIndex(index);
//     setIsPlaying(true);
//     setTimeout(() => {
//       audioRef.current.play();
//     }, 100);
//   };

//   const playNext = () => {
//     if (isShuffling) {
//       const randomIndex = Math.floor(Math.random() * playlist.length);
//       setCurrentSongIndex(randomIndex);
//     } else {
//       setCurrentSongIndex((prev) => 
//         prev === playlist.length - 1 ? 0 : prev + 1
//       );
//     }
//     setIsPlaying(true);
//     setTimeout(() => {
//       audioRef.current.play();
//     }, 100);
//   };

//   const playPrevious = () => {
//     setCurrentSongIndex((prev) => 
//       prev === 0 ? playlist.length - 1 : prev - 1
//     );
//     setIsPlaying(true);
//     setTimeout(() => {
//       audioRef.current.play();
//     }, 100);
//   };

//   // Progress bar handlers
//   const handleProgressClick = (e) => {
//     const progressBar = progressBarRef.current;
//     const clickPosition = e.nativeEvent.offsetX;
//     const progressBarWidth = progressBar.clientWidth;
//     const percentage = (clickPosition / progressBarWidth) * 100;
//     const newTime = (percentage / 100) * duration;
    
//     audioRef.current.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const formatTime = (time) => {
//     if (isNaN(time)) return "0:00";
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   // Volume controls
//   const handleVolumeChange = (e) => {
//     const newVolume = parseFloat(e.target.value);
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume;
//     setIsMuted(newVolume === 0);
//   };

//   const toggleMute = () => {
//     if (isMuted) {
//       audioRef.current.volume = volume;
//     } else {
//       audioRef.current.volume = 0;
//     }
//     setIsMuted(!isMuted);
//   };

//   // Playlist management
//   const addToPlaylist = (song) => {
//     const newSong = {
//       ...song,
//       id: playlist.length + 1
//     };
//     setPlaylist([...playlist, newSong]);
//   };

//   const removeFromPlaylist = (index) => {
//     if (index === currentSongIndex) {
//       playNext();
//     }
//     const newPlaylist = playlist.filter((_, i) => i !== index);
//     setPlaylist(newPlaylist);
//     if (currentSongIndex >= newPlaylist.length) {
//       setCurrentSongIndex(newPlaylist.length - 1);
//     }
//   };

//   const reorderPlaylist = (fromIndex, toIndex) => {
//     const newPlaylist = [...playlist];
//     const [removed] = newPlaylist.splice(fromIndex, 1);
//     newPlaylist.splice(toIndex, 0, removed);
//     setPlaylist(newPlaylist);
//     if (currentSongIndex === fromIndex) {
//       setCurrentSongIndex(toIndex);
//     } else if (
//       currentSongIndex > fromIndex && 
//       currentSongIndex <= toIndex
//     ) {
//       setCurrentSongIndex(currentSongIndex - 1);
//     } else if (
//       currentSongIndex < fromIndex && 
//       currentSongIndex >= toIndex
//     ) {
//       setCurrentSongIndex(currentSongIndex + 1);
//     }
//   };

//   // Audio effects
//   const changePlaybackRate = (rate) => {
//     setPlaybackRate(rate);
//     audioRef.current.playbackRate = rate;
//   };

//   const toggleLoop = () => {
//     setIsLooping(!isLooping);
//     audioRef.current.loop = !isLooping;
//   };

//   return (
//     <div className="music-player">
//       {/* Audio element */}
//       <audio
//         ref={audioRef}
//         src={currentSong.src}
//         preload="metadata"
//       />

//       {/* Player Controls */}
//       <div className="player-controls">
//         <div className="song-info">
//           <img 
//             src={currentSong.cover} 
//             alt={currentSong.title}
//             className="album-cover"
//           />
//           <div>
//             <h3>{currentSong.title}</h3>
//             <p>{currentSong.artist}</p>
//           </div>
//         </div>

//         <div className="progress-section">
//           <div 
//             className="progress-bar" 
//             ref={progressBarRef}
//             onClick={handleProgressClick}
//           >
//             <div 
//               className="progress" 
//               style={{ width: `${(currentTime / duration) * 100}%` }}
//             />
//           </div>
//           <div className="time-display">
//             <span>{formatTime(currentTime)}</span>
//             <span>{formatTime(duration)}</span>
//           </div>
//         </div>

//         <div className="control-buttons">
//           <button 
//             onClick={() => setIsShuffling(!isShuffling)}
//             className={isShuffling ? 'active' : ''}
//             title="Shuffle"
//           >
//             🔀
//           </button>
//           <button onClick={playPrevious} title="Previous">
//             ⏮
//           </button>
//           <button onClick={togglePlay} className="play-btn">
//             {isPlaying ? '⏸' : '▶'}
//           </button>
//           <button onClick={playNext} title="Next">
//             ⏭
//           </button>
//           <button 
//             onClick={toggleLoop}
//             className={isLooping ? 'active' : ''}
//             title="Loop"
//           >
//             🔁
//           </button>
//         </div>

//         <div className="volume-section">
//           <button onClick={toggleMute} title="Mute">
//             {isMuted || volume === 0 ? '🔇' : volume > 0.5 ? '🔊' : '🔉'}
//           </button>
//           <input
//             type="range"
//             min="0"
//             max="1"
//             step="0.01"
//             value={isMuted ? 0 : volume}
//             onChange={handleVolumeChange}
//             className="volume-slider"
//           />
//         </div>

//         <div className="playback-rate">
//           <select 
//             value={playbackRate}
//             onChange={(e) => changePlaybackRate(parseFloat(e.target.value))}
//           >
//             <option value="0.5">0.5x</option>
//             <option value="0.75">0.75x</option>
//             <option value="1">1x</option>
//             <option value="1.25">1.25x</option>
//             <option value="1.5">1.5x</option>
//             <option value="2">2x</option>
//           </select>
//         </div>

//         <button 
//           onClick={() => setShowPlaylist(!showPlaylist)}
//           className="toggle-playlist"
//         >
//           {showPlaylist ? 'Hide Playlist' : 'Show Playlist'}
//         </button>
//       </div>

//       {/* Playlist */}
//       {showPlaylist && (
//         <div className="playlist-section">
//           <div className="playlist-header">
//             <h3>Playlist ({playlist.length} songs)</h3>
//             <button 
//               onClick={() => addToPlaylist({
//                 title: `New Song ${playlist.length + 1}`,
//                 artist: "Unknown Artist",
//                 duration: "0:00",
//                 src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//                 cover: "https://picsum.photos/200/200?random=" + (playlist.length + 1)
//               })}
//               className="add-song-btn"
//             >
//               + Add Song
//             </button>
//           </div>
          
//           <div className="playlist">
//             {playlist.map((song, index) => (
//               <div 
//                 key={song.id}
//                 className={`playlist-item ${index === currentSongIndex ? 'active' : ''}`}
//                 draggable
//                 onDragStart={(e) => {
//                   e.dataTransfer.setData('text/plain', index.toString());
//                 }}
//                 onDragOver={(e) => e.preventDefault()}
//                 onDrop={(e) => {
//                   e.preventDefault();
//                   const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
//                   reorderPlaylist(fromIndex, index);
//                 }}
//               >
//                 <img 
//                   src={song.cover} 
//                   alt={song.title}
//                   className="playlist-cover"
//                 />
//                 <div className="playlist-song-info">
//                   <h4>{song.title}</h4>
//                   <p>{song.artist}</p>
//                 </div>
//                 <span className="duration">{song.duration}</span>
//                 <div className="playlist-actions">
//                   <button 
//                     onClick={() => playSong(index)}
//                     className="play-btn"
//                   >
//                     {index === currentSongIndex && isPlaying ? '⏸' : '▶'}
//                   </button>
//                   <button 
//                     onClick={() => removeFromPlaylist(index)}
//                     className="remove-btn"
//                   >
//                     🗑
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MusicPlayer;

import React, { useRef, useState } from 'react'
export default function Music() {
  const audioRef = useRef(null);
  const [isPlaying,setIsPlaying]=useState(false);
  const togglePlay =()=>{
    if (isPlaying){
      audioRef.current.pause();
}
else
  {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying)
  }
  return (
    <div>
            <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <button onClick={togglePlay}>{isPlaying ? "pause":"play"}</button>
    </div>
  )
}
