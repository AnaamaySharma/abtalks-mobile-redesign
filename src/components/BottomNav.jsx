import { Home, Trophy, UserRound } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const { pathname } = useLocation()
  const items = [{ label: 'Home', icon: Home, to: '/' }, { label: 'Challenge', icon: Trophy, to: '/dashboard/day/12' }, { label: 'Profile', icon: UserRound, to: '/dashboard#profile' }]
  return <nav className="bottom-nav" aria-label="Main navigation">{items.map(({ label, icon: Icon, to }) => <Link key={label} to={to} className={pathname === to ? 'active' : ''}><Icon size={19} strokeWidth={2.2} /><span>{label}</span></Link>)}</nav>
}
