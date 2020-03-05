const JSC = require('../dist/jscharting');

const container = document.createElement('div'); 

test('Chart constructor was imported', () => {
  expect(JSC.Chart).not.toBe(undefined);
});

test('Chart was created', () => {
    const chart = JSC.Chart(container, {})
    expect(chart.kind).toBe("Chart");
});