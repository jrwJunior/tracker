/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

// Styles components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogBodyWrapper,
  DialogBody,
  Close,
} from 'views/styled/modals';
import { ButtonPrimary } from 'views/styled/buttons';

Dialog.setAppElement('#root');

const ModalSuccessful = ({ isOpen }: { isOpen: boolean }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  const handleClickClose = (): void => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <Dialog
          isOpen={isOpen}
          style={{
            overlay: {
              backgroundColor: 'rgba(20,22,27,.9)',
            },
          }}
        >
          <DialogContent>
            <Close type="button" onClick={handleClickClose}>
              <span>
                <VscChromeClose size={20} />
              </span>
            </Close>
            <DialogBodyWrapper>
              <DialogBody>
                <div>
                  <svg viewBox="0 0 116 121" width="65" height="65">
                    <g fill="none" fillRule="evenodd">
                      <path
                        stroke="#CACDD6"
                        strokeLinecap="round"
                        d="M41.529 91.929H.5V.5h74.285v45.828M17.643 23.357h40M17.643 40.5h40M50.843 57.643h-33.2"
                      />
                      <path
                        d="M40.5 83.357c0-20.513 16.63-37.143 37.143-37.143s37.142 16.63 37.142 37.143c0 20.514-16.629 37.144-37.142 37.144-20.514 0-37.143-16.63-37.143-37.144z"
                        stroke="#212A46"
                        strokeLinecap="round"
                      />
                      <path
                        d="M92.27 68.84c-1.012-.91-2.272.111-5.274 2.695-2.08 1.786-3.515 3.198-5.44 5.176-5.07 5.216-8.76 10.137-10.084 11.974l-5.651-3.26c-1.406-.884-2.141-1.19-2.761-.673a1.355 1.355 0 0 0-.413.812c-.045.612.327 1.147 1.12 2.044 3.6 4.085 8.898 10.243 8.9 10.245a1 1 0 0 0 1.68-.263c2.488-5.847 6.068-11.823 10.64-17.764.567-.738 1.083-1.425 1.57-2.078 1.114-1.486 2.075-2.77 3.205-4.027 2.338-2.6 2.922-3.355 2.879-4.103a1.264 1.264 0 0 0-.37-.779"
                        fill="#00D093"
                      />
                    </g>
                  </svg>
                </div>
                <DialogTitle>Ви успішно створили користувача</DialogTitle>
                <DialogBody>
                  <ButtonPrimary
                    className="css-button"
                    variant="primary"
                    mr={2}
                    height={50}
                    fontSize={15}
                    onClick={handleClickClose}
                  >
                    Створити нового користувача
                  </ButtonPrimary>
                </DialogBody>
              </DialogBody>
            </DialogBodyWrapper>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ModalSuccessful;
