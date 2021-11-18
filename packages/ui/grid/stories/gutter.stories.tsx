import React from 'react'
import { Row, Col } from '../src'

export const Gutter = () => {
  const blockStyle: React.CSSProperties = {
    width: '100%',
    padding: '16px 0',
    textAlign: 'center',
    opacity: '.8',
    color: '#fff',
  }

  return (
    <>
      <h1>Gutter</h1>
      <div className="grid-gutter__wrap">
        <Row gutter={true}>
          <Col span={6}>
            <div style={{ ...blockStyle, backgroundColor: '#4284f5' }}>
              col-6
              <br />
              25%
            </div>
          </Col>
          <Col span={6}>
            <div style={{ ...blockStyle, backgroundColor: '#ff6700' }}>
              col-6
              <br />
              25%
            </div>
          </Col>
          <Col span={6}>
            <div style={{ ...blockStyle, backgroundColor: '#4284f5' }}>
              col-6
              <br />
              25%
            </div>
          </Col>
          <Col span={6}>
            <div style={{ ...blockStyle, backgroundColor: '#ff6700' }}>
              col-6
              <br />
              25%
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
