module.exports = {
  version: '1.0.0',
  now: function () {
    return new Date();
  },
  ip: function *() {
    yield wait(1000);
    return this.ip || '<p>127.0.0.1</p>';
  },
  callback: function() {
    return function (cb) {
      cb(null, '<p>callback</p>');
    }
  },
  callbackGen: function() {
    return function* () {
      yield wait(3000);
      return '<p>callbackGen</p>';
    };
  },
  doNothing: function() {
    console.log('this will not print');
  }
};
