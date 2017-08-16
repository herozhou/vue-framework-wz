/**
 * @license httpPerformance v1.0.0
 * License: MIT
 * author: luoyeshu0507
 *
 * @description
 *
 * This object provides a utility for detailing the http request performance
 *
 */
;(function(window, undefined){
  'use strict';
  var p = window.performance;
  var httpPerformance = {
    clear: function() {
      p.clearMarks();
      p.clearMeasures();
      p.clearResourceTimings();
    },
    getAll: function() {
      var performanceArr = [];
      p.getEntries().forEach(function(item) {
        performanceArr.push(httpPerformance.formatPerformance(item));
      });
      return performanceArr;
    },
    getByName: function(name) {
      var performanceArr = [];
      p.getEntriesByName(name).forEach(function(item) {
        performanceArr.push(httpPerformance.formatPerformance(item));
      });
      return performanceArr;
    },
    formatPerformance: function(prt) { // PerformanceResourceTiming
      return {
        redirect: prt.redirectEnd - prt.redirectStart,
        domainLookup: prt.domainLookupEnd - prt.domainLookupStart,
        connect: prt.connectEnd - prt.connectStart,
        request: prt.responseStart - prt.requestStart,
        response: prt.responseEnd - prt.responseStart,

        entryType: prt.entryType,
        initiatorType: prt.initiatorType,
        name: prt.name,
        duration: prt.duration,
      };
    }
  };

  // support AMD and CMD
  if (typeof module !== 'undefined' && module.exports) {
      module.exports = httpPerformance;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
      define('httpPerformance', [], function () {
          return httpPerformance;
      });
  } else {
      window.httpPerformance = httpPerformance;
  }
})(window);
