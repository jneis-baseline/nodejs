var assert = require('assert');

try {

    assert.fail('1', '2', 'assert.fail', '==');

    assert(undefined, 'assert truthy');
    assert.ok(undefined, 'assert.ok');
    
    assert.equal(1, 2, 'assert.equal');
    assert.notEqual(1, 1, 'assert.notEqual');
    assert.strictEqual(1, '1', 'assert.strictEqual');

    var obj1 = {prop: '1'};
    var obj2 = {prop: '1'}
    assert.deepEqual(obj1, obj2, 'assert.deepEqual')
    assert.notEqual(obj1, obj2, 'assert.notEqual');
    assert.notDeepEqual(obj1, obj2, 'assert.notDeepEqual');

    var block = function() { throw new Error('errrooouuu'); };
    assert.throws(block, ReferenceError);
    assert.throws(block, /errrooouuus/);
    assert.doesNotThrow(block, Error, 'assert.doesNotThrow');

} catch (err) {
    console.log(err);
}
