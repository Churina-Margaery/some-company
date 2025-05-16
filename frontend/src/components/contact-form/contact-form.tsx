import { useForm, Controller, FormProvider } from 'react-hook-form';
import { Form, Input, Button, Typography } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import Message from '../message/message';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const { Title } = Typography;

const SectionContainer = styled.section`
  text-align: center;
`;

const TitleStyled = styled(Title)`
  &.ant-typography {
    font-size: 60px;
    margin: 40px 0;
  }
`;

const StyledForm = styled(Form)`
  max-width: 600px;
  margin: 32px auto;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 24px;
  color: rgb(0, 0, 0);
`;

const StyledInput = styled(Input)`
  &&& {
    font-size: 16px;
    border-radius: 4px;
    padding: 8px 12px;
    transition: all 0.3s;

    &:focus {
      border-color: rgb(0, 0, 0);
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  &&& {
    font-size: 16px;
    border-radius: 4px;
    padding: 8px 12px;
    resize: vertical;
    min-height: 100px;
    line-height: 1.5;

    &:focus {
      border-color: rgb(0, 0, 0);
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    } 
  }
`;

const SubmitButton = styled(Button)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px; /* 1rem = 16px */
  background-color: rgb(0, 0, 0);
  color: white;
  height: 40px;
  font-weight: 500;

  &:hover {
    background-color: rgb(0, 0, 0) !important;
    color: white !important;
  }
`;

const ErrorText = styled.span`
  font-size: 14px; /* 0.875rem = 14px */
  color: #ff4d4f;
  margin-top: 4px;
  display: block;
`;

const StyledFormItem = styled(Form.Item)`
  &&& {
    .ant-form-item-label > label {
      font-family: 'Roboto', sans-serif !important;
      font-size: 18px; 
    }
  }
`;

const StyledSubmitButton = styled(SubmitButton)`
  font-size: 18px;
  &:hover,
  &:focus {
    background-color: #4a4a4a !important;
    transform: scale(1.02);
    background-image: linear-gradient(45deg,#394869,#A79EB4) !important;
    color: #fff !important;
    border: none !important;
    transition: all 0.3s ease;
  }
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
    <SectionContainer>
      {isSubmitted ? (
        <Message />
      ) : (
        <FormProvider {...methods}>
          <TitleStyled level={1}>Only CTA on the page</TitleStyled>
          <StyledForm
            layout="vertical"
            onFinish={methods.handleSubmit(onSubmit)}
          >
            <FormTitle>Contact Us</FormTitle>

            <StyledFormItem label="Name">
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
            </StyledFormItem>

            <StyledFormItem label="Email">
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
            </StyledFormItem>

            <StyledFormItem label="Message">
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
            </StyledFormItem>

            <StyledFormItem>
              <StyledSubmitButton type="primary" htmlType="submit">
                Submit
              </StyledSubmitButton>
            </StyledFormItem>
          </StyledForm>
        </FormProvider>
      )}
    </SectionContainer>
  );
};
