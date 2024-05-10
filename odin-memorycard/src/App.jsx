// components
import { MainDisplay } from "./Components/MainDisplay"

// Styled container 
function Container({ children }) {
  return (
    <div className="md:container m-auto p-4">
        {children}
    </div>
  )
}


export default function App() {
  return(
    <div className='app'>
      <Container>
        <MainDisplay />
      </Container>
    </div>
  )
}

