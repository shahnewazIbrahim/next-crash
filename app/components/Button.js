'use client'

export default function Button() {
    return (
        <div className="mt-5">
            <button className="bg-green-500 px-2 py-1 rounded-sm " onClick={()=>console.log('I have clicked here')}>
                Click here
            </button>
        </div>
    )
}