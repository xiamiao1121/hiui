import { HiBaseSizeEnum } from '@hi-ui/core'
import { invariant } from '@hi-ui/env'
import { SpaceSizeEnum } from '../types'

const sizeValueEnum = {
  sm: 8,
  md: 16,
  lg: 24,
}

const SIZE_ENUM_LIST = Object.keys(sizeValueEnum)

/**
 *
 * @param gap 组件间间距
 * @returns 处理成标准格式flex gap
 */
export const handleTransformGap = (gap: SpaceSizeEnum) => {
  if (SIZE_ENUM_LIST.includes(gap as HiBaseSizeEnum)) {
    const activeSize = sizeValueEnum[gap as HiBaseSizeEnum]
    return activeSize
  }

  if (typeof gap === 'string' || typeof gap === 'number') {
    return Number(gap)
  }

  if (Array.isArray(gap)) {
    return gap.map((gapItem) => `${gapItem}px`).join(' ')
  }

  invariant(false, 'The gap prop is not valid value in Space')
  return gap
}
