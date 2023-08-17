import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

interface IntrinsicHeightProps extends ViewProps {
  stepHeight?: number;
  children: ReactNode;
}

const IntrinsicHeight: React.FC<IntrinsicHeightProps> = ({
  stepHeight,
  children,
  ...restProps
}) => {
  const _stepHeight = stepHeight === 0.0 ? undefined : stepHeight;
  return (
    <View {...restProps}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              ...child.props,
              stepHeight: _stepHeight,
            })
          : child
      )}
    </View>
  );
};

export default IntrinsicHeight;