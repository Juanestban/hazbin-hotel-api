import { Request, Response, NextFunction } from 'express';

import { db } from '../config/db';

type NewResponse = (query: string, args?: unknown[]) => unknown;

interface ControllerIml {
  findOne: NewResponse;
  findById: NewResponse;
  findAll: NewResponse;
  save: NewResponse;
  findByIdAndUpdate: NewResponse;
  findByIdAndRemove: NewResponse;
}

export class Controller implements ControllerIml {
  #req: Request;
  #res: Response;
  #next?: NextFunction;

  protected tableName: string = '';

  constructor(req: Request, res: Response, next?: NextFunction) {
    this.#req = req;
    this.#res = res;
    this.#next = next;
  }

  findOne = () => {
    return undefined;
  };

  findById = () => {
    return undefined;
  };

  findAll = () => {
    return undefined;
  };

  save = () => {
    return undefined;
  };

  findByIdAndUpdate = () => {
    return undefined;
  };

  findByIdAndRemove = () => {
    return undefined;
  };
}
