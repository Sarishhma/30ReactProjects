import React, { useEffect, useRef, useState } from 'react'

export default function Draw() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing,setIsDrawing]=useState(false);
    const [color,setcolor]=useState("#000000")
    const [brush,setBrush]=useState(5);
    const [isErasing, setIsErasing] = useState(false);
    useEffect(()=>{
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const ratio = window.devicePixelRatio || 1;
  canvas.width = 800 * ratio;
  canvas.height = 500 * ratio;
  canvas.style.width = "800px";
  canvas.style.height = "500px";

  ctx.scale(ratio, ratio);
  ctx.lineCap = "round";
  ctx.lineWidth = 5;

  ctxRef.current = ctx;
    },[])

    const getPos =(e)=>{
        const rect = canvasRef.current.getBoundingClientRect();
        return{
            x:e.clientX - rect.left,
            y: e.clientY - rect.top,
        }
    }
    const startDrawing =(e)=>{
        const {x,y}=getPos(e);


  ctxRef.current.globalCompositeOperation = isErasing
    ? "destination-out"
    : "source-over";
    
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(x,y);
        setIsDrawing(true);
    }
    const draw = (e)=>{
        if(!isDrawing)
            return;
        const {x,y}=getPos(e);
    
ctxRef.current.strokeStyle = color;
ctxRef.current.lineWidth = brush;

ctxRef.current.globalCompositeOperation = isErasing
  ? "destination-out"
  : "source-over";

    ctxRef.current.lineTo(x,y);
        ctxRef.current.stroke();

        ctxRef.current.beginPath();
        ctxRef.current.moveTo(x,y);
    }
    const stopDrawing =()=>{
        ctxRef.current.beginPath();
        setIsDrawing(false)
    }
    const clearCanvas =()=>{
        const canvas = canvasRef.current;
        ctxRef.current.clearRect(0,0,canvas.width,canvas.height)
    }

  return (
    <div className=''>
        <input type="color" value={color} onChange={(e)=>setcolor(e.target.value)} />
        <input type="range" min='1' max="50" value={brush} onChange={(e)=>setBrush(e.target.value)} />
        <button onClick={()=>setIsErasing(false)}>Draw</button>
        <button onClick={()=>setIsErasing(true)}>Erase</button>
        <canvas ref={canvasRef} width={800} height={500} className='bg-white border-2 border-black
         ' onMouseDown={startDrawing} onMouseUp={stopDrawing} onMouseMove={draw} onMouseLeave={stopDrawing} onTouchStart={(e) => startDrawing(e.touches[0])}
onTouchMove={(e) => {
  e.preventDefault();
  draw(e.touches[0]);
}}
onTouchEnd={stopDrawing}/>
    </div>
  )
}
