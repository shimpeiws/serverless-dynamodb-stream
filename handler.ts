import {
  Context,
  Handler,
  APIGatewayEvent,
  Callback,
  DynamoDBStreamEvent
} from "aws-lambda";

export const hello: Handler = async (
  event: APIGatewayEvent,
  _context: Context,
  _callback: Callback
) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
      input: event
    })
  };
};

export const dynamoTriggered: Handler = async (
  event: DynamoDBStreamEvent,
  _context: Context,
  _callback: Callback
) => {
  console.info("event.Records", event.Records);
  try {
    throw new Error("fail");
  } catch (error) {
    console.info("error : ", error);
  }
  console.info("SUCCESS");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: event.Records
    })
  };
};
