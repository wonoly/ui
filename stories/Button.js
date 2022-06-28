import './button.css';


export const createButton = ({
  primary = false,
  size = 'medium',
  adjacentColor = 'black',
  label,
  onClick,
}) => {
  const colors = {
    blue: "#1a73e8",
    pink: "#E84D8A",
    yellow: "#FEB326",
    black: '#000',
    theme: `var(--wonoly-button-fill, #000)`
  }

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'wonoly-button--primary' : 'wonoly-button--secondary';
  btn.className = ['wonoly-button', `wonoly-button--${size}`, mode].join(' ');

  if (primary) {
    btn.style.backgroundColor = colors[adjacentColor];
  } else {
    btn.style.border = `2px solid ${adjacentColor}`;
  }

  return btn;
};
