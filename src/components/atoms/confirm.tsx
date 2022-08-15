import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import Tooltip from "@mui/material/Tooltip"

type Props = {
  label?: any,
  openButton: JSX.Element
  contents: JSX.Element
  submit(e: React.MouseEvent): void
}

const Confirm = ({ label, openButton, contents, submit }: Props) => {

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (e: React.MouseEvent) => {
    submit(e)
    setOpen(false)
  }

  const OpenButton = () => {
    if (label !== undefined) {
      return <>
        <Tooltip title={(label !== undefined) ? label : "dialog"}  arrow>
          <Button onClick={handleClickOpen}>{openButton}</Button>
        </Tooltip>
      </>
    } else {
      return <><Button onClick={handleClickOpen}>{openButton}</Button></>
    }
  }

  const Actions = () => {
    return <>
      <div className="confirmContainer-actions">
        <Button autoFocus onClick={handleSubmit}>
          OK
        </Button>
        <Button autoFocus onClick={handleClose}>
          キャンセル
        </Button>
      </div>
    </>
  }

  return (
    <div>
      <OpenButton />
      <Dialog
        className={"confirmContainer"}
        open={open}
        onClose={handleClose}
        transitionDuration={500}
      >
        <div className="confirmContainer-contents">
          {contents}
        </div>
        <Actions />
      </Dialog>
    </div>
  )
}
export default Confirm