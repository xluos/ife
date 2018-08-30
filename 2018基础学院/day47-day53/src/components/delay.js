const TIME = 1000;

export default function (time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time * TIME);
  })
}