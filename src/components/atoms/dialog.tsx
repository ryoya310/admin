import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";

import { TransitionProps } from "@mui/material/transitions";

type Props = {
  label?: any
  viewType?: any
  className?: any
  readonly?: boolean
  openButton: JSX.Element
  contents: JSX.Element
  result?: boolean
  submit?(e: React.MouseEvent, set: any): void
}

const Transition_up = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Transition_left = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Transition_right = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const Transition = (viewType: string | null) => {
  if (viewType == "up") {
    return Transition_up;
  } else if (viewType == "left") {
    return Transition_right;
  } else if (viewType == "right") {
    return Transition_left;
  }
}

const OpenDialog = ({ label, viewType, className, readonly, openButton, contents, result, submit }: Props) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.MouseEvent) => {

    if (submit) {
      submit(e, setOpen)
    }
  }

  const posClass = viewType + "PositionDialog";

  const OpenButton = () => {
    if (label !== undefined) {
      return <>
        <Tooltip title={(label !== undefined) ? label : "dialog"}  arrow>
          <Button onClick={handleClickOpen}>{openButton}</Button>
        </Tooltip>
      </>;
    } else {
      return <><Button onClick={handleClickOpen}>{openButton}</Button></>;
    }
  }

  const Actions = () => {

    if (readonly === true) {
      return <></>;
    } else {
      return <>
        <div className="dialogContainer-actions">
          <Button autoFocus onClick={handleSubmit}>
            保存
          </Button>
          <Button autoFocus onClick={handleClose}>
            閉じる
          </Button>
        </div>
      </>;
    }
  }

  return (
    <div>
      <OpenButton />
      <Dialog
        className={"dialogContainer " + posClass + " " + className}
        aria-labelledby={posClass}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition(viewType)}
        transitionDuration={300}
      >
        <div className="dialogContainer-header">
          <IconButton className="close" onClick={handleClose}><CloseIcon /></IconButton>
        </div>
        <div className="dialogContainer-contents">
          {contents}
        </div>
        <Actions />
      </Dialog>
    </div>
  );
}
export default OpenDialog