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
 * The ProcessDefinitionDiagramDto model module.
 * @module model/ProcessDefinitionDiagramDto
 * @version 7.14.0
 */
class ProcessDefinitionDiagramDto {
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} bpmn20Xml
     * @type {String}
     */
    bpmn20Xml;

    

    /**
     * Constructs a new <code>ProcessDefinitionDiagramDto</code>.
     * @alias module:model/ProcessDefinitionDiagramDto
     */
    constructor() { 
        
        ProcessDefinitionDiagramDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessDefinitionDiagramDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessDefinitionDiagramDto} obj Optional instance to populate.
     * @return {module:model/ProcessDefinitionDiagramDto} The populated <code>ProcessDefinitionDiagramDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessDefinitionDiagramDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('bpmn20Xml')) {
                obj['bpmn20Xml'] = ApiClient.convertToType(data['bpmn20Xml'], 'String');
            }
        }
        return obj;
    }
}



export default ProcessDefinitionDiagramDto;
