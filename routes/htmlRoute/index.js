const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/note', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
module.exports = router;