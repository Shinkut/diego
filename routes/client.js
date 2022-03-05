const express =require ('express')
const router = express.Router()
const pcontroller = require('../controllers/pcontroller')


router.get('/', pcontroller.read);
router.get('/alt',pcontroller.alta);
router.post('/insert', pcontroller.insert);
router.get('/info/:id', pcontroller.infoP);
router.post('/update/:id', pcontroller.update);
module.exports = router;
