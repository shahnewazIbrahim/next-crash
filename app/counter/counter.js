"use client"
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div className="my-2">
            {count}
        </div>

        <button className="bg-rose-500 px-2 py-1 rounded-md" onClick={(preveState) => setCount((preveState)=> preveState + 1)}>
            Add
        </button>

        <button className="bg-yellow-500 px-2 py-1 rounded-md mx-5" onClick={(preveState) => setCount((preveState)=> 0)}>
            Reset
        </button>
        
        </>
    )
}