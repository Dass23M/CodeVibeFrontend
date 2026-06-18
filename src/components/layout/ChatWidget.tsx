'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  ChatMessage,
  getBotResponse,
  getWelcomeMessage,
  generateId,
  QUICK_REPLY_URLS,
} from '@/lib/chatbot';

// ── Markdown-like renderer (bold, newlines, links) ─────────────────
function renderText(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // Bold: **text**
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
        )}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

// ── Single message bubble ──────────────────────────────────────────
function MessageBubble({ msg }: { msg: ChatMessage }) {
  const isBot = msg.role === 'bot';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isBot ? 'row' : 'row-reverse',
        alignItems: 'flex-end',
        gap: '0.5rem',
        marginBottom: '0.75rem',
        animation: 'msgSlideIn 0.3s cubic-bezier(0.16,1,0.3,1) both',
      }}
    >
      {/* Avatar */}
      {isBot && (
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2F6FED 0%, #1A56CC 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(47,111,237,0.3)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="8" width="18" height="12" rx="3" fill="white" opacity="0.9" />
            <rect x="9" y="4" width="6" height="6" rx="2" fill="white" />
            <circle cx="8.5" cy="13.5" r="1.5" fill="#2F6FED" />
            <circle cx="15.5" cy="13.5" r="1.5" fill="#2F6FED" />
            <rect x="9" y="16" width="6" height="1.5" rx="0.75" fill="#2F6FED" />
          </svg>
        </div>
      )}

      {/* Bubble */}
      <div style={{ maxWidth: '82%' }}>
        <div
          style={{
            padding: '0.65rem 0.9rem',
            borderRadius: isBot ? '0.125rem 1rem 1rem 1rem' : '1rem 0.125rem 1rem 1rem',
            backgroundColor: isBot ? '#ffffff' : '#2F6FED',
            color: isBot ? '#1E293B' : '#ffffff',
            fontSize: '0.82rem',
            lineHeight: '1.55',
            boxShadow: isBot
              ? '0 1px 4px rgba(0,0,0,0.08)'
              : '0 2px 10px rgba(47,111,237,0.35)',
            border: isBot ? '1px solid #E8EFFE' : 'none',
            wordBreak: 'break-word',
          }}
        >
          {renderText(msg.text)}
        </div>
        <div
          style={{
            fontSize: '0.65rem',
            color: '#94A3B8',
            marginTop: '0.2rem',
            textAlign: isBot ? 'left' : 'right',
            paddingLeft: isBot ? '0.25rem' : 0,
            paddingRight: isBot ? 0 : '0.25rem',
          }}
        >
          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
}

// ── Typing indicator ───────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '0.5rem',
        marginBottom: '0.75rem',
        animation: 'msgSlideIn 0.3s both',
      }}
    >
      <div
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2F6FED 0%, #1A56CC 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="8" width="18" height="12" rx="3" fill="white" opacity="0.9" />
          <rect x="9" y="4" width="6" height="6" rx="2" fill="white" />
          <circle cx="8.5" cy="13.5" r="1.5" fill="#2F6FED" />
          <circle cx="15.5" cy="13.5" r="1.5" fill="#2F6FED" />
          <rect x="9" y="16" width="6" height="1.5" rx="0.75" fill="#2F6FED" />
        </svg>
      </div>
      <div
        style={{
          padding: '0.6rem 0.9rem',
          backgroundColor: '#ffffff',
          border: '1px solid #E8EFFE',
          borderRadius: '0.125rem 1rem 1rem 1rem',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
          display: 'flex',
          gap: '0.3rem',
          alignItems: 'center',
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#2F6FED',
              animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Quick reply chips ──────────────────────────────────────────────
function QuickReplies({
  replies,
  onSelect,
}: {
  replies: string[];
  onSelect: (r: string) => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.4rem',
        flexWrap: 'wrap',
        padding: '0 0.75rem 0.5rem',
      }}
    >
      {replies.map((r) => {
        const url = QUICK_REPLY_URLS[r];
        const isExternal = url?.startsWith('http');
        if (url && !isExternal) {
          return (
            <Link
              key={r}
              href={url}
              style={{
                display: 'inline-block',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#2F6FED',
                background: '#EBF1FD',
                border: '1px solid rgba(47,111,237,0.25)',
                borderRadius: '100px',
                padding: '0.3rem 0.7rem',
                textDecoration: 'none',
                transition: 'all 0.18s ease',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#2F6FED';
                el.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#EBF1FD';
                el.style.color = '#2F6FED';
              }}
            >
              {r}
            </Link>
          );
        }
        if (url && isExternal) {
          return (
            <a
              key={r}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#2F6FED',
                background: '#EBF1FD',
                border: '1px solid rgba(47,111,237,0.25)',
                borderRadius: '100px',
                padding: '0.3rem 0.7rem',
                textDecoration: 'none',
                transition: 'all 0.18s ease',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#2F6FED';
                el.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#EBF1FD';
                el.style.color = '#2F6FED';
              }}
            >
              {r}
            </a>
          );
        }
        return (
          <button
            key={r}
            onClick={() => onSelect(r)}
            style={{
              display: 'inline-block',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#2F6FED',
              background: '#EBF1FD',
              border: '1px solid rgba(47,111,237,0.25)',
              borderRadius: '100px',
              padding: '0.3rem 0.7rem',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
              whiteSpace: 'nowrap',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = '#2F6FED';
              el.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = '#EBF1FD';
              el.style.color = '#2F6FED';
            }}
          >
            {r}
          </button>
        );
      })}
    </div>
  );
}

// ── Main ChatWidget ────────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [unread, setUnread] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Init welcome message
  useEffect(() => {
    setMessages([getWelcomeMessage()]);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when opened + lock body scroll on mobile
  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
      if (isMobile) document.body.classList.add('chat-open');
    } else {
      document.body.classList.remove('chat-open');
    }
    return () => { document.body.classList.remove('chat-open'); };
  }, [open, isMobile]);

  const handleOpen = () => {
    setOpen(true);
    setHasOpened(true);
    setUnread(0);
  };

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMsg: ChatMessage = {
        id: generateId(),
        role: 'user',
        text: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputText('');
      setIsTyping(true);

      // Simulate AI typing delay (600–900ms)
      const delay = 600 + Math.random() * 300;
      setTimeout(() => {
        const response = getBotResponse(trimmed);
        const botMsg: ChatMessage = {
          id: generateId(),
          role: 'bot',
          text: response.text,
          timestamp: new Date(),
          quickReplies: response.quickReplies,
        };
        setIsTyping(false);
        setMessages((prev) => [...prev, botMsg]);
        if (!open) setUnread((n) => n + 1);
      }, delay);
    },
    [open]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputText);
    }
  };

  // Last bot message quick replies
  const lastBotMsg = [...messages].reverse().find((m) => m.role === 'bot');

  return (
    <>
      {/* ── Floating Toggle Button ── */}
      <button
        aria-label={open ? 'Close chat' : 'Open Code Vibe AI chat'}
        onClick={open ? () => setOpen(false) : handleOpen}
        style={{
          position: 'fixed',
          bottom: '5.75rem',
          right: '1.75rem',
          zIndex: 998,
          width: '3.25rem',
          height: '3.25rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2F6FED 0%, #1A56CC 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(47,111,237,0.45)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          color: '#fff',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.transform = 'scale(1.1)';
          el.style.boxShadow = '0 6px 28px rgba(47,111,237,0.6)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.transform = 'scale(1)';
          el.style.boxShadow = '0 4px 20px rgba(47,111,237,0.45)';
        }}
      >
        {open ? (
          // Close icon
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          // Chat bot icon
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="7" width="20" height="13" rx="3" fill="white" opacity="0.95" />
            <rect x="8.5" y="3" width="7" height="6" rx="2" fill="white" />
            <circle cx="8" cy="13" r="1.8" fill="#2F6FED" />
            <circle cx="16" cy="13" r="1.8" fill="#2F6FED" />
            <rect x="9" y="16.5" width="6" height="1.5" rx="0.75" fill="#2F6FED" />
          </svg>
        )}

        {/* Unread badge */}
        {!open && unread > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              backgroundColor: '#EF4444',
              color: '#fff',
              fontSize: '0.65rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #fff',
            }}
          >
            {unread}
          </div>
        )}

        {/* Pulse ring (only when closed and never opened) */}
        {!open && !hasOpened && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '50%',
              border: '2px solid rgba(47,111,237,0.4)',
              animation: 'chatPulse 2s ease-out infinite',
              pointerEvents: 'none',
            }}
          />
        )}
      </button>

      {/* ── Chat Panel ── */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label="Code Vibe AI Chat"
        aria-modal="true"
        className="chat-panel"
        style={isMobile ? {
          // Mobile: full-width bottom sheet
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '88dvh',
          zIndex: 997,
          borderRadius: '1.25rem 1.25rem 0 0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.18)',
          transform: open ? 'translateY(0)' : 'translateY(100%)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease',
          transformOrigin: 'bottom center',
        } : {
          // Desktop: compact corner card
          position: 'fixed',
          bottom: '10rem',
          right: '1.75rem',
          width: '360px',
          height: '480px',
          zIndex: 997,
          borderRadius: '1.25rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 20px rgba(47,111,237,0.12)',
          transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Mobile drag handle */}
        {isMobile && (
          <div style={{ backgroundColor: '#fff', paddingTop: '0.6rem', paddingBottom: '0.1rem', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ width: '36px', height: '4px', borderRadius: '2px', backgroundColor: '#D1DCF5' }} />
          </div>
        )}

        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #2F6FED 0%, #1A56CC 100%)',
            padding: isMobile ? '0.7rem 1rem' : '0.85rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            flexShrink: 0,
          }}
        >
          {/* Bot avatar */}
          <div
            style={{
              width: isMobile ? '34px' : '36px',
              height: isMobile ? '34px' : '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="7" width="20" height="13" rx="3" fill="white" opacity="0.95" />
              <rect x="8.5" y="3" width="7" height="6" rx="2" fill="white" />
              <circle cx="8" cy="13" r="1.8" fill="#2F6FED" />
              <circle cx="16" cy="13" r="1.8" fill="#2F6FED" />
              <rect x="9" y="16.5" width="6" height="1.5" rx="0.75" fill="#2F6FED" />
            </svg>
          </div>

          {/* Name & status */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: isMobile ? '0.88rem' : '0.92rem', lineHeight: 1.2 }}>
              Vibe AI Assistant
            </div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.68rem', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.12rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ADE80', boxShadow: '0 0 5px #4ADE80', flexShrink: 0 }} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Online · Replies instantly</span>
            </div>
          </div>

          {/* Close button on mobile header */}
          {isMobile && (
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{ background: 'rgba(255,255,255,0.18)', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}

          {/* Branding — desktop only */}
          {!isMobile && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexShrink: 0 }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Powered by</span>
              <span style={{ color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Code Vibe</span>
            </div>
          )}
        </div>

        {/* Messages area */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: isMobile ? '0.75rem 0.65rem 0.4rem' : '0.85rem 0.75rem 0.4rem',
            backgroundColor: '#F4F7FF',
            display: 'flex',
            flexDirection: 'column',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies for the last bot message */}
        {lastBotMsg?.quickReplies && lastBotMsg.quickReplies.length > 0 && !isTyping && (
          <div style={{ backgroundColor: '#F4F7FF', paddingTop: '0.25rem' }}>
            <QuickReplies replies={lastBotMsg.quickReplies} onSelect={sendMessage} />
          </div>
        )}

        {/* Input bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '0.45rem',
            padding: isMobile ? '0.55rem 0.65rem 0.75rem' : '0.6rem 0.75rem',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #E8EFFE',
            flexShrink: 0,
          }}
        >
          <textarea
            ref={inputRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            rows={1}
            style={{
              flex: 1,
              resize: 'none',
              border: '1.5px solid #D1DCF5',
              borderRadius: '0.75rem',
              padding: isMobile ? '0.55rem 0.7rem' : '0.6rem 0.8rem',
              fontFamily: 'inherit',
              fontSize: isMobile ? '1rem' : '0.82rem', // 1rem prevents iOS auto-zoom
              lineHeight: '1.4',
              color: '#1E293B',
              backgroundColor: '#F4F7FF',
              outline: 'none',
              maxHeight: '64px',
              overflowY: 'auto',
              transition: 'border-color 0.2s',
              WebkitAppearance: 'none',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = '#2F6FED'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = '#D1DCF5'; }}
          />
          <button
            onClick={() => sendMessage(inputText)}
            disabled={!inputText.trim() || isTyping}
            aria-label="Send message"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '0.75rem',
              background:
                inputText.trim() && !isTyping
                  ? 'linear-gradient(135deg, #2F6FED 0%, #1A56CC 100%)'
                  : '#D1DCF5',
              border: 'none',
              cursor: inputText.trim() && !isTyping ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'background 0.2s ease, transform 0.15s ease',
              boxShadow:
                inputText.trim() && !isTyping
                  ? '0 2px 10px rgba(47,111,237,0.3)'
                  : 'none',
            }}
            onMouseEnter={(e) => {
              if (inputText.trim() && !isTyping)
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22 11 13 2 9l20-7z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Footer branding */}
        <div
          style={{
            textAlign: 'center',
            padding: '0.3rem',
            fontSize: '0.6rem',
            color: '#94A3B8',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #F4F7FF',
          }}
        >
          Code Vibe AI · hello@codevibe.lk
        </div>
      </div>

      {/* ── Scoped CSS ── */}
      <style>{`
        @keyframes chatPulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          70%  { transform: scale(1.6); opacity: 0;   }
          100% { transform: scale(1.6); opacity: 0;   }
        }

        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0);    opacity: 0.4; }
          30%            { transform: translateY(-5px); opacity: 1;   }
        }

        @keyframes msgSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }

        /* Prevent background scroll when mobile chat is open */
        @media (max-width: 639px) {
          body.chat-open {
            overflow: hidden;
            position: fixed;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
