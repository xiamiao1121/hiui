
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-fullscreen-outlined')

export const FullscreenOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M635.456 575.338667l2.709333 2.496L832 771.626667V682.666667a42.666667 42.666667 0 0 1 39.466667-42.56L874.666667 640a42.666667 42.666667 0 0 1 42.56 39.466667L917.333333 682.666667v192a42.666667 42.666667 0 0 1-39.466666 42.56L874.666667 917.333333h-192a42.666667 42.666667 0 0 1-3.2-85.226666L682.666667 832h88.981333l-193.813333-193.834667a42.666667 42.666667 0 0 1 57.621333-62.826666z m-246.912 0a42.666667 42.666667 0 0 1 57.621333 62.826666L252.373333 832H341.333333l3.2 0.106667A42.666667 42.666667 0 0 1 341.333333 917.333333H149.333333l-3.2-0.106666A42.666667 42.666667 0 0 1 106.666667 874.666667v-192l0.106666-3.2A42.666667 42.666667 0 0 1 149.333333 640l3.2 0.106667A42.666667 42.666667 0 0 1 192 682.666667v88.981333l193.834667-193.813333zM874.666667 106.666667l3.2 0.106666A42.666667 42.666667 0 0 1 917.333333 149.333333v192l-0.106666 3.2A42.666667 42.666667 0 0 1 874.666667 384l-3.2-0.106667A42.666667 42.666667 0 0 1 832 341.333333v-88.981333l-193.834667 193.813333-2.709333 2.496a42.666667 42.666667 0 0 1-57.621333-62.826666L771.626667 192H682.666667l-3.2-0.106667A42.666667 42.666667 0 0 1 682.666667 106.666667h192zM341.333333 106.666667a42.666667 42.666667 0 0 1 3.2 85.226666L341.333333 192h-88.981333l193.813333 193.834667a42.666667 42.666667 0 0 1-57.621333 62.826666l-2.709333-2.496L192 252.373333V341.333333a42.666667 42.666667 0 0 1-39.466667 42.56L149.333333 384a42.666667 42.666667 0 0 1-42.56-39.466667L106.666667 341.333333V149.333333a42.666667 42.666667 0 0 1 39.466666-42.56L149.333333 106.666667h192z" p-id="49706"></path></svg>
    )
  }
)

if (__DEV__) {
  FullscreenOutlined.displayName = 'FullscreenOutlined'
}
  