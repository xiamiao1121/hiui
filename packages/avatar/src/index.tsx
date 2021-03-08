import React from 'react'
import ClassNames from 'classnames'
import './style/index.scss'

const PREFIX = 'hix-avatar'

interface AvatarProps {
  src?: string;
  text?: string | React.ReactNode;
  secondaryText?: string | React.ReactNode;
  size?: string | number;
  initials?: string;
  shape: 'circle' | 'square';
  style?: React.CSSProperties;
  className?: string;
  icon?: string;
}

const Avatar = ({
  src,
  text,
  secondaryText,
  size = 'md',
  initials,
  shape = 'circle',
  style = {},
  className,
  icon
}: AvatarProps) => {
  return (
    <div
      className={ClassNames(PREFIX, className, { [`${PREFIX}--${size}`]: true, [`${PREFIX}--${shape}`]: true })}
      style={style}
    >
      {src ? <img src={src} /> : <span>{initials}</span>}
      <div className="hix-avatar__description">
        <div className="description__text">{text}</div>
        {<div className="description__secondary-text">{secondaryText}</div>}
      </div>
    </div>
  )
}

export default Avatar