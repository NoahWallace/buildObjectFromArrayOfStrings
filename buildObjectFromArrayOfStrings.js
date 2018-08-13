const merge = require('deepmerge')

function buildObjectFromString ( arr, prefix ) {
    let returnObj={};
    arr.map( item => {
        const str = prefix + '_' + item.replace( /\./g, '_' );
        const spl = item.split( '.' );

        spl.reverse().map( ( v, i, _array ) => {
            const nextItem = _array[ i + 1 ]
            let val;
            if ( i === 0 && _array.length === 1 ) {
                val = { [v]: str }
                returnObj = merge( returnObj || {}, val )
            }
            else if ( i === 0 && _array.length > 1 ) {
                val = { [v]: str }
                _array[ i + 1 ] = { [nextItem]: val }
            }
            else if ( i === _array.length - 1 ) {
                returnObj = merge( returnObj || {}, v )
            }
            else {
                _array[ i + 1 ] = { [nextItem]: v }
            }
            return v
        } )

    } );
    return returnObj
}

module.exports = buildObjectFromString