export const nav = ['About', 'Skills', 'Projects', 'Stack', 'Contact']

export const skills = [
  {
    icon: '⚡',
    label: 'Languages',
    color: 'lavender',
    items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java'],
  },
  {
    icon: '🎨',
    label: 'Frontend',
    color: 'blue',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: '🔧',
    label: 'Backend',
    color: 'peach',
    items: ['Node.js', 'Express.js', 'Firebase', 'Prisma', 'MySQL'],
  },
  {
    icon: '🤖',
    label: 'AI / ML',
    color: 'lavender',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Data Analysis', 'ML Models'],
  },
  {
    icon: '🛠️',
    label: 'Tools',
    color: 'blue',
    items: ['Figma', 'Git', 'VS Code', 'Postman', 'REST APIs'],
  },
  {
    icon: '📐',
    label: 'Concepts',
    color: 'peach',
    items: ['DSA', 'OOP', 'DBMS', 'Web Dev', 'Data Viz'],
  },
]

export const projects = [
  {
    id: 1,
    icon: '✅',
    title: 'ToDo List App',
    description: 'A clean, responsive task management application focused on simplicity and usability for daily productivity.',
    tech: ['React', 'JavaScript', 'CSS'],
    features: ['Interactive & dynamic UI', 'Real-time task updates', 'Fully responsive design'],
    live: 'https://todolist-sand-xi-58.vercel.app/',
    code: 'https://github.com/pragya238/todoList',
    gradient: 'from-lavender-soft to-lavender-light',
    accent: '#c9b8e8',
    status: 'live',
  },
  {
    id: 2,
    icon: '💰',
    title: 'Finance Tracker',
    description: 'Personal finance management — track expenses, monitor savings, and analyze spending patterns with interactive charts.',
    tech: ['React', 'JavaScript', 'Chart.js', 'CSS'],
    features: ['Expense & savings tracking', 'Interactive data visualization', 'Budget management system'],
    live: 'https://finance-track-nu.vercel.app/',
    code: 'https://github.com/pragya238/Finance_Track',
    gradient: 'from-bluesoft-soft to-[#d0e8f5]',
    accent: '#b8d4e8',
    status: 'live',
  },
  {
    id: 3,
    icon: '🧠',
    title: 'AI / ML Project',
    description: 'A predictive machine learning model solving real-world classification problems through data analysis and feature engineering.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    features: ['Predictive classification model', 'Data preprocessing pipeline', 'Visual insight reporting'],
    live: null,
    code: null,
    gradient: 'from-peach-soft to-[#fde0d0]',
    accent: '#f5cdb8',
    status: 'coming-soon',
  },
]

export const stack = [
  { label: 'React', category: 'Frontend' },
  { label: 'Next.js', category: 'Frontend' },
  { label: 'Tailwind', category: 'Frontend' },
  { label: 'TypeScript', category: 'Language' },
  { label: 'Node.js', category: 'Backend' },
  { label: 'Express', category: 'Backend' },
  { label: 'Prisma', category: 'Backend' },
  { label: 'MySQL', category: 'Database' },
  { label: 'Firebase', category: 'Backend' },
  { label: 'Python', category: 'Language' },
  { label: 'Pandas', category: 'AI/ML' },
  { label: 'NumPy', category: 'AI/ML' },
  { label: 'Scikit-learn', category: 'AI/ML' },
  { label: 'Figma', category: 'Design' },
  { label: 'Git', category: 'Tools' },
  { label: 'Postman', category: 'Tools' },
  { label: 'REST APIs', category: 'Backend' },
  { label: 'Framer Motion', category: 'Frontend' },
]

export const marqueeItems = [
  'React', '✦', 'Next.js', '✦', 'TypeScript', '✦', 'Node.js', '✦',
  'Express', '✦', 'Prisma', '✦', 'MySQL', '✦', 'Firebase', '✦',
  'Python', '✦', 'Pandas', '✦', 'Scikit-learn', '✦', 'Figma', '✦',
  'Tailwind CSS', '✦', 'REST APIs', '✦', 'Git', '✦', 'Data Viz', '✦',
]
