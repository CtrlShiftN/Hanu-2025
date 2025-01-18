export function randomIncrease(value) {
  const increases = {};
  value.forEach((item) => {
    increases[item.code] = Math.random() < 0.5;
  });
  return increases;
}