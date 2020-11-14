/* GET homepage */
const homelist = (req, res) => {
    res.render('index', { title: 'homelist' });
};
/* GET location page */
const locationInfo = (req, res) => {
    res.render('index', { title: 'locationInfo' });
};
/* GET Add review page */
const addReview = (req, res) => {
    res.render('index', { title: 'addReview' });
};        
module.exports = {
    homelist,
    locationInfo,
    addReview});
};
