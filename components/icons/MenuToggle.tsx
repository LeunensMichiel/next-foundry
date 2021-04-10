type MenuToggleProps = {
  className?: string;
  handleToggle(): void;
};

const MenuToggle = ({ className = '', handleToggle }: MenuToggleProps) => (
  <button
    aria-haspopup="true"
    aria-expanded="false"
    type="button"
    className={className}
    onClick={handleToggle}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-icon-primary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  </button>
);

export default MenuToggle;
