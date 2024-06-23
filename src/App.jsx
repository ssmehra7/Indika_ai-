import { Container } from "postcss"
import Message from "./components/Message"
import Navbar from "./components/Navbar"
import SecondaryNavbar from "./components/SecondaryNavbar"
import Box from "./util/Container"


function App() {
  return (
    <div className="my-2">
      <div className="border-b-2">
        <Box>
          <nav>
            <Navbar />
          </nav>
        </Box>
      </div>

<div className="border-s justify-start flex items-center py-3 shadow ">
<Box>
    <nav>
        <SecondaryNavbar />
      </nav>
    </Box>
</div>
   
      
      <div className=" my-4 mx-16 border-b-2">
        <Message />
      </div>
    </div>

  )
}

export default App
