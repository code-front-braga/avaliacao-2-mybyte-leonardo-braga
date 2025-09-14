import './index.css'

import UIResult from "./components/ui-result"

function App() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      {/* A UIResult é o resultado final. Ela é chamada em App que é renderizado na tela para o usuário.*/}
      <UIResult />
    </main>
  )
}

export default App
