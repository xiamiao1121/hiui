
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-relation-outlined')

export const RelationOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, ...rest }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role="icon" {...rest}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M533.333333 106.666667a128 128 0 0 1 128 128v42.666666a128.042667 128.042667 0 0 1-106.666666 126.229334v65.749333L789.333333 469.333333a85.333333 85.333333 0 0 1 85.226667 81.066667L874.666667 554.666667v65.770666c60.544 10.176 106.666667 62.805333 106.666666 126.229334v42.666666a128 128 0 0 1-128 128h-42.666666a128 128 0 0 1-128-128v-42.666666a128.042667 128.042667 0 0 1 106.666666-126.229334V554.666667l-234.666666-0.021334v65.792a128.042667 128.042667 0 0 1 106.581333 121.429334L661.333333 746.666667v42.666666a128 128 0 0 1-128 128h-42.666666a128 128 0 0 1-128-128v-42.666666a128.042667 128.042667 0 0 1 106.666666-126.229334v-65.792L234.666667 554.666667v65.770666c60.544 10.176 106.666667 62.805333 106.666666 126.229334v42.666666a128 128 0 0 1-128 128H170.666667a128 128 0 0 1-128-128v-42.666666a128.042667 128.042667 0 0 1 106.666666-126.229334V554.666667a85.333333 85.333333 0 0 1 81.066667-85.226667L234.666667 469.333333l234.666666-0.021333v-65.749333a128.042667 128.042667 0 0 1-106.581333-121.429334L362.666667 277.333333v-42.666666a128 128 0 0 1 128-128zM213.333333 704H170.666667a42.666667 42.666667 0 0 0-42.666667 42.666667v42.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h42.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 0-42.666667-42.666667z m320 0h-42.666666a42.666667 42.666667 0 0 0-42.666667 42.666667v42.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h42.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 0-42.666667-42.666667z m320 0h-42.666666a42.666667 42.666667 0 0 0-42.666667 42.666667v42.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h42.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 0-42.666667-42.666667zM533.333333 192h-42.666666a42.666667 42.666667 0 0 0-42.666667 42.666667v42.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h42.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 0-42.666667-42.666667z" p-id="38855"></path></svg>
    )
  }
)

if (__DEV__) {
  RelationOutlined.displayName = 'RelationOutlined'
}
  