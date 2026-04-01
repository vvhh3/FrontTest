

test('first', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});

test('second', () => {
    expect({ foo: 'foo', subObject: { baz: 'baz' } })
        .toEqual({ foo: 'foo', subObject: { baz: 'baz' } }); 
    expect({ foo: 'foo', subObject: { num: 0 } })
        .toEqual({ foo: 'foo', subObject: { num: 0 } })
});

test('third', () => {
    expect([11, 19, 5]).toEqual([11, 19, 5]); 
    expect(11).toBe(11); 
});
