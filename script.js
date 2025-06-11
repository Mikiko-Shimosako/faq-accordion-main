// ボタンを1個だけ取得
const faqButtons = document.querySelectorAll('.faq-question');

// ボタンがクリックされたら答えを開閉
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const answer = document.getElementById(targetId);

    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }

    button.classList.toggle('active');
  });
});
