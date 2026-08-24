export default function RightPanel({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="rightPanelOverlay">
      
      {/* Background overlay — click closes */}
      <button
        className="rightPanelBackdrop"
        onClick={onClose}
        type="button"
        aria-label="Close panel"
      />

      {/* Panel itself — click does NOT close */}
      <aside className="rightPanel open">
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
      </aside>
    </div>
  );
}

