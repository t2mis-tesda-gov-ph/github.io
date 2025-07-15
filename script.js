document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tabName = button.getAttribute('data-tab');

    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

    // Hide all content
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    button.classList.add('active');
    document.getElementById(tabName).classList.add('active');
  });
});
