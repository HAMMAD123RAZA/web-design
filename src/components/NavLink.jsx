import { Link } from 'react-router-dom'

const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="block py-2 pl-3 pr-4 text-gray-300 font-bold sm:text-xl rounded md:p-0 hover:text-secondary-500 hover:border-b border-secondary-400"
    >
      {title}
    </Link>
  )
}

export default NavLink
