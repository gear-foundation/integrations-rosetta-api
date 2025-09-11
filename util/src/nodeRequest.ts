interface JsonRpcRequest {
  id: number;
  jsonrpc: "2.0";
  method: string;
  params: any[];
}

interface JsonRpcResponse {
  id: number;
  jsonrpc: "2.0";
  result: any;
}

export async function nodeRequest(
  address: string,
  method: string,
  params: any[] = [],
) {
  const body = JSON.stringify({ id: 1, jsonrpc: "2.0", method, params });
  const headers = {
    "Content-Type": "application/json",
  };
  const res = await fetch(address, {
    body,
    headers,
    method: "POST",
  });
  const json = await res.json();
  if (json.error) {
    throw Error(json.error.data || json.error.message);
  }
  return json;
}

export async function nodeBatchRequest(
  address: string,
  batch: Array<{ id: number; method: string; params?: any[] }>,
): Promise<JsonRpcResponse[]> {
  const body: JsonRpcRequest[] = batch.map(({ id, method, params }) => ({
    id,
    jsonrpc: "2.0",
    method,
    params: params || [],
  }));

  const headers = {
    "Content-Type": "application/json",
  };
  const res = await fetch(address, {
    body: JSON.stringify(body),
    headers,
    method: "POST",
  });
  const json = await res.json();
  return json;
}
