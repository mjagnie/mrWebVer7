export default function RightPanel({ open, onClose, children }) {
  if (!open) return null;

  return (

    < div className = "rightPanel" >
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

