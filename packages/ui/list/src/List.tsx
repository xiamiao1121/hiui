import React, { forwardRef, useCallback } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { PaginationProps, Pagination } from '@hi-ui/pagination'
import { EmptyState } from '@hi-ui/empty-state'
import { ListItem } from './ListItem'

const LIST_PREFIX = getPrefixCls('list')

/**
 * TODO: What is List
 */
type Position = 'flex-start' | 'flex-end' | 'center'
const getPagePosition = (
  pagination: PaginationProps & { placement: 'left' | 'middle' | 'right' }
): Position => {
  let pagePosition: Position = 'flex-end'
  switch (pagination.placement) {
    case 'left':
      pagePosition = 'flex-start'
      break
    case 'middle':
      pagePosition = 'center'
      break

    case 'right':
      pagePosition = 'flex-end'
      break
    default:
      pagePosition = 'flex-end'
  }
  return pagePosition
}

export const List = forwardRef<HTMLDivElement | null, ListProps>(
  (
    {
      prefixCls = LIST_PREFIX,
      role = 'list',
      className,
      children,
      pagination,
      split = true,
      render,
      bordered = true,
      data,
      emptyContent = '暂无数据',
      ...rest
    },
    ref
  ) => {
    const cls = cx(prefixCls, className, {
      [`${prefixCls}--bordered`]: bordered,
      [`${prefixCls}--with-pagination`]: pagination,
    })

    const renderListItem = useCallback(
      (item, index) => {
        return (
          <li
            className={cx(`${prefixCls}-item__wrapper`, {
              [`${prefixCls}-item--split`]: split,
            })}
            key={index}
          >
            {render && render(item)}
          </li>
        )
      },
      [render, split, prefixCls]
    )

    return (
      <div ref={ref} role={role} className={cls} {...rest}>
        {data && data.length > 0 ? (
          <ul className={cx(`${prefixCls}__wrapper`)}>
            {data.map((item, index) => {
              return renderListItem(item, index)
            })}
          </ul>
        ) : (
          <EmptyState title={emptyContent} style={{ margin: 16 }} />
        )}
        {pagination && (
          <div
            className={`${prefixCls}__pagination`}
            style={{
              justifyContent: getPagePosition(
                pagination as PaginationProps & { placement: 'left' | 'middle' | 'right' }
              ),
            }}
          >
            <Pagination {...pagination} />
          </div>
        )}
      </div>
    )
  }
)

Object.assign(List, { Item: ListItem })
export interface ListProps {
  /**
   * 组件默认的选择器类
   */
  prefixCls?: string
  /**
   * 组件的语义化 Role 属性
   */
  role?: string
  /**
   * 组件的注入选择器类
   */
  className?: string
  /**
   * 组件的注入样式
   */
  style?: React.CSSProperties
  data: ListItemProps[]
  render?: (item: ListItemProps) => React.ReactNode

  split?: boolean
  pagination?: PaginationProps & { placement: 'left' | 'middle' | 'right' }
  bordered?: boolean
  emptyContent?: React.ReactNode
}
export type ListItemProps = {
  /**
   * 组件默认的选择器类
   */
  prefixCls?: string
  /**
   * 组件的注入选择器类
   */
  className?: string
  /**
   * 组件的注入样式
   */
  style?: React.CSSProperties
  title: React.ReactNode
  description?: React.ReactNode
  extra?: React.ReactNode
  avatar?: string
  action?: React.ReactNode
  actionPlacement?: 'top' | 'center' | 'bottom'
}

if (__DEV__) {
  List.displayName = 'List'
}