import React from 'react'
import Preview from '../src'

export * from './basic.stories'
export * from './multiple.stories'
export * from './watermark.stories'
export * from './banned.stories'

export default {
  title: 'Data Display/Preview',
  component: Preview,
  decorators: [(story: Function) => <div>{story()}</div>],
}
