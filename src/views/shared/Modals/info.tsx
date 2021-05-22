/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import * as Yup from 'yup';
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
import { FieldError } from 'views/styled/fields';
import { ButtonPrimary } from 'views/styled/buttons';

// Components
import Form from 'views/shared/Form';
import FormField from 'views/Ui/inputField';
// import Indicator from 'views/Ui/indicator';

Dialog.setAppElement('#root');

interface ModalInfoProps {
  title: string;
  trigger: React.ReactElement;
  onUpdate: (data: any) => void;
  options: {
    buttonText: string | undefined;
    error?: string | null;
    data?: {
      [key: string]: any;
    };
    form: {
      inputLabel?: string | undefined;
      name?: string | undefined;
      defaultValue?: string;
    };
  };
}

const ModalInfo = ({ title, trigger, options, onUpdate }: ModalInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { buttonText = 'Додати посаду', error, form, data } = options;
  const { inputLabel, name, defaultValue } = {
    inputLabel: form.inputLabel ?? 'Назва посади',
    name: form.name ?? 'position',
    defaultValue: form.defaultValue,
  };

  const handleOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleOpen })}

      {isOpen && (
        <Dialog
          isOpen={isOpen}
          onRequestClose={handleClose}
          style={{
            overlay: {
              backgroundColor: 'rgba(20,22,27,.9)',
            },
          }}
        >
          <DialogContent>
            <Close type="button" onClick={handleClose}>
              <span>
                <VscChromeClose size={20} />
              </span>
            </Close>
            <DialogBodyWrapper>
              <DialogBody>
                <DialogTitle>{title}</DialogTitle>
                <div>
                  <Form
                    schema={Yup.object().shape({
                      [name]: Yup.string().required(
                        "обов'язково до заповнення",
                      ),
                    })}
                    onFetch={formData =>
                      onUpdate({ name: formData.position, ...data })
                    }
                  >
                    {({ register, errors }: any) => (
                      <>
                        <FormField
                          ref={register}
                          name={name}
                          placeholder={inputLabel}
                          defaultValue={defaultValue}
                          autoFocus
                          errors={errors}
                        />
                        <ButtonPrimary
                          className="css-button"
                          variant="primary"
                          type="submit"
                          mr={2}
                          height={38}
                          fontSize={15}
                        >
                          {/* { data.isSubmitted && <Indicator /> } */}
                          {buttonText}
                        </ButtonPrimary>
                      </>
                    )}
                  </Form>
                  <FieldError>{error}</FieldError>
                </div>
              </DialogBody>
            </DialogBodyWrapper>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ModalInfo;
