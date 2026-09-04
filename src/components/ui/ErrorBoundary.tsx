'use client';

import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary] Caught error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          style={{
            position:        'fixed',
            bottom:          '1.5rem',
            right:           '1.5rem',
            padding:         '0.75rem 1rem',
            background:      'rgba(239,68,68,0.1)',
            border:          '1px solid rgba(239,68,68,0.2)',
            borderRadius:    '8px',
            color:           '#FCA5A5',
            fontSize:        '0.78rem',
            zIndex:          900,
            maxWidth:        '220px',
            fontFamily:      'sans-serif',
          }}
        >
          ⚠️ Widget failed to load. <button
            onClick={() => this.setState({ hasError: false })}
            style={{ background: 'none', border: 'none', color: '#FCA5A5', cursor: 'pointer', padding: 0, fontSize: '0.78rem', textDecoration: 'underline' }}
          >Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}
