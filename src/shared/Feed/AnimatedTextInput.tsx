import {
  View,
  TextInput,
  TextInputProps,
  Animated,
  ViewProps,
} from 'react-native';
import React, { ReactNode, forwardRef, Ref, useRef, useEffect } from 'react';

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
