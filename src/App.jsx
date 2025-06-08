
import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero, About, Contact, Experience, Feedbacks, Tech, Works, Resume } from './components'
// import {Resume} from './components'
import { StarsCanvas } from './components'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-herp-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />

          <Resume />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
