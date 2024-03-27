import mongoose from 'mongoose';
// import validator from 'validator';
import toJSON from '../toJSON/toJSON';
// import paginate from '../paginate/paginate';
// import { roles } from '../../config/roles';
import { INode, INodeModel } from './nodes.interfaces';

const nodesSchema = new mongoose.Schema<INode, INodeModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    nodeVersion: {
      type: String,
      required: true,
      trim: true,
    },
    nodeId: {
      type: String,
      required: true,
      trim: true,
    },
    network: {
      type: String,
      required: true,
      trim: true,
    },
    transactionMachine: {
      type: Array,
    },
    virtualMachine: { type: String },
    aim: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
nodesSchema.plugin(toJSON);
// nodesSchema.plugin(paginate);

// /**
//  * Check if email is taken
//  * @param {string} email - The user's email
//  * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
//  * @returns {Promise<boolean>}
//  */
// nodesSchema.static('isEmailTaken', async function (email: string, excludeUserId: mongoose.ObjectId): Promise<boolean> {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
//   return !!user;
// });

// /**
//  * Check if password matches the user's password
//  * @param {string} password
//  * @returns {Promise<boolean>}
//  */
// nodesSchema.method('isPasswordMatch', async function (password: string): Promise<boolean> {
//   const user = this;
//   return bcrypt.compare(password, user.password);
// });

// nodesSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

const Nodes = mongoose.model<INode, INodeModel>('Nodes', nodesSchema);

export default Nodes;
