import { Grid } from "@mui/material"
import Advice from "./components/Advices"
import UserFinder from "./components/UserFinder"

function App() {
  return (
    <>
      <UserFinder />
      <Grid
        container
        justifyContent= 'center'
        textAlign= 'center'
        style={{ minHeight: '100vh' }}
      >
        <Advice />
      </Grid>
    </>
  )
}

export default App
