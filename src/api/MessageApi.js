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



import ApiClient from "../ApiClient";
import CorrelationMessageDto from '../model/CorrelationMessageDto';
import ExceptionDto from '../model/ExceptionDto';
import MessageCorrelationResultWithVariableDto from '../model/MessageCorrelationResultWithVariableDto';

/**
* Message service.
* @module api/MessageApi
* @version 7.14.0
*/
export default class MessageApi extends ApiClient {

    /**
    * Constructs a new MessageApi. 
    * @alias module:api/MessageApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Correlates a message to the process engine to either trigger a message start event or an intermediate message  catching event. Internally this maps to the engine's message correlation builder methods `MessageCorrelationBuilder#correlateWithResult()` and `MessageCorrelationBuilder#correlateAllWithResult()`. For more information about the correlation behavior, see the [Message Events](https://docs.camunda.org/manual/7.14/bpmn20/events/message-events/) section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).
     * @param {Object} opts Optional parameters
     * @param {CorrelationMessageDto} opts.correlationMessageDto 
     * @return {Promise<Array.<MessageCorrelationResultWithVariableDto>>}
     */
    async deliverMessage(opts) {
      opts = opts || {};
      let postBody = opts['correlationMessageDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [MessageCorrelationResultWithVariableDto];

      return this.callApi(
        '/message', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
