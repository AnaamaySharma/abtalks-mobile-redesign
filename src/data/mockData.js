export const challenge = {
  day: 12,
  totalDays: 60,
  title: 'Build a REST API with authentication',
  shortTitle: 'REST API + Auth',
  difficulty: 'Intermediate',
  duration: '2–3 hours',
  category: 'Software Engineering',
  reason: 'Modern apps need secure accounts. Today you’ll practise the building block behind every product users can sign into.',
  brief: 'Create a small REST API for a notes app. Users should be able to register, sign in and access only their own notes.',
  requirements: ['Set up a Node.js + Express server', 'Create register and login endpoints', 'Protect a notes route with authentication', 'Write a clear README with setup steps'],
  done: ['API endpoints work locally', 'Authentication protects your notes route', 'README explains your approach', 'Project is pushed to GitHub', 'You’ve shared your build publicly'],
}

export const student = {
  name: 'Aarav',
  initials: 'AK',
  day: 12,
  totalDays: 60,
  streak: 11,
  completedDays: 11,
  xp: 1100,
  recoveryAvailable: true,
}

export const achievements = [
  { icon: '⚡', name: 'First push', detail: 'Day 1', unlocked: true },
  { icon: '🔥', name: '7-day rhythm', detail: 'Day 7', unlocked: true },
  { icon: '◌', name: 'Halfway there', detail: 'Day 30', unlocked: false },
]

export const journey = [
  { range: 'Days 1–20', name: 'Find your rhythm', note: 'Small wins, every day.' },
  { range: 'Days 21–40', name: 'Build in public', note: 'Turn work into proof.' },
  { range: 'Days 41–60', name: 'Show what changed', note: 'Leave with a portfolio.' },
]
