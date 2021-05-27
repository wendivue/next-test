import { ButtonHTMLAttributes, ElementType } from 'react';

type Props = {
  href?: string;
  isSmall?: boolean;
  isDelete?: boolean;
  as?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type { Props };
