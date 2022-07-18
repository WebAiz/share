// @flow
import * as React from 'react';
import {Backdrop, Fade, Modal} from '@mui/material';

type Props = {
  children: any
};

export function CustomModal({children}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        {children}
      </Fade>
    </Modal>
  );
}