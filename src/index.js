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

const incrementor = ((i) => {
    return function() {
    i++;
    function count() { 
        i++;
        return count;
    };
    
    count.valueOf = () => i;

    return count;
    }
})(0);

const asyncIncrementor = ((i) => {
    return function() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                i++;
                resolve(i);
            }, 0 );
        } );
    };    
})(0);

const createIncrementer = () => {
    let obj = {
        'from': 1,
        'to': 20,

        [Symbol.iterator]() {
            return this;
        },

        next() {
            if ( this.current == undefined ) {
                this.current = this.from;
            }
            if ( this.current <= this.to ) {
                return {
                    'done': false,
                    'value': this.current++
                }
            } else {
                return {
                    'done': true
                }
            }
        }
    };

    return obj;
};


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
        
    return null;
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