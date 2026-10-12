document.querySelectorAll('[data-answer]').forEach(box => {
  box.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    box.querySelector('[role="status"]').textContent = button.dataset.value === box.dataset.answer
      ? 'Correct. ' + box.dataset.reason : 'Try again. ' + box.dataset.hint;
  }));
});
