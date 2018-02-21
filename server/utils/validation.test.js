const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('Validation Tests',()=>{

  it('should reject non string input',()=>{
    var res = isRealString(123);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', ()=>{
    var res= isRealString('    ');
    expect(res).toBe(false);
  })

  it('should allow string with non-space characters', ()=>{
    var res= isRealString(' Kunal ');
    expect(res).toBe(true);
  })
});
