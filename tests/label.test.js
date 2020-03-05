const JSC = require('../dist/jscharting');

const container = document.createElement('div'); 

test('Label constructor was imported', () => {
  expect(JSC.label).not.toBe(undefined);
});

test('Label was created', async () => {
    const label = await JSC.label(container, 'Label')
    expect(label.getElementsByTagName('tspan')[0].innerHTML).toBe('Label');
});