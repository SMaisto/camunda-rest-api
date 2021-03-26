/**
 * Camunda BPM REST API
 * OpenApi Spec for Camunda BPM REST API.
 *
 * The version of the OpenAPI document: 7.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CamundaBpmRestApi);
  }
}(this, function(expect, CamundaBpmRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CamundaBpmRestApi.DurationReportResultDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DurationReportResultDto', function() {
    it('should create an instance of DurationReportResultDto', function() {
      // uncomment below and update the code to test DurationReportResultDto
      //var instance = new CamundaBpmRestApi.DurationReportResultDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.DurationReportResultDto);
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instane = new CamundaBpmRestApi.DurationReportResultDto();
      //expect(instance).to.be();
    });

    it('should have the property periodUnit (base name: "periodUnit")', function() {
      // uncomment below and update the code to test the property periodUnit
      //var instane = new CamundaBpmRestApi.DurationReportResultDto();
      //expect(instance).to.be();
    });

    it('should have the property minimum (base name: "minimum")', function() {
      // uncomment below and update the code to test the property minimum
      //var instane = new CamundaBpmRestApi.DurationReportResultDto();
      //expect(instance).to.be();
    });

    it('should have the property maximum (base name: "maximum")', function() {
      // uncomment below and update the code to test the property maximum
      //var instane = new CamundaBpmRestApi.DurationReportResultDto();
      //expect(instance).to.be();
    });

    it('should have the property average (base name: "average")', function() {
      // uncomment below and update the code to test the property average
      //var instane = new CamundaBpmRestApi.DurationReportResultDto();
      //expect(instance).to.be();
    });

  });

}));
