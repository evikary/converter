const firstInput = document.querySelector('.inp1');
const secondInput = document.querySelector('.inp2');

firstInput.addEventListener('input', (e) => {
  let rub = e.target.value;
  const res = parseFloat(rub) / 77.32;
  secondInput.value = res.toFixed(2);
});

secondInput.addEventListener('input', (e) => {
  let usd = e.target.value;
  const res = parseFloat(usd) * 77.32;
  firstInput.value = res.toFixed(2);
});
