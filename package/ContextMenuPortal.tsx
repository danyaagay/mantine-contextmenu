import { Portal } from '@mantine/core';
import { useClickOutside, useHotkeys, useWindowEvent } from '@mantine/hooks';
import { ContextMenu, type ContextMenuProps } from './ContextMenu';
import { ContextMenuOverlay } from './ContextMenuOverlay';

export type ContextMenuPortalProps = ContextMenuProps & {
  zIndex?: number;
};

export function ContextMenuPortal({ onHide, ...otherProps }: ContextMenuProps) {
  useWindowEvent('resize', onHide);
  useWindowEvent('scroll', onHide);
  useHotkeys([['Escape', onHide]]);
  const ref = useClickOutside(onHide);

  return (
    <Portal>
        <ContextMenu {...otherProps} onHide={onHide} />
    </Portal>
  );
}
