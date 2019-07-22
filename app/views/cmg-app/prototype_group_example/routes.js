const express = require('express')
const router = express.Router()

var numberOfChildren = '1';


//All routes for CMG Applications below this line


//Normal route with continue - URN number input 
router.post('/what_is_your_urn_number', function (req, res) {
  res.redirect('fee_queries/domestic_abuse_query')
});

// domestic abuse -  boulean
router.post('/fee_queries/domestic_abuse_query', function (req, res) {

  let domesticAbuseQuery = req.session.data['domestic-abuse-query']
  if (domesticAbuseQuery === 'Yes') {
    res.redirect('domestic_abuse_been_reported')
  } else {
    res.redirect('../about_applicant/applicants_name')
  }
});




// domestic abuse reported -  boulean
router.post('/fee_queries/domestic_abuse_been_reported', function (req, res) {

  let domesticAbuseReported = req.session.data['domestic-abuse-reported']
  if (domesticAbuseReported === 'Yes') {
    res.redirect('who_have_you_reported_to')
  } else {
    res.redirect('report_domestic_abuse')
  }
});

//Domestic Abuse services
router.post('/fee_queries/who_have_you_reported_to', function (req, res) {
  res.redirect('domestic_abuse_no_fee')
});


// report domestic abuse -  boulean
router.post('/fee_queries/report_domestic_abuse', function (req, res) {

  let reportDomesticAbuse = req.session.data['report-domestic-abuse']
  if (reportDomesticAbuse === 'Yes') {
    res.redirect('../dropouts/dropout_report_abuse')
  } else {
    res.redirect('../about_applicant/applicants_name')
  }
});




//Normal route with continue - Applicants name
router.post('/about_applicant/applicants_name', function (req, res) {
  res.redirect('applicants_contact_details')
});



//Normal route with continue - Applicants address 
router.post('/about_applicant/applicants_address', function (req, res) {
  res.redirect('applicants_contact_details')
});



//Normal route with continue - Applicants contact details 
router.post('/about_applicant/applicants_contact_details', function (req, res) {
  res.redirect('../personal_security/personal_security_details')
});



//Normal route with continue - Applicants contact details 
router.post('/personal_security/personal_security_details', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});





//Normal route with continue - Review Answers
router.post('/reviews/review_your_answers_applicants_details', function (req, res) {
  res.redirect('../about_qualifying_child/court_order_under_12_months')
});

// Court order under 12 months -  boulean
router.post('/about_qualifying_child/court_order_under_12_months', function (req, res) {

  let courtOrder12Mths = req.session.data['court-order-12-mths']
  if (courtOrder12Mths === 'Yes') {
    res.redirect('../dropouts/dropout_court_order')
  } else {
    res.redirect('../about_qualifying_child/child_name')
  }
});


//Normal route with continue - Childs name
router.post('/about_qualifying_child/child_name', function (req, res) {
  res.redirect('married_civil_partnership')
});

//Normal route with continue - Childs date of birth
router.post('/about_qualifying_child/child_date_of_birth', function (req, res) {
  res.redirect('married_civil_partnership')
});

// Child married -  boulean
router.post('/about_qualifying_child/married_civil_partnership', function (req, res) {

  let child1married = req.session.data['child-1-married']
  if (child1married === 'Yes') {
    res.redirect('../dropouts/dropout_child_married')
  } else {
    res.redirect('child_in_full_time_education')
  }
});




// Child aged between 16 to 20 -  boulean
router.post('/about_qualifying_child/child_in_full_time_education', function (req, res) {

  let child16To20 = req.session.data['child-in-full-time-education']
  if (child16To20 === 'Yes') {
    res.redirect('add_another_child')
  } else {
    res.redirect('../dropouts/dropout_child_full_time_education')
  }
});



// How many children -  boulean
router.post('/about_qualifying_child/add_another_child', function (req, res) {
  let addAnotherChild = req.session.data['add-another-child']
  if (addAnotherChild === 'Yes') {
    res.redirect('../about_qualifying_child_two/child_name')
  } else {
    res.redirect('../reviews/review_your_answers_child')
  }
});

//Normal route with continue - child review 1
router.post('/reviews/review_your_answers_child', function (req, res) {
  res.redirect('../about_other_parent/other_parent_name')
});

//Normal route with continue - Other parents name
router.post('/about_other_parent/other_parent_name', function (req, res) {
  res.redirect('other_parent_contact_details')
});



//Normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_contact_details', function (req, res) {
  res.redirect('../reviews/review_your_answers_other_parent')
});

//Normal route with continue - Other parents contact details
router.post('/reviews/review_your_answers_other_parent', function (req, res) {
  res.redirect('../service_choice/choose_service')
});



  // Service Choice - Direct Pay -  boulean
router.post('/service_choice/choose_service', function (req, res) {

  let addAnotherChild = req.session.data['add-another-child']
  let serviceChoice = req.session.data['service-choice']

  if (serviceChoice === 'Direct Pay' && addAnotherChild === 'Yes') {
    res.redirect('../reviews/review_your_answers_2')
  }
  
  else if (serviceChoice === 'Direct Pay' && addAnotherChild === 'No') {
    res.redirect('../reviews/review_your_answers')
  } 
  
  else {
    res.redirect('collect_and_pay_bank_details')
  }
  
});


//Normal route with continue - Other parents NINO
router.post('/service_choice/collect_and_pay_bank_details', function (req, res) {
  res.redirect('roll_number')
});

  // Service Choice - Collect and Pay - boulean
  router.post('/service_choice/roll_number', function (req, res) {

    let addAnotherChild = req.session.data['add-another-child']
  
  if (addAnotherChild === 'Yes') {
      res.redirect('../reviews/review_your_answers_collect_and_pay_plus_child')
    }
    
    else {

      res.redirect('../reviews/review_your_answers_collect_and_pay')
    }
  
  });


//Normal route with continue - Review Answers
router.post('/reviews/review_your_answers', function (req, res) {
  let domesticAbuseReported = req.session.data['domestic-abuse-reported']
  if (domesticAbuseReported === 'Yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//Normal route with continue - Review Answers 2 children
router.post('/reviews/review_your_answers_2', function (req, res) {
  let domesticAbuseReported = req.session.data['domestic-abuse-reported']
  if (domesticAbuseReported === 'Yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//Normal route with continue - child review 2 jobs
router.post('/reviews/review_your_answers_collect_and_pay', function (req, res) {
  let domesticAbuseReported = req.session.data['domestic-abuse-reported']
  if (domesticAbuseReported === 'Yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//Normal route with continue - child review 2 jobs 2 children
router.post('/reviews/review_your_answers_collect_and_pay_plus_child', function (req, res) {
  let domesticAbuseReported = req.session.data['domestic-abuse-reported']
  if (domesticAbuseReported === 'Yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});




//Normal route with continue - £20 application fee and submit 
router.post('/application_submission_fee', function (req, res) {
  res.redirect('next_steps')
});




// Do you have an existing case -  boulean
router.post('/existing_case/do_you_have_an_existing_child_maintenance_case', function (req, res) {

  let existingCase = req.session.data['existing-case']
  if (existingCase === 'Yes') {
    res.redirect('enter_child_maintenance_case_number')
  } else {
    res.redirect('../about_qualifying_child/add_another_child')
  }
});

//Normal route with continue - Existing case number 
router.post('/existing_case/enter_child_maintenance_case_number', function (req, res) {
  res.redirect('../about_qualifying_child/add_another_child')
});



//------------------------ *Multiple children route below line 

//Normal route with continue - Childs name
router.post('/about_qualifying_child_two/child_name', function (req, res) {
  res.redirect('married_civil_partnership')
});


// Child married -  boulean
router.post('/about_qualifying_child_two/married_civil_partnership', function (req, res) {

  let child2married = req.session.data['child-2-married']
  if (child2married === 'Yes') {
    res.redirect('../dropouts/dropout_child_married')
  } else {
    res.redirect('child_in_full_time_education')
  }
});



// Child aged between 16 to 20 -  boulean
router.post('/about_qualifying_child_two/child_in_full_time_education', function (req, res) {

  let child16To20 = req.session.data['child-2-in-full-time-education']
  if (child16To20 === 'Yes') {
    res.redirect('add_another_child')
  } else {
    res.redirect('../dropouts/dropout_child_full_time_education')
  }
});




// Child shared care -  boulean
router.post('/about_qualifying_child_two/shared_care', function (req, res) {
    res.redirect('add_another_child')
});

// How many children -  boulean
router.post('/about_qualifying_child_two/add_another_child', function (req, res) {
  let addAnotherChild = req.session.data['add-another-child-2']
  if (addAnotherChild === 'Yes') {
    res.redirect('#')
  } else {
    res.redirect('../reviews/review_your_answers_child_2')
  }
});

//Normal route with continue - child review 1
router.post('/reviews/review_your_answers_child_2', function (req, res) {
  res.redirect('../about_other_parent/other_parent_name')
});


//Normal route with continue - error example
router.post('/national_insurance_number_example', function (req, res) {
  res.redirect('national_insurance_number_error')
});


//Test



// How many children -  boulean
// How many children -  boulean
router.post('/jquery_test/test_1', function (req, res) {
  res.redirect('test_2')
});




module.exports = router
