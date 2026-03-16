import { useState } from 'react'



function App() {
  

  return (
 <>
  {/* Header */}
  <div className="flex flex-col bg-emerald-500 items-center md:h-16 h-16 justify-center">
    <h1 className="text-xl md:text-2xl text-white font-bold">Timer Dashboard</h1>
  </div>

  {/* Add Device Section */}
 
  {/* Add Device Card */}
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white rounded-xl shadow-lg p-8 w-80 md:w-96 flex items-center justify-center">
      <h1 className="text-xl md:text-2xl font-bold text-emerald-500">Add Device</h1>
    </div>
  </div>
</>
  )
}

export default App
