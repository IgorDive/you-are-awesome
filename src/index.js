// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {
    return prop;
};

const createNotEnumerableProperty = (prop) => {
    Object.defineProperty( Object.prototype, prop, {value: 'value', enumerable: false} );
    return prop;
};

const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};


// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = ( item ) => { 
    return new Promise ( ( resolve, reject ) => {
        setTimeout( () => resolve( item ), 1100 );
    } );
};

const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

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