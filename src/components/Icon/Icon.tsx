// libs
import * as React from 'react';

// styles
import './Icon.scss';

// enums
import { IconEnum } from './enum/icon.enum';

interface IconProps {
  icon: IconEnum;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { icon } = props;

  switch (icon) {
    case IconEnum.MESSANGER:
      return <div></div>;

    case IconEnum.BIN:
      return <div></div>;

    case IconEnum.BROWSER:
      return <div></div>;

    case IconEnum.NOTES:
      return <div></div>;

    case IconEnum.PLAYER:
      return <div></div>;

    case IconEnum.TERMINAL:
      return <div></div>;

    default:
      return <></>;
  }
};

export default Icon;
