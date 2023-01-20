import { Request } from 'express';

export interface ApiRequest<T> extends Request {
  body: T;
}
