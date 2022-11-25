import React from 'react'
import Space from '@hi-ui/space'
import Button from '@hi-ui/button'
import Table from '../src'

/**
 * @title 异步加载数据
 * @desc 封装了分页加载数据的逻辑
 */
export const DataSource = () => {
  const [columns] = React.useState([
    { title: 'ID', dataKey: 'id' },
    { title: 'Title', dataKey: 'title' },
  ])

  const [updateVal, setUpdateVal] = React.useState(0)

  const handleDataSource = React.useCallback((current, pageSize) => {
    return {
      url: 'https://mife-gallery.test.mi.com/hiui/stores',
      params: {
        page: current,
        pageSize: pageSize,
      },
      transformResponse: (res) => {
        const data = JSON.parse(res).data

        return {
          list: data.map((item, i) => {
            return {
              key: i,
              title: item.title + current,
              id: item.id,
            }
          }),
          total: 28,
        }
      },
    }
  }, [])

  return (
    <>
      <h1>DataSource for Table</h1>
      <div className="table-data-source__wrap" style={{ minWidth: 660, background: '#fff' }}>
        <Space align="center" style={{ marginBottom: '1em' }}>
          <Button onClick={() => setUpdateVal(updateVal + 1)}>点击更新 updateDataStatus</Button>
          <small>更新后表格会从第一页开始重新加载数据</small>
        </Space>
        <Table
          columns={columns}
          dataSource={handleDataSource}
          updateDataStatus={updateVal}
          // @ts-ignore
          // pagination={{
          //   showTotal: true,
          //   pageSizeOptions: [5, 10, 20],
          // }}
        />
      </div>
    </>
  )
}
