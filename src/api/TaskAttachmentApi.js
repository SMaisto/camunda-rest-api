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
import AttachmentDto from '../model/AttachmentDto';
import AuthorizationExceptionDto from '../model/AuthorizationExceptionDto';
import ExceptionDto from '../model/ExceptionDto';

/**
* TaskAttachment service.
* @module api/TaskAttachmentApi
* @version 7.14.0
*/
export default class TaskAttachmentApi extends ApiClient {

    /**
    * Constructs a new TaskAttachmentApi. 
    * @alias module:api/TaskAttachmentApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Creates an attachment for a task.
     * @param {String} id The id of the task to add the attachment to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.attachmentName The name of the attachment.
     * @param {String} opts.attachmentDescription The description of the attachment.
     * @param {String} opts.attachmentType The type of the attachment.
     * @param {String} opts.url The url to the remote content of the attachment.
     * @param {File} opts.content The content of the attachment.
     * @return {Promise<AttachmentDto>}
     */
    async addAttachment(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addAttachment");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'attachment-name': opts['attachmentName'],
        'attachment-description': opts['attachmentDescription'],
        'attachment-type': opts['attachmentType'],
        'url': opts['url'],
        'content': opts['content']
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = AttachmentDto;

      return this.callApi(
        '/task/{id}/attachment/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Removes an attachment from a task by id.
     * @param {String} id The id of the task.
     * @param {String} attachmentId The id of the attachment to be removed.
     * @return {Promise}
     */
    async deleteAttachment(id, attachmentId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAttachment");
      }
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling deleteAttachment");
      }

      let pathParams = {
        'id': id,
        'attachmentId': attachmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.callApi(
        '/task/{id}/attachment/{attachmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves a task attachment by task id and attachment id.
     * @param {String} id The id of the task.
     * @param {String} attachmentId The id of the attachment to be retrieved.
     * @return {Promise<AttachmentDto>}
     */
    async getAttachment(id, attachmentId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttachment");
      }
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling getAttachment");
      }

      let pathParams = {
        'id': id,
        'attachmentId': attachmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AttachmentDto;

      return this.callApi(
        '/task/{id}/attachment/{attachmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves the binary content of a task attachment by task id and attachment id.
     * @param {String} id The id of the task.
     * @param {String} attachmentId The id of the attachment to be retrieved.
     * @return {Promise<File>}
     */
    async getAttachmentData(id, attachmentId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttachmentData");
      }
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling getAttachmentData");
      }

      let pathParams = {
        'id': id,
        'attachmentId': attachmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/octet-stream', 'text/plain', 'application/json'];
      let returnType = File;

      return this.callApi(
        '/task/{id}/attachment/{attachmentId}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets the attachments for a task.
     * @param {String} id The id of the task to retrieve the attachments for.
     * @return {Promise<Array.<AttachmentDto>>}
     */
    async getAttachments(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttachments");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AttachmentDto];

      return this.callApi(
        '/task/{id}/attachment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
