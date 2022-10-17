import React, {ReactElement} from 'react'
import classNames from 'clsx'
import styles from './Icon.module.css'

export interface IconProps {
  children: ReactElement
  'aria-label'?: string,
  'aria-hidden'?: boolean | 'false' | 'true'
}

export function Icon(props: IconProps) {
  let {
    children,
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden,
    ...otherProps
  } = props

  if (!ariaHidden) {
    ariaHidden = undefined
  }

  return React.cloneElement(children, {
    ...otherProps,
    'aria-hidden': (ariaLabel ? (ariaHidden || undefined) : true),
    role: 'img',
    className: classNames(
      styles.icon
    )
  })
}
