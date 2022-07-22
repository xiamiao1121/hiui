
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-fullscreen-exit-outlined')

export const FullscreenExitOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M416 565.333333l3.2 0.106667A42.666667 42.666667 0 0 1 458.666667 608v192l-0.106667 3.2A42.666667 42.666667 0 0 1 416 842.666667l-3.2-0.106667A42.666667 42.666667 0 0 1 373.333333 800v-88.981333l-193.834666 193.813333-2.709334 2.496a42.666667 42.666667 0 0 1-57.621333-62.826667L312.96 650.666667H224l-3.2-0.106667a42.666667 42.666667 0 0 1 3.2-85.226667h192z m384 0a42.666667 42.666667 0 0 1 3.2 85.226667l-3.2 0.106667h-88.981333l193.813333 193.834666a42.666667 42.666667 0 0 1-57.621333 62.826667l-2.709334-2.496L650.666667 711.04V800a42.666667 42.666667 0 0 1-39.466667 42.56l-3.2 0.106667a42.666667 42.666667 0 0 1-42.56-39.466667l-0.106667-3.2v-192a42.666667 42.666667 0 0 1 39.466667-42.56l3.2-0.106667h192zM176.789333 116.672l2.709334 2.496L373.333333 312.96V224a42.666667 42.666667 0 0 1 39.466667-42.56l3.2-0.106667a42.666667 42.666667 0 0 1 42.56 39.466667l0.106667 3.2v192a42.666667 42.666667 0 0 1-39.466667 42.56l-3.2 0.106667h-192a42.666667 42.666667 0 0 1-3.2-85.226667l3.2-0.106667h88.981333L119.168 179.498667A42.666667 42.666667 0 0 1 176.789333 116.693333z m670.421334 0a42.666667 42.666667 0 0 1 57.621333 62.826667L711.04 373.333333H800l3.2 0.106667a42.666667 42.666667 0 0 1-3.2 85.226667h-192l-3.2-0.106667A42.666667 42.666667 0 0 1 565.333333 416v-192l0.106667-3.2A42.666667 42.666667 0 0 1 608 181.333333l3.2 0.106667A42.666667 42.666667 0 0 1 650.666667 224v88.981333l193.834666-193.813333z" p-id="49716"></path></svg>
    )
  }
)

if (__DEV__) {
  FullscreenExitOutlined.displayName = 'FullscreenExitOutlined'
}
  