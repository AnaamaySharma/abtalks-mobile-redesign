import { Link } from 'react-router-dom'

export default function Brand({ light = false }) {
  return <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="ABTalks home"><span className="brand-mark">ab</span><span>talks</span></Link>
}
