const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// checkbox route
router.post('checkbox-handler', function (req, res) {
  let wasteMaterial = req.session.data['waste']
  if (wasteMaterial == 'carcasses') {
    res.redirect('under');
  } else if (wasteMaterial == 'mines') {
    res.redirect('over');
  } else if (wasteMaterial == 'farm') {
    res.redirect('dropdown');
  }
  else if (wasteMaterial === 'farm' && wasteMaterial === 'mines') {
    res.redirect('boolean');
  }
  else {
    res.redirect('checkbox-1');
  }
});



//All routes for CMG Applications below this line


//Normal route with continue - URN number input 
router.post('/what_is_your_urn_number', function (req, res) {
  res.redirect('declaration')
});

/*
router.post('urn-number-handler', function (req, res) {
  res.redirect('declaration')
});
*/



// both parents live in uk boulean
router.post('/about_applicant/both_parents_live_in_uk', function (req, res) {

  let liveInUk = req.session.data['live-in-uk']
  if (liveInUk === 'Yes') {
    res.redirect('applicants_name')
  } else {
    res.redirect('both_parents_registered_to_uk')
  }
});


// both parents registered in uk boulean
router.post('/about_applicant/both_parents_registered_to_uk', function (req, res) {

  let registeredInUk = req.session.data['registered-in-uk']
  if (registeredInUk === 'Yes') {
    res.redirect('applicants_name')
  } else {
    res.redirect('../dropouts/dropout_registered_to_uk')
  }
});

//Normal route with continue - Applicants Name 
router.post('/about_applicant/applicants_name', function (req, res) {
  res.redirect('applicants_date_of_birth')
});

//Normal route with continue - Applicants DOB 
router.post('/about_applicant/applicants_date_of_birth', function (req, res) {
  res.redirect('applicants_national_insurance_number')
});

//Normal route with continue - Applicants NINO 
router.post('/about_applicant/applicants_national_insurance_number', function (req, res) {
  res.redirect('applicants_address')
});

//Normal route with continue - Applicants address 
router.post('/about_applicant/applicants_address', function (req, res) {
  res.redirect('applicants_contact_details')
});

//Normal route with continue - Applicants contact details 
router.post('/about_applicant/applicants_contact_details', function (req, res) {
  res.redirect('../existing_case/do_you_have_an_existing_child_maintenance_case')
});

// Do you have an existing case -  boulean
router.post('/existing_case/do_you_have_an_existing_child_maintenance_case', function (req, res) {

  let existingCase = req.session.data['existing-case']
  if (existingCase === 'Yes') {
    res.redirect('enter_child_maintenance_case_number')
  } else {
    res.redirect('../about_qualifying_child/how_many_children')
  }
});

//Normal route with continue - Existing case number 
router.post('/existing_case/enter_child_maintenance_case_number', function (req, res) {
  res.redirect('../about_qualifying_child/how_many_children')
});

// How many children -  boulean
router.post('/about_qualifying_child/how_many_children', function (req, res) {
  let existingCase = req.session.data['existing-case'];
    res.redirect('child_name')
});

//Normal route with continue - Childs name
router.post('/about_qualifying_child/child_name', function (req, res) {
  res.redirect('child_date_of_birth')
});

//Normal route with continue - Childs date of birth
router.post('/about_qualifying_child/child_date_of_birth', function (req, res) {
  res.redirect('child_in_full_time_education')
});


// Child aged between 16 to 20 -  boulean
router.post('/about_qualifying_child/child_in_full_time_education', function (req, res) {

  let child16To20 = req.session.data['child-in-full-time-education']
  if (child16To20 === 'Yes') {
    res.redirect('court_order_under_12_months')
  } else {
    res.redirect('../dropouts/dropout_child_full_time_education')
  }
});


// Court order under 12 months -  boulean
router.post('/about_qualifying_child/court_order_under_12_months', function (req, res) {

  let courtOrder12Mths = req.session.data['court-order-12-mths']
  if (courtOrder12Mths === 'Yes') {
    res.redirect('../dropouts/dropout_court_order')
  } else {
    res.redirect('../about_qualifying_child/shared_care')
  }
});

// Child shared care -  boulean
router.post('/about_qualifying_child/shared_care', function (req, res) {
  let otherParentSharedCare = req.session.data['shared-care'];
    res.redirect('../about_other_parent/other_parent_name')
});



//Normal route with continue - Other parents name
router.post('/about_other_parent/other_parent_name', function (req, res) {
  res.redirect('other_parent_date_of_birth')
});

//Normal route with continue - Other parents date of birth
router.post('/about_other_parent/other_parent_date_of_birth', function (req, res) {
  res.redirect('other_parent_national_insurance_number')
});

//Normal route with continue - Other parents NINO
router.post('/about_other_parent/other_parent_national_insurance_number', function (req, res) {
  res.redirect('other_parent_address')
});

//Normal route with continue - Other parents address
router.post('/about_other_parent/other_parent_address', function (req, res) {
  res.redirect('other_parent_contact_details')
});

//Normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_contact_details', function (req, res) {
  res.redirect('other_parent_employment_details')
});

//Normal route with continue - Other parents employment details
router.post('/about_other_parent/other_parent_employment_details', function (req, res) {
  res.redirect('../fee_queries/domestic_abuse_query')
});

// Service Choice -  boulean
router.post('/service_choice/choose_service', function (req, res) {

  let serviceChoice = req.session.data['service-choice']
   if (serviceChoice === 'government-gateway') {
    res.redirect('../personal_security/personal_security_details')
  }
  
  else {
    res.redirect('collect_and_pay_bank_details')
  }
  
});

//Normal route with continue - Collect and pay bank details 
router.post('/service_choice/collect_and_pay_bank_details', function (req, res) {
  res.redirect('../personal_security/personal_security_details')
});

// domestic abuse -  boulean
router.post('/fee_queries/domestic_abuse_query', function (req, res) {

  let domesticAbuseQuery = req.session.data['domestic-abuse-query']
  if (domesticAbuseQuery === 'Yes') {
    res.redirect('domestic_abuse_been_reported')
  } else {
    res.redirect('../service_choice/service_types')
  }
});

// domestic abuse reported -  boulean
router.post('/fee_queries/domestic_abuse_been_reported', function (req, res) {

  let domesticAbuseReported = req.session.data['domestic-abuse-reported']
  if (domesticAbuseReported === 'Yes') {
    res.redirect('../service_choice/service_types')
  } else {
    res.redirect('report_domestic_abuse')
  }
});

// report domestic abuse -  boulean
router.post('/fee_queries/report_domestic_abuse', function (req, res) {

  let reportDomesticAbuse = req.session.data['report-domestic-abuse']
  if (reportDomesticAbuse === 'Yes') {
    res.redirect('../dropouts/dropout_report_abuse')
  } else {
    res.redirect('../service_choice/service_types')
  }
});

//Normal route with continue - £20 application fee and submit 
router.post('/application_submission_fee', function (req, res) {
  res.redirect('next_steps')
});

/*
//Normal route with continue - security details 
router.post('personal-security/personal-security-details-handler', function (req, res) {

  let domesticAbuseQuery = req.session.data['domestic-abuse-query']
  if (domesticAbuseQuery === 'No') {
    res.redirect('review_your_answers')
  } else {
    res.redirect('review_your_answers_no_pay')
  }
});
*/

router.post('/personal_security/personal_security_details', function (req, res) {
  res.redirect('../review_your_answers')
});

//Normal route with continue - Review Answers
router.post('/review_your_answers', function (req, res) {
  let domesticAbuseQuery = req.session.data['domestic-abuse-query']
  if (domesticAbuseQuery === 'No') {
    res.redirect('application_submission_fee')
  } else {
    res.redirect('submit_application')
  }
});

//Normal route with continue - pay fee and submit application
router.post('/application_submission_fee', function (req, res) {
  res.redirect('next_steps')
});

//------------------------ *Multiple children route below line 

//Normal route with continue - Childs name
router.post('/qualifying_child_2/child_name_2', function (req, res) {
  res.redirect('about_qualifying_child_2/child_date_of_birth_2')
});


module.exports = router
