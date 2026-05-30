const BUTTON_MARKER = 'data-copy-btn-attached';

function attachCopyButton(pre: HTMLPreElement): void {
  if (pre.hasAttribute(BUTTON_MARKER)) return;
  pre.setAttribute(BUTTON_MARKER, 'true');

  const parent = pre.parentElement;
  let wrapper: HTMLElement;
  if (parent && parent.classList.contains('code-block-wrapper')) {
    wrapper = parent;
  } else {
    wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    pre.replaceWith(wrapper);
    wrapper.appendChild(pre);
  }

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy-btn';
  btn.setAttribute('aria-label', 'Copy code');
  btn.textContent = 'Copy';

  const defaultLabel = 'Copy';
  const successLabel = 'Copied';
  const failLabel = 'Copy unavailable';

  btn.addEventListener('click', async () => {
    const text = pre.innerText;
    const clipboard = navigator.clipboard;
    if (clipboard && typeof clipboard.writeText === 'function') {
      try {
        await clipboard.writeText(text);
        btn.textContent = successLabel;
      } catch {
        btn.textContent = failLabel;
      }
    } else {
      btn.textContent = failLabel;
    }
    window.setTimeout(() => {
      btn.textContent = defaultLabel;
    }, 1500);
  });

  wrapper.appendChild(btn);
}

function attachAll(): void {
  const pres = document.querySelectorAll<HTMLPreElement>('main pre');
  pres.forEach(attachCopyButton);
}

document.addEventListener('DOMContentLoaded', attachAll);
document.addEventListener('astro:page-load', attachAll);
if (document.readyState !== 'loading') {
  attachAll();
}
