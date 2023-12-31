import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
	 <header>
		<ul>
			<li><Link to='/home'>Home</Link></li>
			<li><Link to='/form'>Form</Link></li>
			<li><Link to='/products'>Product</Link></li>
		</ul>
	 </header>
  )
}

export default Header