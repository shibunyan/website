import './style.css';

function setCurrentYear(elementId: string): void {
  const yearElement = document.getElementById(elementId);
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setCurrentYear('year');
});
