'use client'

export default function TopLine() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--bg-primary)' }} />
      <div
        className="absolute top-0 h-full"
        style={{
          width: '120px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, #E8C870, #C9A84C, transparent)',
          boxShadow: '0 0 12px #C9A84C, 0 0 24px rgba(201,168,76,0.5)',
          animation: 'topline 2.5s ease-in-out forwards',
        }}
      />
      <style>{`
        @keyframes topline {
          0%   { left: -120px; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  )
}
