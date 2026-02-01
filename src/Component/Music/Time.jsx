import React, { useEffect, useState } from 'react'

const initialPlaylist = [
  {
    id: 1,
    title: "SoundHelix Song 1",
    artist: "Demo Artist",
    duration: "—",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://picsum.photos/200/200?random=1",
  },
  {
    id: 2,
    title: "SoundHelix Song 2",
    artist: "Demo Artist",
    duration: "—",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://picsum.photos/200/200?random=2",
  },
  {
    id: 3,
    title: "SoundHelix Song 3",
    artist: "Demo Artist",
    duration: "—",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://picsum.photos/200/200?random=3",
  },
];


export default function Time() {
    const [currentTime,setCurrentTime]=useState(0);
    const [duration,setDuration]=useState(0);

    useEffect(()=>{
        const audio = audioRef.current;

        const updateTime =()=>setCurrentTime(audio.currentTime);
        const updateDuration =()=> setDuration(audio.currentTime);

        audio.addEventLister("timeupdate",updateTime);
        audio.addEventLister("loadedmetadata",updateDuration);

        return()=>{
            audio.removeEventListener("timeupdate",updateTime);
            audio.removeEventListener("loadmetadata",updateDuration)
        }

    })
  return (
    <div>
<p>{Math.floor(currentTime)}/{Math.floor(duration)}</p>
    </div>
  )
}
