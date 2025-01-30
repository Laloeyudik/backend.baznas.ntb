export function handleCreateSuccess(
  status: string,
  statusCode: number,
  message: string,
  option: object = {}
): object {
  return {
    status,
    statusCode,
    message,
    data: option,
  };
}
