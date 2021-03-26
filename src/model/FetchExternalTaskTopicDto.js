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
 * The FetchExternalTaskTopicDto model module.
 * @module model/FetchExternalTaskTopicDto
 * @version 7.14.0
 */
class FetchExternalTaskTopicDto {
    /**
     * @member {String} topicName
     * @type {String}
     */
    topicName;
    /**
     * @member {Number} lockDuration
     * @type {Number}
     */
    lockDuration;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='variables', complexType='null', getter='getVariables', setter='setVariables', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='variables', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['variables'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Variables', nameInSnakeCase='VARIABLES', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} variables
     * @type {Array.<CodegenProperty{openApiType='string', baseName='variables', complexType='null', getter='getVariables', setter='setVariables', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='variables', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['variables'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Variables', nameInSnakeCase='VARIABLES', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    variables;
    /**
     * @member {Boolean} localVariables
     * @type {Boolean}
     * @default false
     */
    localVariables = false;
    /**
     * @member {String} businessKey
     * @type {String}
     */
    businessKey;
    /**
     * @member {String} processDefinitionId
     * @type {String}
     */
    processDefinitionId;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='processDefinitionIdIn', complexType='null', getter='getProcessDefinitionIdIn', setter='setProcessDefinitionIdIn', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='processDefinitionIdIn', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['processDefinitionIdIn'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='ProcessDefinitionIdIn', nameInSnakeCase='PROCESS_DEFINITION_ID_IN', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} processDefinitionIdIn
     * @type {Array.<CodegenProperty{openApiType='string', baseName='processDefinitionIdIn', complexType='null', getter='getProcessDefinitionIdIn', setter='setProcessDefinitionIdIn', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='processDefinitionIdIn', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['processDefinitionIdIn'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='ProcessDefinitionIdIn', nameInSnakeCase='PROCESS_DEFINITION_ID_IN', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    processDefinitionIdIn;
    /**
     * @member {String} processDefinitionKey
     * @type {String}
     */
    processDefinitionKey;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='processDefinitionKeyIn', complexType='null', getter='getProcessDefinitionKeyIn', setter='setProcessDefinitionKeyIn', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='processDefinitionKeyIn', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['processDefinitionKeyIn'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='ProcessDefinitionKeyIn', nameInSnakeCase='PROCESS_DEFINITION_KEY_IN', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} processDefinitionKeyIn
     * @type {Array.<CodegenProperty{openApiType='string', baseName='processDefinitionKeyIn', complexType='null', getter='getProcessDefinitionKeyIn', setter='setProcessDefinitionKeyIn', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='processDefinitionKeyIn', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['processDefinitionKeyIn'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='ProcessDefinitionKeyIn', nameInSnakeCase='PROCESS_DEFINITION_KEY_IN', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    processDefinitionKeyIn;
    /**
     * @member {String} processDefinitionVersionTag
     * @type {String}
     */
    processDefinitionVersionTag;
    /**
     * @member {Boolean} withoutTenantId
     * @type {Boolean}
     * @default false
     */
    withoutTenantId = false;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='tenantIdIn', complexType='null', getter='getTenantIdIn', setter='setTenantIdIn', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='tenantIdIn', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['tenantIdIn'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='TenantIdIn', nameInSnakeCase='TENANT_ID_IN', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} tenantIdIn
     * @type {Array.<CodegenProperty{openApiType='string', baseName='tenantIdIn', complexType='null', getter='getTenantIdIn', setter='setTenantIdIn', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='tenantIdIn', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['tenantIdIn'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='TenantIdIn', nameInSnakeCase='TENANT_ID_IN', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    tenantIdIn;
    /**
     * @member {Object.<String, CodegenProperty{openApiType='object', baseName='inner', complexType='null', getter='getInner', setter='setInner', description='null', dataType='Object', datatypeWithEnum='Object', dataFormat='null', name='inner', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['inner'], Object);', baseType='Object', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "object",
  "additionalProperties" : false,
  "nullable" : true
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=true, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=true, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Inner', nameInSnakeCase='INNER', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} processVariables
     * @type {Object.<String, CodegenProperty{openApiType='object', baseName='inner', complexType='null', getter='getInner', setter='setInner', description='null', dataType='Object', datatypeWithEnum='Object', dataFormat='null', name='inner', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['inner'], Object);', baseType='Object', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "object",
  "additionalProperties" : false,
  "nullable" : true
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=true, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=true, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Inner', nameInSnakeCase='INNER', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    processVariables;
    /**
     * @member {Boolean} deserializeValues
     * @type {Boolean}
     * @default false
     */
    deserializeValues = false;
    /**
     * @member {Boolean} includeExtensionProperties
     * @type {Boolean}
     * @default false
     */
    includeExtensionProperties = false;

    

    /**
     * Constructs a new <code>FetchExternalTaskTopicDto</code>.
     * @alias module:model/FetchExternalTaskTopicDto
     * @param topicName {String} **Mandatory.** The topic's name.
     * @param lockDuration {Number} **Mandatory.** The duration to lock the external tasks for in milliseconds.
     */
    constructor(topicName, lockDuration) { 
        
        FetchExternalTaskTopicDto.initialize(this, topicName, lockDuration);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, topicName, lockDuration) { 
        obj['topicName'] = topicName;
        obj['lockDuration'] = lockDuration;
    }

    /**
     * Constructs a <code>FetchExternalTaskTopicDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FetchExternalTaskTopicDto} obj Optional instance to populate.
     * @return {module:model/FetchExternalTaskTopicDto} The populated <code>FetchExternalTaskTopicDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FetchExternalTaskTopicDto();

            if (data.hasOwnProperty('topicName')) {
                obj['topicName'] = ApiClient.convertToType(data['topicName'], 'String');
            }
            if (data.hasOwnProperty('lockDuration')) {
                obj['lockDuration'] = ApiClient.convertToType(data['lockDuration'], 'Number');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], ['String']);
            }
            if (data.hasOwnProperty('localVariables')) {
                obj['localVariables'] = ApiClient.convertToType(data['localVariables'], 'Boolean');
            }
            if (data.hasOwnProperty('businessKey')) {
                obj['businessKey'] = ApiClient.convertToType(data['businessKey'], 'String');
            }
            if (data.hasOwnProperty('processDefinitionId')) {
                obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('processDefinitionIdIn')) {
                obj['processDefinitionIdIn'] = ApiClient.convertToType(data['processDefinitionIdIn'], ['String']);
            }
            if (data.hasOwnProperty('processDefinitionKey')) {
                obj['processDefinitionKey'] = ApiClient.convertToType(data['processDefinitionKey'], 'String');
            }
            if (data.hasOwnProperty('processDefinitionKeyIn')) {
                obj['processDefinitionKeyIn'] = ApiClient.convertToType(data['processDefinitionKeyIn'], ['String']);
            }
            if (data.hasOwnProperty('processDefinitionVersionTag')) {
                obj['processDefinitionVersionTag'] = ApiClient.convertToType(data['processDefinitionVersionTag'], 'String');
            }
            if (data.hasOwnProperty('withoutTenantId')) {
                obj['withoutTenantId'] = ApiClient.convertToType(data['withoutTenantId'], 'Boolean');
            }
            if (data.hasOwnProperty('tenantIdIn')) {
                obj['tenantIdIn'] = ApiClient.convertToType(data['tenantIdIn'], ['String']);
            }
            if (data.hasOwnProperty('processVariables')) {
                obj['processVariables'] = ApiClient.convertToType(data['processVariables'], {'String': Object});
            }
            if (data.hasOwnProperty('deserializeValues')) {
                obj['deserializeValues'] = ApiClient.convertToType(data['deserializeValues'], 'Boolean');
            }
            if (data.hasOwnProperty('includeExtensionProperties')) {
                obj['includeExtensionProperties'] = ApiClient.convertToType(data['includeExtensionProperties'], 'Boolean');
            }
        }
        return obj;
    }
}



export default FetchExternalTaskTopicDto;

