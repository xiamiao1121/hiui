
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-sort-descending-outlined'
const _prefix = getPrefixCls(_role)

export const SortDescendingOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M391.73 253.622l0.204 0.22a4 4 0 0 1-0.204 5.438l-0.26 0.236a4 4 0 0 1-2.568 0.934h-80.452V409l0.01 0.002v482h-80V524.112l-0.01-0.382v-263.28H148l-0.346-0.014a4 4 0 0 1-2.482-6.814l120.45-120.45 0.22-0.204a4 4 0 0 1 5.438 0.204l120.45 120.45zM620.058 476l26.956-76.16h128.528L801.536 476H880L751.472 134h-77.5L544 476h76.058zM754 344h-88l44.238-126h0.952L754 344zM856.64 890v-63.226h-188.794l183.99-219.38V548h-269.98v63.226h169.578l-183.99 219.38V890z" p-id="11495"></path></svg>
    )
  }
)

if (__DEV__) {
  SortDescendingOutlined.displayName = 'SortDescendingOutlined'
}
  