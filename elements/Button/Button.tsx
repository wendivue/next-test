import Link from 'next/link';

import { Props } from './Button.model';
import * as S from './Button.styles';

const Button = ({ href, isSmall, isDelete, ...rest }: Props): JSX.Element =>
  href ? (
    <Link href={href}>
      <S.Button {...rest} isSmall={isSmall} isDelete={isDelete} />
    </Link>
  ) : (
    <S.Button as="button" {...rest} isSmall={isSmall} isDelete={isDelete} />
  );

export { Button };
