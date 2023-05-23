import {
  SocketEvent,
  SocketAuth,
  SocketData,
  SocketDataWithPayload,
  SocketBroadcastEvent,
} from '@spotify/sockets-shared';

export type SocketIncomeEventHandler = (data: SocketAuth | SocketData | SocketDataWithPayload) => void;
export type SocketOutgoingEventHandler = (data: object) => void;

export type IncomeEventsMap = {
  [Event in Partial<SocketEvent>]: SocketIncomeEventHandler;
};

export type OutgoingEventsMap = {
  [Event in Partial<SocketBroadcastEvent>]: SocketOutgoingEventHandler;
};