import React from 'react'
import {cx, css} from 'emotion'

const Button = React.forwardRef(
  ({className, active, reversed, ...props}, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? 'white'
              : '#aaa'
            : active
            ? 'black'
            : '#ccc'};
        `,
      )}
    />
  ),
)

const Icon = React.forwardRef(({className, ...props}, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      'material-icons',
      className,
      css`
        font-size: 18px;
        vertical-align: text-bottom;
      `,
    )}
  />
))

const Menu = React.forwardRef(({className, ...props}, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `,
    )}
  />
))

const Toolbar = React.forwardRef(({className, ...props}, ref) => (
  <Menu
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `,
    )}
  />
))

export {Button, Icon, Toolbar}
