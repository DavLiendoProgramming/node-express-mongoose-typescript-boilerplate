import { Model } from 'mongoose';
import { QueryResult } from '../paginate/paginate';

export interface INode {
  status: string;
  name: string;
  address: string;
  nodeVersion: string;
  nodeId: string;
  network: string;
  transactionMachine: any;
  virtualMachine: string;
  aim: {
    interfaceVersion: string;
    aims: any[];
  };
}

export interface INodeModel extends Model<INode> {
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}
