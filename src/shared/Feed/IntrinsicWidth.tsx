import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

interface IntrinsicWidthProps extends ViewProps {
  stepWidth?: number;
  stepHeight?: number;
  children: ReactNode;
}

const IntrinsicWidth: React.FC<IntrinsicWidthProps> = ({
  stepWidth,
  stepHeight,
  children,
  ...restProps
}) => {
  const _stepWidth = stepWidth === 0.0 ? undefined : stepWidth;
  const _stepHeight = stepHeight === 0.0 ? undefined : stepHeight;

  return (
    <View {...restProps}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              ...child.props,
              stepWidth: _stepWidth,
              stepHeight: _stepHeight,
            })
          : child
      )}
    </View>
  );
};

export default IntrinsicWidth;
