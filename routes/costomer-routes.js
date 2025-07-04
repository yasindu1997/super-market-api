const express = require('express')

const router = express.Router();

const { saveCustomer, getAllCustomers, deleteCustomer,
    updateCustomer, getCustomerById } = require('../controllers/customer-controller');

router.post('/', saveCustomer);
router.get('/', getAllCustomers);
router.delete('/:id', deleteCustomer);
router.put('/:id', updateCustomer);
router.get('/:id', getCustomerById);

module.exports = router;