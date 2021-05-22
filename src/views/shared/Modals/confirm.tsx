/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';

// Styles components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogBodyWrapper,
  DialogBody,
  DialogFooter,
} from 'views/styled/modals';
import { ButtonCancel, ButtonOk } from 'views/styled/buttons';

Dialog.setAppElement('#root');

interface ModalConfirmProps {
  onDelete: (id: number) => void;
  data: {
    [key: string]: any;
  };
}

const ModalConfirm = ({ onDelete, data }: ModalConfirmProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = (): void => {
    setIsOpen(true);
  };

  const handleClickClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <span role="button" aria-label="Видалити" onClick={handleClickOpen}>
        <IoTrashOutline size={36} color="#134464" />
      </span>
      {isOpen && (
        <Dialog
          isOpen={isOpen}
          style={{
            overlay: {
              backgroundColor: 'rgba(20,22,27,.9)',
            },
          }}
        >
          <DialogContent>
            <DialogBodyWrapper>
              <DialogBody>
                <DialogTitle>
                  Ви впевнені, що хочете видалити посаду?
                </DialogTitle>
                <DialogFooter>
                  <ButtonCancel
                    className="css-button"
                    variant="primary"
                    mr={2}
                    height={32}
                    fontSize={15}
                    onClick={handleClickClose}
                  >
                    Скасуваты
                  </ButtonCancel>
                  <ButtonOk
                    className="css-button"
                    variant="primary"
                    mr={2}
                    height={32}
                    fontSize={15}
                    onClick={() => onDelete(data.id)}
                  >
                    Видалити
                  </ButtonOk>
                </DialogFooter>
              </DialogBody>
            </DialogBodyWrapper>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ModalConfirm;
