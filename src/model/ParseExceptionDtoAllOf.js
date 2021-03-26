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
import ResourceReportDto from './ResourceReportDto';

/**
 * The ParseExceptionDtoAllOf model module.
 * @module model/ParseExceptionDtoAllOf
 * @version 7.14.0
 */
class ParseExceptionDtoAllOf {
    /**
     * @member {Object.<String, CodegenProperty{openApiType='ResourceReportDto', baseName='inner', complexType='ResourceReportDto', getter='getInner', setter='setInner', description='null', dataType='ResourceReportDto', datatypeWithEnum='ResourceReportDto', dataFormat='null', name='inner', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ResourceReportDto.constructFromObject(data['inner']);', baseType='ResourceReportDto', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/ResourceReportDto"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Inner', nameInSnakeCase='INNER', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} details
     * @type {Object.<String, CodegenProperty{openApiType='ResourceReportDto', baseName='inner', complexType='ResourceReportDto', getter='getInner', setter='setInner', description='null', dataType='ResourceReportDto', datatypeWithEnum='ResourceReportDto', dataFormat='null', name='inner', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ResourceReportDto.constructFromObject(data['inner']);', baseType='ResourceReportDto', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/ResourceReportDto"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Inner', nameInSnakeCase='INNER', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    details;

    

    /**
     * Constructs a new <code>ParseExceptionDtoAllOf</code>.
     * @alias module:model/ParseExceptionDtoAllOf
     */
    constructor() { 
        
        ParseExceptionDtoAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParseExceptionDtoAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParseExceptionDtoAllOf} obj Optional instance to populate.
     * @return {module:model/ParseExceptionDtoAllOf} The populated <code>ParseExceptionDtoAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParseExceptionDtoAllOf();

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], {'String': ResourceReportDto});
            }
        }
        return obj;
    }
}



export default ParseExceptionDtoAllOf;

