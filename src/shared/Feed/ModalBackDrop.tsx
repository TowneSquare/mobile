import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useCallback } from 'react';

const ModalBackDrop = useCallback(
  (props: any) => (
    <BottomSheetBackdrop
      {...props}
      pressBehavior={'close'}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.5}
    />
  ),
  []
);

export default ModalBackDrop;
