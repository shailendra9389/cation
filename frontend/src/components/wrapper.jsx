import { useState } from 'react'
import ThreeDViewer from './ThreeDViewer'

export default function Wrapper() {
  const [canvasKey, setCanvasKey] = useState(0)

  return (
    <ThreeDViewer
      key={canvasKey}
      resetCanvas={() => setCanvasKey(prev => prev + 1)}
    />
  )
}
