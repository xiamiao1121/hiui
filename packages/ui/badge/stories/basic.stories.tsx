import React from 'react'
import Badge from '../src'
import { Button } from '@hi-ui/button'
import { BellOutlined } from '@hi-ui/icons'

export const Basic = () => {
  return (
    <>
      <h1>红点</h1>
      <div className="badge-basic__wrap">
        <Badge type="dot">
          <Button type="default">最新报表</Button>
        </Badge>
        <br />
        <br />
        <Badge type="dot">
          <BellOutlined style={{ fontSize: '24px' }} />
        </Badge>
      </div>
    </>
  )
}