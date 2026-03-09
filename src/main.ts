import '../style.css';

// ── Preview content per accordion item ───────────────────
const previews: Record<string, string> = {
  viewer: `<img src="assets/images/previews/firstcard.png" alt="First Card" />`,
  clash:  `<img src="assets/images/previews/secondcard.png"  alt="Second Card" />`,
  issues: `<img src="assets/images/previews/thirdcard.png" alt="Third Card" />`,
};
// ── Accordion logic ───────────────────────────────────────
const accordionItems = document.querySelectorAll<HTMLDetailsElement>('.accordion-item');
const previewEl = document.getElementById('accordionPreview') as HTMLDivElement;

function setPreview(key: string): void {
  previewEl.innerHTML = previews[key] ?? '';
  previewEl.classList.remove('preview-fade');
  void previewEl.offsetWidth; // force reflow for animation restart
  previewEl.classList.add('preview-fade');
}

accordionItems.forEach((item: HTMLDetailsElement) => {
  const arrow = item.querySelector<HTMLSpanElement>('.accordion-arrow')!;

  item.addEventListener('toggle', () => {
  if (item.open) {
    accordionItems.forEach((other) => {
      if (other !== item) {
        other.open = false;
      }
    });
    const key = item.dataset.preview ?? 'viewer';
    setPreview(key);
  }
});
});

// Set initial preview
setPreview('viewer');