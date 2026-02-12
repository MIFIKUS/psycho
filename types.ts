import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
}

// Added missing ChatMessage interface to resolve import error in AiAssistant.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
