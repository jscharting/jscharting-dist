const JSC = require('../dist/jscharting');

const data = [
    { name: 'Greg', sales: 10 },
    { name: 'Mike', sales: 12 },
    { name: 'Chris', sales: 9 },
    { name: 'Jeff', sales: 11 },
    { name: 'John', sales: 13 }
];

test('Nest function was imported', () => {
    expect(typeof JSC.nest).toBe('function');
});

test('Nest result is correct', () => {
    const series = JSC.nest()
        .key('name') 
        .rollup('sales')
        .series(data);

    expect(series[0].points.length).toBe(5);
    expect(series[0].points[0].y).toBe(10);
});