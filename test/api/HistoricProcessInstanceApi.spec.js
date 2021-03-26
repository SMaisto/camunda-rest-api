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

// CommonJS-like environments that support module.exports, like Node.
factory(require('expect.js'), require(process.cwd()+'/src/index'));

'use strict';

var instance;

beforeEach(function() {
  instance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
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

describe('HistoricProcessInstanceApi', function() {
    describe('deleteHistoricProcessInstance', function() {
      it('should call deleteHistoricProcessInstance successfully', function(done) {
        //uncomment below and update the code to test deleteHistoricProcessInstance
        //instance.deleteHistoricProcessInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteHistoricProcessInstancesAsync', function() {
      it('should call deleteHistoricProcessInstancesAsync successfully', function(done) {
        //uncomment below and update the code to test deleteHistoricProcessInstancesAsync
        //instance.deleteHistoricProcessInstancesAsync(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteHistoricVariableInstancesOfHistoricProcessInstance', function() {
      it('should call deleteHistoricVariableInstancesOfHistoricProcessInstance successfully', function(done) {
        //uncomment below and update the code to test deleteHistoricVariableInstancesOfHistoricProcessInstance
        //instance.deleteHistoricVariableInstancesOfHistoricProcessInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHistoricProcessInstance', function() {
      it('should call getHistoricProcessInstance successfully', function(done) {
        //uncomment below and update the code to test getHistoricProcessInstance
        //instance.getHistoricProcessInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHistoricProcessInstanceDurationReport', function() {
      it('should call getHistoricProcessInstanceDurationReport successfully', function(done) {
        //uncomment below and update the code to test getHistoricProcessInstanceDurationReport
        //instance.getHistoricProcessInstanceDurationReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHistoricProcessInstances', function() {
      it('should call getHistoricProcessInstances successfully', function(done) {
        //uncomment below and update the code to test getHistoricProcessInstances
        //instance.getHistoricProcessInstances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHistoricProcessInstancesCount', function() {
      it('should call getHistoricProcessInstancesCount successfully', function(done) {
        //uncomment below and update the code to test getHistoricProcessInstancesCount
        //instance.getHistoricProcessInstancesCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryHistoricProcessInstances', function() {
      it('should call queryHistoricProcessInstances successfully', function(done) {
        //uncomment below and update the code to test queryHistoricProcessInstances
        //instance.queryHistoricProcessInstances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryHistoricProcessInstancesCount', function() {
      it('should call queryHistoricProcessInstancesCount successfully', function(done) {
        //uncomment below and update the code to test queryHistoricProcessInstancesCount
        //instance.queryHistoricProcessInstancesCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setRemovalTimeAsync', function() {
      it('should call setRemovalTimeAsync successfully', function(done) {
        //uncomment below and update the code to test setRemovalTimeAsync
        //instance.setRemovalTimeAsync(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
});