const tape = require('tabpe');

function add(num1,num2){
    return num1+num2;
}
function minus(num1,num2){
    return num1*num2;
}
tape("function test",assert => {
    assert.equal(add(1,2),3,"finished");
    assert.equal(add(1,2),3,"finished");
    assert.equal(minus(1,2),3,"finished");
    assert.equal(minus(1,2),3,"finished");
    assert.end();
})
