import express, { Router } from 'express';
import { nodesController } from '../../modules/nodes';
const router: Router = express.Router();

router.route('/').get(nodesController.getNodes);
router.route('/node').get(nodesController.getNode);

router.route('/balance').get(nodesController.getNodeBalance);

router.route('/update_balance').post(nodesController.updateBalance);
export default router;
