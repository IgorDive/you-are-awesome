// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {
    return prop;
};

const createNotEnumerableProperty = (prop) => {
    Object.defineProperty( Object.prototype, prop, {value: 'value', enumerable: false} );
    return prop;
};

const createProtoMagicObject = () => {
    let magicO = function() {};
    magicO.prototype = magicO.__proto__;
    return magicO;
};

const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};


// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = ( item ) => { 
    return new Promise ( ( resolve, reject ) => {
        setTimeout( () => resolve( item ), 1100 );
    } );
};

const getDeepPropertiesCount = (obj) => {
    
    return JSON.stringify(obj).match(/\:/g).length;
};

const createSerializedObject = () => {
    //Object.prototype.valueOf = () => JSON.stringify(this);
    
    return JSON.parse( JSON.stringify( {} ) );
};

const sortByProto = (arr) => {
    let tempArr = [];
    
    arr.forEach( element => {
        tempArr.push( [element, element.__proto__] );
    });
    
    tempArr.sort( (a, b) => {
        if ( a[1] > b[1] ) return 1;
        if ( a[1] < b[1] ) return -1; 
    } );

    return tempArr.map( arr => arr[0] );
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;