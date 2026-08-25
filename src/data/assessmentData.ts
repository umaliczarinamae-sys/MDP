import { OptionItem, SnapshotInsight } from '../types';

export const HOOK_OPTIONS: OptionItem[] = [
  {
    id: 'dependency',
    label: 'Managers depend too heavily on senior leadership for everyday decisions',
    description: 'Critical decisions stall until senior leaders step in and provide direction.'
  },
  {
    id: 'accountability',
    label: 'Accountability is inconsistent across teams and departments',
    description: 'Commitments are missed or vary significantly depending on oversight.'
  },
  {
    id: 'communication',
    label: 'Communication breaks down between management and operational teams',
    description: 'Strategic intent gets lost in translation across hierarchical layers.'
  },
  {
    id: 'promotion_struggle',
    label: 'Strong technical employees struggle after promotion into management',
    description: 'High individual performers find it challenging to lead and empower others.'
  },
  {
    id: 'operational_trap',
    label: 'Managers remain too operational instead of leading strategically',
    description: 'Leaders spend their days firefighting tasks rather than coaching and directing.'
  },
  {
    id: 'inconsistent_capability',
    label: 'Leadership capability and standards vary significantly across the team',
    description: 'Different teams experience vastly different qualities of management.'
  },
  {
    id: 'other',
    label: 'Another leadership challenge',
    description: 'A distinct organizational or structural leadership gap in your business.'
  }
];

export const ORG_SIZE_OPTIONS: OptionItem[] = [
  {
    id: '1-15',
    label: '1 – 15 team members',
    description: 'Founding & core executive team'
  },
  {
    id: '16-50',
    label: '16 – 50 team members',
    description: 'Emerging management and departmental leads'
  },
  {
    id: '51-200',
    label: '51 – 200 team members',
    description: 'Multi-layer operational & middle management'
  },
  {
    id: '201-500+',
    label: '201 – 500+ team members',
    description: 'Enterprise organization with diverse business units'
  }
];

export const AUTONOMY_OPTIONS: OptionItem[] = [
  {
    id: 'confident_decisions',
    label: 'Managers confidently make necessary decisions and maintain momentum',
    description: 'Operations continue smoothly with high local ownership.'
  },
  {
    id: 'routine_only',
    label: 'Routine work continues, but important decisions wait until leadership returns',
    description: 'Managers execute daily workflows but hesitate on critical judgment calls.'
  },
  {
    id: 'frequent_escalation',
    label: 'Managers frequently escalate decisions to senior leadership via message or call',
    description: 'Even when away, senior leaders remain the primary approval hub.'
  },
  {
    id: 'slows_down',
    label: 'Progress visibly slows down until senior leadership becomes available',
    description: 'Key initiatives pause and operational bottlenecks become apparent.'
  }
];

export const CAPABILITY_OPTIONS: OptionItem[] = [
  {
    id: 'decision_making',
    label: 'Decision-Making & Ownership',
    description: 'Developing independent judgment without constant validation.'
  },
  {
    id: 'accountability',
    label: 'Accountability & Follow-Through',
    description: 'Instilling disciplined ownership for outcomes across departments.'
  },
  {
    id: 'people_leadership',
    label: 'People Leadership & Empowerment',
    description: 'Shifting from task supervision to motivating and developing people.'
  },
  {
    id: 'communication',
    label: 'Cross-Functional Communication & Alignment',
    description: 'Breaking down silos and cascading clear organizational priorities.'
  },
  {
    id: 'coaching',
    label: 'Coaching & Developing Direct Reports',
    description: 'Building bench strength and elevating direct report capabilities.'
  },
  {
    id: 'strategic_thinking',
    label: 'Strategic Thinking Beyond Daily Firefighting',
    description: 'Carving out space to think ahead rather than reacting to daily crises.'
  }
];

export const DESIRED_OUTCOME_OPTIONS: OptionItem[] = [
  {
    id: 'autonomous_owners',
    label: 'Managers operating as autonomous owners who drive results independently',
    description: 'A proactive management layer that owns business outcomes.'
  },
  {
    id: 'consistent_culture',
    label: 'Consistent accountability culture with reliable execution across teams',
    description: 'Predictable delivery and shared high standards across all functions.'
  },
  {
    id: 'freed_leadership',
    label: 'Senior leadership freed from operational weeds to focus on strategic growth',
    description: 'Executives working on the business rather than in daily operations.'
  },
  {
    id: 'unified_framework',
    label: 'A unified management framework with confident, aligned team leaders',
    description: 'A shared language of leadership that scales smoothly as the business grows.'
  }
];

export const WEBINAR_EVENT = {
  title: 'Executive Leadership & Management Capability Briefing',
  dateFormatted: 'Thursday, March 12, 2026',
  timeFormatted: '2:00 PM – 3:15 PM (GMT+8)',
  duration: '75 Minutes',
  platform: 'Live via Zoom',
  format: 'Private Executive Session with Live Strategic Q&A',
  passType: 'Executive Complimentary Pass',
  explorePoints: [
    'Why capable managers often remain dependent on senior leadership for judgment calls',
    'The structural levers that strengthen managerial accountability and decision ownership',
    'What stronger, autonomous management capability looks like in day-to-day practice'
  ]
};

export function generateSnapshotInsight(
  challengeId: string,
  autonomyId: string,
  capabilityId: string,
  _orgSizeId: string
): SnapshotInsight {
  let observation = '';
  const focusAreas: { title: string; description: string }[] = [];

  if (autonomyId === 'routine_only' || autonomyId === 'frequent_escalation') {
    observation =
      'Your responses suggest that managers are handling day-to-day operational responsibilities, while important decisions continue to depend heavily on senior leadership. This dynamic can unintentionally limit opportunities for managers to build independent judgment, decision confidence, and full accountability.';
  } else if (autonomyId === 'slows_down') {
    observation =
      'Your responses indicate that organizational momentum remains closely tied to senior leadership presence. When managers encounter non-routine challenges, the decision-making process slows down, creating operational bottlenecks and keeping senior leaders tethered to daily execution.';
  } else {
    observation =
      'Your responses suggest a foundation of managerial execution, though key opportunities remain to align leadership standards, deepen proactive ownership, and transition managers from functional execution into strategic leadership.';
  }

  // Focus Area 1: Decision-Making / Autonomy
  if (challengeId === 'dependency' || autonomyId === 'frequent_escalation' || capabilityId === 'decision_making') {
    focusAreas.push({
      title: 'Decision-Making & Ownership',
      description: 'Strengthening managerial decision confidence and autonomy reduces unnecessary leadership dependency and operational delays.'
    });
  } else if (challengeId === 'operational_trap' || capabilityId === 'strategic_thinking') {
    focusAreas.push({
      title: 'Strategic Focus vs. Operational Traps',
      description: 'Creating clear operational boundaries allows leaders to shift from reactive firefighting into proactive direction and planning.'
    });
  } else {
    focusAreas.push({
      title: 'Managerial Autonomy & Judgment',
      description: 'Establishing clear decision thresholds enables leaders to resolve operational hurdles without constant upward escalation.'
    });
  }

  // Focus Area 2: Accountability / Consistency
  if (challengeId === 'accountability' || capabilityId === 'accountability') {
    focusAreas.push({
      title: 'Consistent Accountability Systems',
      description: 'Clearer outcome ownership and systematic follow-through strengthen reliable execution across departments.'
    });
  } else if (challengeId === 'inconsistent_capability') {
    focusAreas.push({
      title: 'Standardizing Leadership Capability',
      description: 'Establishing consistent leadership behaviors and expectations across all teams eliminates varied management experiences.'
    });
  } else {
    focusAreas.push({
      title: 'Accountability & Ownership',
      description: 'Reinforcing personal ownership for team outcomes ensures commitments are met consistently without senior policing.'
    });
  }

  // Focus Area 3: People Leadership / Communication / Coaching
  if (challengeId === 'promotion_struggle' || capabilityId === 'coaching' || capabilityId === 'people_leadership') {
    focusAreas.push({
      title: 'People Leadership & Coaching',
      description: 'Equipping managers with structured coaching and feedback tools helps them transition effectively from individual contributors to people developers.'
    });
  } else if (challengeId === 'communication' || capabilityId === 'communication') {
    focusAreas.push({
      title: 'Cross-Functional Communication',
      description: 'Bridging communication gaps between strategic leadership and front-line execution prevents priorities from getting diluted.'
    });
  } else {
    focusAreas.push({
      title: 'Team Empowerment & Bench Strength',
      description: 'Developing direct report capability strengthens organizational resilience and allows management to scale.'
    });
  }

  return {
    observation,
    focusAreas: focusAreas.slice(0, 3),
    corePattern: 'Autonomous Execution vs. Senior Dependency'
  };
}
