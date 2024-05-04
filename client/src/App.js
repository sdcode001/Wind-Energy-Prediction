
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Main from "./component/Main";
import WindMain from "./component/WindMail";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function App() {
  const [open, setopen] = useState(false)
  const {result} = useSelector((state) => state.manu)
  console.log(result)
  useEffect(() => {
    if (result) {
      setopen(true)
    }
  }, [result])
  const handler = () => {
    setopen(false)
  }
  return (
    <>
      {open && <>
        <Dialog
          open={open}
          onClose={handler}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Evaluated wind energy:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <h1>Output Energy (KWh) : {result.output_power_prediction}</h1>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <WindMain />
      </>}
      {!open && <>
        <WindMain />
        <Main />
      </>}
    </>

  );
}

export default App;
