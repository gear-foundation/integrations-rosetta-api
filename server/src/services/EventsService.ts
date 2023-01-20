import { ApiError, throwError } from '../helpers';

/**
 * [INDEXER] Get a range of BlockEvents
 * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
 *
 * eventsBlocksRequest EventsBlocksRequest
 * returns EventsBlocksResponse
 * */
const eventsBlocks = ({ eventsBlocksRequest }) => {
  throwError(ApiError.NOT_IMPLEMENTED);
};

export default {
  eventsBlocks,
};
