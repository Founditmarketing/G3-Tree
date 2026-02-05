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
  LOCATION = 'LOCATION'
}