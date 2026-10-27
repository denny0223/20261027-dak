document.querySelectorAll('section.demo pre').forEach((block) => {
  const code = block.querySelector('code');
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-prompt';
  button.textContent = '複製 prompt';
  button.addEventListener('click', async (event) => {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(code.textContent.trim());
      button.textContent = '已複製';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = '請按 Ctrl/Cmd+C';
    }
    setTimeout(() => { button.textContent = '複製 prompt'; }, 2000);
  });
  block.prepend(button);
});
