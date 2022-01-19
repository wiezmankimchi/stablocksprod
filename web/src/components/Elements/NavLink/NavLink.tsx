import { Link, useLocation } from '@redwoodjs/router'

type LinkType = typeof Link

interface NavLinkProps {
  to: string
  className?: string
  nonActiveClassName?: string
  activeClassName?: string
  children: React.ReactNode
}

const NavLink = React.forwardRef((props: NavLinkProps, ref) => {
  const {
    to,
    nonActiveClassName,
    activeClassName,
    className,
    children,
    ...rest
  } = props
  const { pathname } = useLocation()

  const active =
    to === '/'
      ? pathname === '/'
        ? true
        : false
      : pathname === to
      ? true
      : false
  const nonActiveClass = nonActiveClassName || ''
  const activeClass = activeClassName || ''

  return (
    <Link
      to={to}
      ref={ref}
      className={`${active ? activeClass : nonActiveClass} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  )
})

export default NavLink
