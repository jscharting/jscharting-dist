const JSC = require('../dist/jscharting');

const jsonResult = '[{\"Name\":\"John\",\"Actual\":4535,\"Goal\":5000}]';

test('CSV formatting function was imported', () => {
    expect(typeof JSC.csv2Json).toBe('function');
});

test('CSV formatting is correct', () => {
    const jsonData = JSC.csv2Json('Name,Actual,Goal\nJohn,4535,5000');
    expect(JSON.stringify(jsonData)).toBe(jsonResult);
});

test('TSV formatting function was imported', () => {
    expect(typeof JSC.tsv2Json).toBe('function');
});

test('TSV formatting is correct', () => {
    const jsonData = JSC.tsv2Json('Name\tActual\tGoal\nJohn\t4535\t5000');
    expect(JSON.stringify(jsonData)).toBe(jsonResult);
});

test('DSV formatting function was imported', () => {
    expect(typeof JSC.dsv2Json).toBe('function');
});

test('DSV formatting is correct', () => {
    const jsonData = JSC.dsv2Json('Name|Actual|Goal\nJohn|4535|5000', '|');
    expect(JSON.stringify(jsonData)).toBe(jsonResult);
});
