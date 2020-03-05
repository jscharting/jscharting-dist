const JSC = require('../dist/jscharting');

const container = document.createElement('div'); 

test('Grid constructor was imported', () => {
  expect(JSC.Grid).not.toBe(undefined);
});

test('Grid was created', async () => {
    const grid = await JSC.Grid(container, {})
    expect(grid.kind).toBe('DataGrid');
});