export default function guardrail(mathFunction) {
  const queue = [];
  let out;

  try {
    out = mathFunction();
  } catch (err) {
    out = err.toString();
  }

  queue.push(out);
  queue.push('Guardrail was processed');

  return queue;
}
