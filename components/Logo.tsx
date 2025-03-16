export function Logo() {
  return (
    <div
      className="mr-16 hidden md:block"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem',
      }}
    >
      <img
        loading="lazy"
        src={'/OXP-logo.png'}
        alt="Open eXecution Protocol (OXP) Logo"
        width={40}
        height={30}
        style={{ borderRadius: '5px' }}
      />
      <span
        style={{
          fontSize: '1.125rem',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
        }}
      >
        Open eXecution Protocol
      </span>
    </div>
  );
}
