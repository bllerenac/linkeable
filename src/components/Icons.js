/** @jsxImportSource @emotion/react */
import { TiDeleteOutline } from 'react-icons/ti';
import { css } from "@emotion/react";

const setIcon = {
  delete: TiDeleteOutline,
}

function Icon ({type, color , onClick, size}){
  const IconToRender = setIcon[type];
  return (
    <IconToRender 
      onClick={onClick}
      css={css`
      fill: ${color};
      width: 13px;
      height: 13px;
      `}
    />
  )
}

export default Icon;