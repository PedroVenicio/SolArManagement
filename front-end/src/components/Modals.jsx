import React, { useState, useContext, useEffect } from 'react';
import { Modal, Box } from '@mui/material';
import { ModalContext } from '../contexts/ModalContext';
import Delete from './Delete';
import Edit from './Edit';
import History from './History';
import RegisterCostumer from './RegisterCostumer';

const Modals = ({ data, status }) => {

  const { modals, setModals } = useContext(ModalContext)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (modals !== 0) {
      setOpen(true)
    }
    else {
      setOpen(false)
    }
  }, [modals])

  const handleClose = () => {
    setOpen(false)
    setModals(0)
  }

  const modalType = () => {
    if (modals === 1) {
      return <History />
    }
    else if (modals === 2) {
      return <Edit data={data} />
    }
    else if (modals === 3) {
      return <Delete data={data} />
    }
    else if (modals === 4) {
      return <RegisterCostumer status={status} />
    }
  }


  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box className='box'>
        {modalType()}
      </Box>
    </Modal>
  )
}

export default Modals