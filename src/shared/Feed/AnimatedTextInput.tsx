import { ReactNode, Ref, forwardRef } from 'react';
import {
  Animated,
  TextInput,
  TextInputProps,
} from 'react-native';

interface ViewExtendsTextInputProps extends TextInputProps {
  children?: ReactNode;
  inputRef?: Ref<TextInput>; // Add inputRef to accept the ref for TextInput
}

const AnimatedTextInput = forwardRef<TextInput, ViewExtendsTextInputProps>(
  (props, ref) => {
    const { children, inputRef, ...textInputProps } = props;

    return (
      <Animated.View>
        <TextInput ref={inputRef} {...textInputProps} />
        {children}
      </Animated.View>
    );
  }
);

export default AnimatedTextInput;
