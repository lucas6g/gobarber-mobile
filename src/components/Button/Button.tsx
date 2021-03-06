import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './Button.styles';

// quando nao vou criar nenhuma prop

type ButtonProps = RectButtonProperties;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
