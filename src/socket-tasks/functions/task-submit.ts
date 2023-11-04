import { EventBridgeClient, PutEventsCommand, PutEventsCommandInput, PutEventsCommandOutput } from '@aws-sdk/client-eventbridge';

const eventbusClient = new EventBridgeClient({});

export const taskSubmitHandler = async (event: any) => {
  console.info(event);

  const body = JSON.parse(event.body);

  // inject task id into the task data (pass-through)
  body.task.data.id = body.task.id;

  // environment Variable TASK_BUS defines the event bus to talk to
  const command = new PutEventsCommand({
    Entries: [
      {
        Time: new Date('TIMESTAMP'),
        Source: `${body.task.id}:::${event.requestContext.connectionId}`,
        DetailType: body.task.type,
        Detail: JSON.stringify(body.task.data),
        EventBusName: process.env.TASK_BUS,
      },
    ],
  });

  const result = await eventbusClient.send<PutEventsCommandInput, PutEventsCommandOutput>(command);
  const failedCount = result?.FailedEntryCount ?? 0;

  if (failedCount > 0) {
    console.error('Failed to submit task', result);
    throw new Error('Failed to submit task');
  } else {
    console.info('Task submitted', result);
  }

  return {
    statusCode: 200,
  };
};