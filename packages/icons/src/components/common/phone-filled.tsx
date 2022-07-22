
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-phone-filled')

export const PhoneFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M112.042667 265.002667c14.72-119.189333 98.986667-175.744 182.485333-181.994667 37.930667-2.858667 69.248 9.770667 92.096 38.613333 9.706667 12.288 19.477333 36.117333 31.637333 73.237334 3.541333 10.794667 7.189333 22.485333 10.986667 35.008a2524.8 2524.8 0 0 1 26.389333 94.613333l2.325334 9.002667 4.010666 15.786666-11.221333 11.626667-66.197333 68.629333c42.56 85.504 116.053333 162.922667 191.744 195.52l56.341333-57.237333 10.368-10.538667 14.442667 2.56 9.130666 1.664a3104.576 3104.576 0 0 1 96.170667 19.157334c16.554667 3.626667 31.744 7.146667 45.162667 10.517333 27.093333 6.805333 46.464 12.8 58.197333 18.624 42.944 21.226667 59.84 66.624 53.269333 123.392-9.472 81.472-95.04 174.4-200.576 175.488-117.973333 1.258667-283.52-86.762667-400.618666-212.458667C177.28 544.874667 96.234667 392.938667 112.042667 265.002667z" p-id="15341"></path></svg>
    )
  }
)

if (__DEV__) {
  PhoneFilled.displayName = 'PhoneFilled'
}
  