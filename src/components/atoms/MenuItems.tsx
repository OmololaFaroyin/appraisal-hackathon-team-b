
import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Colors } from '../../constants/colors';

const StyledMenuItem = styled(MuiMenuItem)(() => ({
   '&:hover:not(.Mui-disabled):not(.Mui-selected)': {
      backgroundColor: '#f6f6f6',
   },
   '&.activeList': {
      backgroundColor: Colors.LightPrimary,
   },
   '&.Mui-focusVisible': {
      backgroundColor: Colors.LightPrimary,
   },
}));

export interface MenuItemProps extends Omit<MuiMenuItemProps, 'onClick'> {
   label?: string;
   href?: string;
   children?: React.ReactNode;
   onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, props: any) => void;
}

export const MenuItem = ({ label, href, children, onClick, ...restProps }: MenuItemProps) => {
   const Anchor = (href ? Link : React.Fragment) as React.ElementType;
   return (
      <StyledMenuItem onClick={(event) => onClick?.(event, { label: label ?? '', href })} {...restProps}>
         <Anchor
            {...(href ? { style: { textDecoration: 'none', color: Colors.TextGray }, to: href ?? '' } : {})}
         >
            {children ?? label}
         </Anchor>
      </StyledMenuItem>
   );
};
