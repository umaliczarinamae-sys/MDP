export interface ContactInfo {
  name: string;
  role: string;
  organization: string;
  phone: string;
  email: string;
}

export interface AssessmentResponse {
  challenge: string;
  customChallenge?: string;
  contact: ContactInfo;
  orgSize: string;
  autonomyState: string;
  capabilityArea: string;
  desiredOutcome: string;
  isRegistered: boolean;
  registrationId?: string;
  registeredAt?: string;
}

export interface OptionItem {
  id: string;
  label: string;
  description?: string;
  iconName?: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface SnapshotInsight {
  observation: string;
  focusAreas: FocusArea[];
  corePattern: string;
}
