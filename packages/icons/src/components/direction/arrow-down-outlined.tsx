
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-arrow-down-outlined')

export const ArrowDownOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}   viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7393"  ><path d="M755.498667 631.168a42.666667 42.666667 0 0 0-57.621334-2.496l-2.709333 2.496L554.666667 771.690667V149.333333a42.666667 42.666667 0 1 0-85.333334 0v622.314667l-140.501333-140.48a42.666667 42.666667 0 0 0-57.621333-2.496l-2.709334 2.496a42.666667 42.666667 0 0 0-2.496 57.621333l2.496 2.709334 213.333334 213.333333 2.176 2.026667 0.341333 0.32-2.517333-2.346667a43.157333 43.157333 0 0 0 8.874666 6.826667A42.496 42.496 0 0 0 512 917.333333h0.64l1.856-0.064L512 917.333333a43.178667 43.178667 0 0 0 8.938667-0.938666 42.261333 42.261333 0 0 0 18.517333-9.066667l0.192-0.149333c0.853333-0.746667 1.706667-1.536 2.517333-2.346667l213.333334-213.333333a42.666667 42.666667 0 0 0 0-60.330667z" p-id="7394"></path></svg>
    )
  }
)

if (__DEV__) {
  ArrowDownOutlined.displayName = 'ArrowDownOutlined'
}
  