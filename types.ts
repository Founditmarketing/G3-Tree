import React from 'react';

export interface TreeService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  dataMetric: string; // "Data" aspect
}

export interface AnalysisResult {
  species: string;
  healthScore: number;
  healthStatus: string;
  issues: string[];
  recommendations: string[];
  estimatedUrgency: 'Low' | 'Medium' | 'Critical';
}

export enum ViewState {
  HOME = 'HOME',
  ANALYZER = 'ANALYZER',
  SERVICES = 'SERVICES',
  CONTACT = 'CONTACT',
  LOCATION = 'LOCATION',
  SERVICE_DETAIL = 'SERVICE_DETAIL'
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceAction {
  label: string;
  targetView: ViewState;
}

export interface ServiceContent {
  id: string; // matches the ViewState ID if needed, or a slug
  title: string;
  subtitle: string;
  heroImage?: string; // Optional URL for hero background
  introText: string; // The "SEO" dense text
  specs: ServiceSpec[];
  faqs: FAQItem[];
  actions: ServiceAction[];
}