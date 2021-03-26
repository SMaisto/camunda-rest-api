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

import ApiClient from '../ApiClient';

/**
 * The BatchDto model module.
 * @module model/BatchDto
 * @version 7.14.0
 */
class BatchDto {
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} type
     * @type {String}
     */
    type;
    /**
     * @member {Number} totalJobs
     * @type {Number}
     */
    totalJobs;
    /**
     * @member {Number} jobsCreated
     * @type {Number}
     */
    jobsCreated;
    /**
     * @member {Number} batchJobsPerSeed
     * @type {Number}
     */
    batchJobsPerSeed;
    /**
     * @member {Number} invocationsPerBatchJob
     * @type {Number}
     */
    invocationsPerBatchJob;
    /**
     * @member {String} seedJobDefinitionId
     * @type {String}
     */
    seedJobDefinitionId;
    /**
     * @member {String} monitorJobDefinitionId
     * @type {String}
     */
    monitorJobDefinitionId;
    /**
     * @member {String} batchJobDefinitionId
     * @type {String}
     */
    batchJobDefinitionId;
    /**
     * @member {Boolean} suspended
     * @type {Boolean}
     */
    suspended;
    /**
     * @member {String} tenantId
     * @type {String}
     */
    tenantId;
    /**
     * @member {String} createUserId
     * @type {String}
     */
    createUserId;

    

    /**
     * Constructs a new <code>BatchDto</code>.
     * @alias module:model/BatchDto
     */
    constructor() { 
        
        BatchDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchDto} obj Optional instance to populate.
     * @return {module:model/BatchDto} The populated <code>BatchDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('totalJobs')) {
                obj['totalJobs'] = ApiClient.convertToType(data['totalJobs'], 'Number');
            }
            if (data.hasOwnProperty('jobsCreated')) {
                obj['jobsCreated'] = ApiClient.convertToType(data['jobsCreated'], 'Number');
            }
            if (data.hasOwnProperty('batchJobsPerSeed')) {
                obj['batchJobsPerSeed'] = ApiClient.convertToType(data['batchJobsPerSeed'], 'Number');
            }
            if (data.hasOwnProperty('invocationsPerBatchJob')) {
                obj['invocationsPerBatchJob'] = ApiClient.convertToType(data['invocationsPerBatchJob'], 'Number');
            }
            if (data.hasOwnProperty('seedJobDefinitionId')) {
                obj['seedJobDefinitionId'] = ApiClient.convertToType(data['seedJobDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('monitorJobDefinitionId')) {
                obj['monitorJobDefinitionId'] = ApiClient.convertToType(data['monitorJobDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('batchJobDefinitionId')) {
                obj['batchJobDefinitionId'] = ApiClient.convertToType(data['batchJobDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('suspended')) {
                obj['suspended'] = ApiClient.convertToType(data['suspended'], 'Boolean');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('createUserId')) {
                obj['createUserId'] = ApiClient.convertToType(data['createUserId'], 'String');
            }
        }
        return obj;
    }
}



export default BatchDto;

