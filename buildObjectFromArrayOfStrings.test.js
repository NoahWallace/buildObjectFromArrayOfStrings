const buildObjectFromString = require('./buildObjectFromArrayOfStrings');


test('validate prefix', () => {
    const build=buildObjectFromString(['test'], "TestPfx")
    expect(build)
        .toEqual( {"test": "TestPfx_test"})
})

test('validate deep object', () => {
    const arr=[
        'test.options.form'
    ]
    const build=buildObjectFromString(arr, "TestPfx")
    expect(build)
        .toEqual( {"test": {options:{form:"TestPfx_test_options_form"}}})
})


