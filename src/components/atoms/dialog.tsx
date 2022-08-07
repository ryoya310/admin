import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

type Props = {
  caption: string,
  viewType?: any,
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

const OpenDialog = ({ caption, viewType, contents }: Props) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const posClass = viewType + "PositionDialog";

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>{caption}</Button>
      <Dialog
        className={posClass}
        aria-labelledby={posClass}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition(viewType)}
        transitionDuration={300}
      >
        <div className="dialogActions">
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Button autoFocus color="inherit" onClick={handleClose}>
            save
          </Button>
        </div>
        <div className="dialogContents">
          {contents}
        </div>
      </Dialog>
    </div>
  );
}
export default OpenDialog