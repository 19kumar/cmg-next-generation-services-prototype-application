const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line






router.post('/share_bank_details', function (req, res) {

    let shareBankDetails = req.session.data['share-bank-details']
    if (shareBankDetails === 'yes') {
      res.redirect('collect_and_pay_bank_details')
    } else {
      res.redirect('geographic_sort_code')
    }
  });



  router.post('/collect_and_pay_bank_details', function (req, res) {
    res.redirect('roll_number')
});

router.post('/geographic_sort_code', function (req, res) {
  res.redirect('collect_and_pay_bank_details')
});



// router.post('/what-do-you-want-to-claim-for', function(req, res) {
//     res.render('taken-to-iform');
// });

module.exports = router
