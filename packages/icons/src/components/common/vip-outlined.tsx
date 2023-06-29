
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-vip-outlined')

export const VipOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M721.92 127.104a85.333333 85.333333 0 0 1 74.944 44.522667l2.048 3.968 115.029333 240.362666a85.333333 85.333333 0 0 1-10.666666 90.56l-3.072 3.562667-324.949334 358.762667a85.333333 85.333333 0 0 1-123.242666 3.413333l-3.264-3.413333L123.797333 510.08a85.333333 85.333333 0 0 1-15.658666-89.813333l1.92-4.309334 115.029333-240.362666a85.333333 85.333333 0 0 1 72.533333-48.384l4.437334-0.106667H721.92z m0 85.333333H302.08L187.029333 452.8 512 811.562667l324.970667-358.762667L721.92 212.437333zM661.333333 405.333333a42.666667 42.666667 0 0 1 3.2 85.226667L661.333333 490.666667H362.666667a42.666667 42.666667 0 0 1-3.2-85.226667L362.666667 405.333333h298.666666z" p-id="4726"></path></svg>
    )
  }
)

if (__DEV__) {
  VipOutlined.displayName = 'VipOutlined'
}
  