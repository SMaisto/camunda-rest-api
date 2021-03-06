# CamundaBpmRestApi.TaskAttachmentApi

All URIs are relative to *https://geekers.ddns.net/camunda/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachment**](TaskAttachmentApi.md#addAttachment) | **POST** /task/{id}/attachment/create | 
[**deleteAttachment**](TaskAttachmentApi.md#deleteAttachment) | **DELETE** /task/{id}/attachment/{attachmentId} | 
[**getAttachment**](TaskAttachmentApi.md#getAttachment) | **GET** /task/{id}/attachment/{attachmentId} | 
[**getAttachmentData**](TaskAttachmentApi.md#getAttachmentData) | **GET** /task/{id}/attachment/{attachmentId}/data | 
[**getAttachments**](TaskAttachmentApi.md#getAttachments) | **GET** /task/{id}/attachment | 



## addAttachment

> AttachmentDto addAttachment(id, opts)



Creates an attachment for a task.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task to add the attachment to.
let opts = {
  'attachmentName': "attachmentName_example", // String | The name of the attachment.
  'attachmentDescription': "attachmentDescription_example", // String | The description of the attachment.
  'attachmentType': "attachmentType_example", // String | The type of the attachment.
  'url': "url_example", // String | The url to the remote content of the attachment.
  'content': "/path/to/file" // File | The content of the attachment.
};
apiInstance.addAttachment(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to add the attachment to. | 
 **attachmentName** | **String**| The name of the attachment. | [optional] 
 **attachmentDescription** | **String**| The description of the attachment. | [optional] 
 **attachmentType** | **String**| The type of the attachment. | [optional] 
 **url** | **String**| The url to the remote content of the attachment. | [optional] 
 **content** | **File**| The content of the attachment. | [optional] 

### Return type

[**AttachmentDto**](AttachmentDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deleteAttachment

> deleteAttachment(id, attachmentId)



Removes an attachment from a task by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task.
let attachmentId = "attachmentId_example"; // String | The id of the attachment to be removed.
apiInstance.deleteAttachment(id, attachmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task. | 
 **attachmentId** | **String**| The id of the attachment to be removed. | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttachment

> AttachmentDto getAttachment(id, attachmentId)



Retrieves a task attachment by task id and attachment id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task.
let attachmentId = "attachmentId_example"; // String | The id of the attachment to be retrieved.
apiInstance.getAttachment(id, attachmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task. | 
 **attachmentId** | **String**| The id of the attachment to be retrieved. | 

### Return type

[**AttachmentDto**](AttachmentDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttachmentData

> File getAttachmentData(id, attachmentId)



Retrieves the binary content of a task attachment by task id and attachment id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task.
let attachmentId = "attachmentId_example"; // String | The id of the attachment to be retrieved.
apiInstance.getAttachmentData(id, attachmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task. | 
 **attachmentId** | **String**| The id of the attachment to be retrieved. | 

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, text/plain, application/json


## getAttachments

> [AttachmentDto] getAttachments(id)



Gets the attachments for a task.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.TaskAttachmentApi();
let id = "id_example"; // String | The id of the task to retrieve the attachments for.
apiInstance.getAttachments(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to retrieve the attachments for. | 

### Return type

[**[AttachmentDto]**](AttachmentDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

