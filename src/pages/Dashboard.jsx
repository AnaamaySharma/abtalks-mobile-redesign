import { ArrowRight, CheckCircle2, ChevronRight, Flame, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import BottomNav from '../components/BottomNav'
import ProgressBar from '../components/ProgressBar'
import { achievements, challenge, student } from '../data/mockData'

export default function Dashboard() { return <main className="app-shell"><AppHeader /><div className="dashboard-content">
  <section className="greeting"><p>Sunday, 9 August</p><h1>Good evening, {student.name} <span>✦</span></h1><div className="streak-line"><Flame size={18} fill="currentColor"/><strong>{student.streak} day streak</strong><span>Keep building.</span></div></section>
  <section className="today-card"><div className="today-top"><span className="pill pill-dark">DAY {student.day}</span><span className="tiny-label">TODAY’S BUILD</span></div><h2>{challenge.title}</h2><p>{challenge.duration} · {challenge.difficulty}</p><div className="today-footer"><span><span className="small-dot"/> Starts your next proof</span><Link to="/dashboard/day/12" className="round-arrow" aria-label="Open today's challenge"><ArrowRight size={19}/></Link></div></section>
  <section className="progress-panel"><ProgressBar value={student.day}/><div className="progress-caption"><span>You’re building a public body of work.</span><strong>48 days to go</strong></div></section>
  <section className="recovery-card"><div className="recovery-icon"><Sparkles size={19}/></div><div><span className="tiny-label">STREAK SHIELD</span><h3>Life happens. Your journey continues.</h3><p>Miss a day? Pick up the next build without losing sight of your progress.</p></div><ChevronRight size={19}/></section>
  <section className="section-block"><div className="section-head"><div><p className="section-kicker">YOUR MOMENTUM</p><h2>Small wins, adding up.</h2></div><Link to="/dashboard/day/12">View all</Link></div><div className="achievement-row">{achievements.map(a => <article className={`achievement ${a.unlocked ? '' : 'locked'}`} key={a.name}><span>{a.icon}</span><div><strong>{a.name}</strong><small>{a.detail}</small></div>{a.unlocked && <CheckCircle2 size={15}/>}</article>)}</div></section>
  <section className="profile-empty" id="profile"><div className="avatar-placeholder">{student.initials}</div><div><span className="tiny-label">MAKE YOUR WORK EASIER TO FIND</span><h3>Add your public profile</h3><p>Connect your GitHub and LinkedIn when you’re ready.</p></div><button aria-label="Complete profile"><ArrowRight size={18}/></button></section>
  <p className="demo-note">Demo student experience · progress is illustrative</p>
</div><BottomNav /></main> }
