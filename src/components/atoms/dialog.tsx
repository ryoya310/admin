import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";

import { TransitionProps } from "@mui/material/transitions";
import { read } from "fs";

type Props = {
  label?: any,
  viewType?: any,
  className?: any,
  readonly?: boolean,
  openButton: JSX.Element
  contents: JSX.Element
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

const OpenDialog = ({ label, viewType, className, readonly, openButton, contents }: Props) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Button autoFocus onClick={handleClose}>
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
        transitionDuration={500}
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