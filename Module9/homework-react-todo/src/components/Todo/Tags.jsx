import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import tags from '../../seeders/tags.json'

const Tags = ({
                items,
                onItemsClick,
                isVertical,
                isDisabled,
                isInline,
                className,
                ...attrs
              }) => {
  const classes = classNames('ui-button-group', className, {
    isVertical,
    isInline,
  })
  return (
    <div className='view-sidebar__content'>
      {
        isVertical ? (
          <div className='ui-button-group isVertical'>
            <span className='ui-tag'>vue</span>
            <span className='ui-tag'>react</span>
            <span className='ui-tag'>angular</span>
          </div>
        ) : (
          <div className='ui-button-group'>
            <span className='ui-tag'>vue</span>
            <span className='ui-tag'>react</span>
            <span className='ui-tag'>angular</span>
          </div>
        )
      }
    </div>
  )
}

Tags.propTypes = {
  items: propTypes.array,
  isVertical: propTypes.bool,
  isDisabled: propTypes.bool,
  isInline: propTypes.bool,
  onItemClick: propTypes.func,
}

Tags.defaultProps = {
  items: [],
  isVertical: false,
  isInline: false,
  isDisabled: false,
  onItemClick: () => {
  },
}

export default Tags
