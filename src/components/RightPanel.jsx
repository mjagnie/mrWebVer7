export default function RightPanel({ 
  open, 
  onClose,
  children,
  panelType,
}) {
  if (!open) return null;

  return (
    < div className = {`rightPanel rightPanel--${panelType}`}>
      <div className="panelInner">
        <button
          className="closeBtn"
          onClick={onClose}
          type="button"
          aria-label="Close panel"
        >
          ✕
        </button>

        {children}
      </div>
    </div >
  );
}

