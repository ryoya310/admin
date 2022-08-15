import * as Modules from "../../common/modules"

import { useState, useEffect, useMemo, forwardRef } from "react"

import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type Props = {
  items?: any
  action?: any
}

const Message = ( { items, action } : Props) => {

  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
    console.log(reason)
    if (reason === "clickaway") {
      return
    }
    action({result: false, status: items.status, message: items.message})
  }

  // severity > export type AlertColor = 'success' | 'info' | 'warning' | 'error'
  let ret = <Alert onClose={handleClose} severity="error">{items.message}</Alert>
  if (items.status == "success") {
    ret = <Alert onClose={handleClose} severity="success">{items.message}</Alert>
  } else if (items.status == "info") {
    ret = <Alert onClose={handleClose} severity="info">{items.message}</Alert>
  } else if (items.status == "warning") {
    ret = <Alert onClose={handleClose} severity="warning">{items.message}</Alert>
  }

  return <>
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={items.result}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      {ret}
    </Snackbar>
  </>
}
export default Message