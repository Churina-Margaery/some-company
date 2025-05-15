import { useForm, Controller, FormProvider } from 'react-hook-form';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import Message from '../message/message';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const StyledForm = styled(Form)`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color:rgb(0, 0, 0);
`;

const StyledInput = styled(Input)`
  &&& {
    border-radius: 4px;
    padding: 8px 12px;
    transition: all 0.3s;

    &:focus {
      border-color:rgb(0, 0, 0);
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  &&& {
    border-radius: 4px;
    padding: 8px 12px;
    resize: vertical;
    min-height: 100px;

    &:focus {
      border-color:rgb(0, 0, 0);
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  background-color:rgb(0, 0, 0);
  color: white;
  height: 40px;
  font-weight: 500;

  &:hover {
    background-color: rgb(0, 0, 0) !important;
    color: white !important;
  }
`;

const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-top: 4px;
  display: block;
`;

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Здесь будет логика отправки формы
    setIsSubmitted(true);
    methods.reset();
  };

  return (
    <>
      {isSubmitted ? (
        <Message />
      ) : (
        <FormProvider {...methods}>
          <StyledForm
            layout="vertical"
            onFinish={methods.handleSubmit(onSubmit)}
          >
            <FormTitle>Contact Us</FormTitle>

            <Form.Item label="Name">
              <Controller
                name="name"
                control={methods.control}
                rules={{ required: 'Name is required' }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledInput {...field} placeholder="Enter your name" />
                    {fieldState.error && <ErrorText>{fieldState.error.message}</ErrorText>}
                  </>
                )}
              />
            </Form.Item>

            <Form.Item label="Email">
              <Controller
                name="email"
                control={methods.control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledInput {...field} placeholder="Enter your email" />
                    {fieldState.error && <ErrorText>{fieldState.error.message}</ErrorText>}
                  </>
                )}
              />
            </Form.Item>

            <Form.Item label="Message">
              <Controller
                name="message"
                control={methods.control}
                rules={{ required: 'Message is required' }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledTextArea {...field} placeholder="Enter your message" />
                    {fieldState.error && <ErrorText>{fieldState.error.message}</ErrorText>}
                  </>
                )}
              />
            </Form.Item>

            <Form.Item>
              <SubmitButton type="primary" htmlType="submit">
                Submit
              </SubmitButton>
            </Form.Item>
          </StyledForm>
        </FormProvider>
      )}
    </>
  );
};
