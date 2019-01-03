export function moneyFormat(v) {
  const zero = '0.00';
  v = parseFloat(String(v));

  if (!isFinite(v)) {
    return zero;
  }

  let sign = '',
    t = '';

  if (v < 0) {
    sign = '-';
    v = Math.abs(v);
  }

  v += '';
  v = v.split('.');

  const integer = v[0];
  const decimal = v.length > 1 ? v[1] : '00';
  const point = decimal ? '.' : '';
  const l = integer.split('').reverse();
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
  }
  t = t
    .split('')
    .reverse()
    .join('');
  return sign + t + point + decimal;
}
