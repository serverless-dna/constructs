import { ApiGatewayManagementApiClient, PostToConnectionCommand } from '@aws-sdk/client-apigatewaymanagementapi';

// Create SQSError type to make exception handling Type Safe
interface SQSError {
  statusCode?: number;
  message: string;
}

const { WEBSOCKET_API } = process.env;

if (!(WEBSOCKET_API)) {
  throw new Error('Missing required environment variables [WEBSOCKET_API]');
}

const client = new ApiGatewayManagementApiClient({
  endpoint: WEBSOCKET_API,
});

export const taskNotifyHandler = async (event: any) => {
  const failedRecords = [];

  for (const record of event.Records) {
    const body = JSON.parse(record.body);
    console.log(body);

    const taskStatus = body.requestContext.condition === 'Success';

    const [taskId, connectionId] = body.requestPayload.source.split(':::');
    const taskResponse = {
      task_id: taskId,
      status: taskStatus ? 'Success' : 'Fail',
      response: body.responsePayload,
    };

    const input = {
      Data: JSON.stringify(taskResponse),
      ConnectionId: connectionId,
    };
    const command = new PostToConnectionCommand(input);
    try {
      const response = await client.send(command);
      console.log(response);
    } catch (e) {
      if (e instanceof Error) {
        if ((e as SQSError).statusCode !== 410) {
          // Anythign other than 410 is a processing failure
          // 410 indicates the connection is no longer active so can be ignored
          failedRecords.push({
            itemIdentifier: record.messageId,
          });
        }
      }
    }
  }

  // Return any failed records to go back to the queue
  return {
    batchItemFailures: failedRecords,
  };
};
