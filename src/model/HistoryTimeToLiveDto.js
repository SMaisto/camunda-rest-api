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
 * The HistoryTimeToLiveDto model module.
 * @module model/HistoryTimeToLiveDto
 * @version 7.14.0
 */
class HistoryTimeToLiveDto {
    /**
     * @member {Number} historyTimeToLive
     * @type {Number}
     */
    historyTimeToLive;

    

    /**
     * Constructs a new <code>HistoryTimeToLiveDto</code>.
     * @alias module:model/HistoryTimeToLiveDto
     */
    constructor() { 
        
        HistoryTimeToLiveDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoryTimeToLiveDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoryTimeToLiveDto} obj Optional instance to populate.
     * @return {module:model/HistoryTimeToLiveDto} The populated <code>HistoryTimeToLiveDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoryTimeToLiveDto();

            if (data.hasOwnProperty('historyTimeToLive')) {
                obj['historyTimeToLive'] = ApiClient.convertToType(data['historyTimeToLive'], 'Number');
            }
        }
        return obj;
    }
}



export default HistoryTimeToLiveDto;

