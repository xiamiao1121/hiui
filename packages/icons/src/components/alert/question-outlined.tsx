import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-question-outlined')

export const QuestionOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, ...rest }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg
        className={cls}
        ref={ref}
        role="icon"
        {...rest}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
      >
        <path
          d="M512 725.333333a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m23.04-520.533333c127.146667 0 186.026667 74.24 186.026667 160.426667 0 91.306667-64.853333 151.04-150.186667 176.64l-1.045333 66.368a42.666667 42.666667 0 0 1-42.666667 42.005333H503.893333a42.666667 42.666667 0 0 1-42.666666-42.24l-0.896-86.4a42.666667 42.666667 0 0 1 32.896-41.962667c7.594667-1.792 13.888-3.52 18.901333-5.162666 50.922667-16.896 91.2-48.789333 91.2-101.568 0-37.546667-32.426667-58.88-69.973333-58.88-24.426667 0-48.213333 8.853333-66.346667 27.541333-6.122667 6.293333-12.906667 17.578667-20.373333 33.877333a21.333333 21.333333 0 0 1-22.4 12.224l-73.984-10.56a21.333333 21.333333 0 0 1-17.578667-26.730666c2.432-8.896 4.672-15.936 6.741333-21.12C372.48 245.717333 450.005333 204.8 535.04 204.8z"
          p-id="47791"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  QuestionOutlined.displayName = 'QuestionOutlined'
}
