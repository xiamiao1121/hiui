
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-ellipsis-circle-filled')

export const EllipsisCircleFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-170.666667 362.666667h-42.666666a42.666667 42.666667 0 0 0-42.666667 42.666667v42.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h42.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 0-42.666667-42.666667z m192 0h-42.666666a42.666667 42.666667 0 0 0-42.666667 42.666667v42.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h42.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 0-42.666667-42.666667z m192 0h-42.666666a42.666667 42.666667 0 0 0-42.666667 42.666667v42.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h42.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 0-42.666667-42.666667z" p-id="44776"></path></svg>
    )
  }
)

if (__DEV__) {
  EllipsisCircleFilled.displayName = 'EllipsisCircleFilled'
}
  