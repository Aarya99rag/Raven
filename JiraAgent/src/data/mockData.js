export const EVIDENCE_ITEMS = [
  {
    id: 1,
    source: 'Jira',
    type: 'Ticket',
    title: 'FEATURE-XYZ: Update theme to new design system',
    description: 'Design team requested to update theme for brand consistency and better accessibility.',
    date: 'May 10, 2024',
    author: 'Neha Sharma',
    status: 'Done',
    statusColor: 'bg-green-100 text-green-700'
  },
  {
    id: 2,
    source: 'GitHub',
    type: 'Pull request',
    title: '#218 feat: update theme tokens and UI variables',
    description: 'Implemented new color tokens, updated theme variables and removed old palette.',
    date: 'May 12, 2024',
    author: 'Rohan Singh',
    status: 'Merged',
    statusColor: 'bg-purple-100 text-purple-700'
  },
  {
    id: 3,
    source: 'Teams',
    type: 'Thread',
    title: 'Design discussion – theme contrast issues',
    description: 'Team discussed that the previous theme had low contrast in dark mode and didn\'t meet WCAG standards.',
    date: 'May 11, 2024',
    tag: '#design-system channel',
    status: null
  },
  {
    id: 4,
    source: 'Outlook',
    type: 'Email',
    title: 'Re: Brand guidelines update',
    description: 'The client requested the product to match the new brand palette and guidelines.',
    date: 'May 9, 2024',
    from: 'design@company.com',
    status: null
  }
];

export const PEOPLE = [
  { name: 'Neha Sharma', role: 'Product Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { name: 'Rohan Singh', role: 'Frontend Engineer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { name: 'Amit Verma', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' }
];

export const FILES = [
  { name: 'theme.ts', path: 'src/styles' },
  { name: 'designTokens.json', path: 'src/config' },
  { name: 'FeatureXYZView.tsx', path: 'src/components' }
];
