import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Receiver } from "./components";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="253744825786-3cnngmlt6tlao4a2shubo1u00qi88rts.apps.googleusercontent.com" scopes={['https://mail.google.com/']}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Receiver />
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
