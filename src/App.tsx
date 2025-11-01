// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          // url: 'https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.yaml',
          url:'public/openapi.yaml',
        },
      }}
    />
  )
}

export default App
