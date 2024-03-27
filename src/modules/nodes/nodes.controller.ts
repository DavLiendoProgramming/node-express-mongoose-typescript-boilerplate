// import httpStatus from 'http-status';
import { Response, Request } from 'express';
// import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync';
// import ApiError from '../errors/ApiError';
// import pick from '../utils/pick';
// import { IOptions } from '../paginate/paginate';
// import * as userService from './user.service';

// export const createUser = catchAsync(async (req: Request, res: Response) => {
//   const user = await userService.createUser(req.body);
//   res.status(httpStatus.CREATED).send(user);
// });

export const getNodes = catchAsync(async (req: Request, res: Response) => {
  console.log(res, req);
  const nodes = await fetch('http://52.88.200.3:8000/nodes');
  const nodesData = await nodes.json();
  res.json(nodesData);
});

export const getNode = catchAsync(async (req: Request, res: Response) => {
  const ip = req.query['ip'];
  const port = req.query['port'];
  const url = 'http://' + ip + ':' + port + '/info';
  const nodeInfo = await fetch(url);
  const nodeInfoData = await nodeInfo.json();
  res.json(nodeInfoData);
});

export const getNodeBalance = catchAsync(async (req: Request, res: Response) => {
  const ip = req.query['ip'] == 'localhost' ? '127.0.0.1' : req.query['ip'];
  const port = req.query['port'];
  const url = 'http://' + ip + ':' + port + '/balance';
  console.log(url);
  const nodeInfo = await fetch(url);
  const nodeInfoData = await nodeInfo.json();
  res.json(nodeInfoData);
});

export const updateBalance = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'currency-type': 'HyPC',
      'tx-driver': 'ethereum',
      'tx-origin': req.body['tx-origin'],
      'tx-sender': req.body['tx-sender'],
      'tx-id': req.body['tx-id'],
      'tx-nonce': req.body['tx-nonce'].toString(),
      'tx-value': req.body['tx-value'].toString(),
      'tx-signature': req.body['tx-signature'],
    },
  };
  console.log(options);
  const url = 'http://' + data.nodeAddress + '/balance';
  const updateNode = await fetch(url, options);
  const updated = await updateNode.json();
  res.json(updated);
  console.log(updated);
});

// export const getUser = catchAsync(async (req: Request, res: Response) => {
//   if (typeof req.params['userId'] === 'string') {
//     const user = await userService.getUserById(new mongoose.Types.ObjectId(req.params['userId']));
//     if (!user) {
//       throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
//     }
//     res.send(user);
//   }
// });

// export const updateUser = catchAsync(async (req: Request, res: Response) => {
//   if (typeof req.params['userId'] === 'string') {
//     const user = await userService.updateUserById(new mongoose.Types.ObjectId(req.params['userId']), req.body);
//     res.send(user);
//   }
// });

// export const deleteUser = catchAsync(async (req: Request, res: Response) => {
//   if (typeof req.params['userId'] === 'string') {
//     await userService.deleteUserById(new mongoose.Types.ObjectId(req.params['userId']));
//     res.status(httpStatus.NO_CONTENT).send();
//   }
// });
