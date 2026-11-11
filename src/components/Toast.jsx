import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <CheckCircle2 size={18} style={{ color: '#10b981' }} />
        <span>{message}</span>
      </div>
    </div>
  );
}
