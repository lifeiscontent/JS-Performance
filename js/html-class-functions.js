(function() {
  var __elementPrototype;
  __elementPrototype = Element.prototype;
  /*!
   * JavaScript hasClass|addClass|removeClass implementations.
   * Copyright(c) 2011 Aaron Reisman <aaron@lifeiscontent.net>
   * MIT Licensed
   */

  /**
   * Return a `Boolean` from the given `className`.
   *
   * @param {String} className
   * @return {Boolean}
   * @api public
   */

  __elementPrototype.hasClass = function(className) {
    var testStr;
    className = ' '+className+' ';
    testStr = ' '+this.className+' ';
    return testStr.indexOf(className) > -1;
  };

  /**
   * Return a `Boolean` from the given `className` that will be added.
   *
   * @param {String} className
   * @return {Boolean}
   * @api public
   */

  __elementPrototype.addClass = function(className) {
    return (this.hasClass(className)) ? false : !!(this.className += ' '+className);
  };

  /**
   * Return a `Boolean` from the given `className` that will be removed.
   *
   * @param {String} className
   * @return {Boolean}
   * @api public
   */

  __elementPrototype.removeClass = function(className) {
    return (this.hasClass(className)) ? !!(this.className = this.className.replace(className, '')) : false;
  };
})();