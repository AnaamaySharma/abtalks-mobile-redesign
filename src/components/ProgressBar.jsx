export default function ProgressBar({ value, max = 60, label = true }) {
  const percent = Math.min(100, (value / max) * 100)
  return <div className="progress-wrap">
    {label && <div className="progress-label"><span>Challenge progress</span><strong>{value} / {max}</strong></div>}
    <div className="progress-track" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax={max}><span style={{ width: `${percent}%` }} /></div>
  </div>
}
