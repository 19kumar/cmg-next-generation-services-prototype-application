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
  res.redirect('../about_applicant/applicants_name')
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

//Normal route with continue - Applicants title 
router.post('/about_applicant/applicants_title', function (req, res) {
  res.redirect('applicants_name')
});




//Normal route with continue - Applicants Name 
router.post('/about_applicant/applicants_name', function (req, res) {
  res.redirect('applicants_date_of_birth')
});

//Normal route with continue - Applicants DOB 
router.post('/about_applicant/applicants_date_of_birth', function (req, res) {
  res.redirect('applicants_do_you_know_national_insurance_number')
});

// do you know your NINO
router.post('/about_applicant/applicants_do_you_know_national_insurance_number', function (req, res) {

  let knowNationalInsurance = req.session.data['know-national-insurance']
  if (knowNationalInsurance === 'Yes') {
    res.redirect('../about_applicant/applicants_national_insurance_number')
  } else {
    res.redirect('../dropouts/dropout_do_not_know_national_insurance')
  }
});


//Normal route with continue - Applicants NINO 
router.post('/about_applicant/applicants_national_insurance_number', function (req, res) {
  res.redirect('../about_other_parent/other_parent_live_in_uk')
});

// both parents live in uk boulean
router.post('/about_other_parent/other_parent_live_in_uk', function (req, res) {

  let otherParentliveInUk = req.session.data['other-parent-live-in-uk']
  if (otherParentliveInUk === 'Yes') {
    res.redirect('../about_applicant/applicants_address')
  } else {
    res.redirect('../dropouts/dropout_registered_to_uk')
  }
});


//Normal route with continue - Applicants address 
// router.post('/about_applicant/applicants_address', function (req, res) {
//   res.redirect('applicants_contact_details')
// });


//Normal route with continue - Applicants address 
router.post('/about_applicant/applicants_address', function (req, res) {
  res.redirect('applicants_contact_details')
});



// both parents registered in uk boulean
router.post('/about_applicant/both_parents_registered_to_uk', function (req, res) {

  let registeredInUk = req.session.data['registered-in-uk']
  if (registeredInUk === 'Yes') {
    res.redirect('../about_other_parent/other_parent_address')
  } else {
    res.redirect('../dropouts/dropout_registered_to_uk')
  }
});


//Normal route with continue - Applicants contact details 
router.post('/about_applicant/applicants_contact_details', function (req, res) {
  res.redirect('../about_other_parent/other_parent_name')
});



//Normal route with continue - Other parents name
router.post('/about_other_parent/other_parent_name', function (req, res) {
  res.redirect('../review_your_answers_applicants_details')
});

//Normal route with continue - Review Answers
router.post('/review_your_answers_applicants_details', function (req, res) {
  res.redirect('./about_qualifying_child/child_name')
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
    res.redirect('add_another_child')
});

// How many children -  boulean
router.post('/about_qualifying_child/add_another_child', function (req, res) {
  let addAnotherChild = req.session.data['add-another-child']
  if (addAnotherChild === 'Yes') {
    res.redirect('../about_qualifying_child_two/child_name')
  } else {
    res.redirect('../review_your_answers_child')
  }
});

//Normal route with continue - child review 1
router.post('/review_your_answers_child', function (req, res) {
  res.redirect('./about_other_parent/other_parent_do_you_know_address')
});

// do you know other parent address
router.post('/about_other_parent/other_parent_do_you_know_address', function (req, res) {

  let otherParentKnowAddress = req.session.data['other-parent-know-address']
  if (otherParentKnowAddress === 'Yes') {
    res.redirect('../about_other_parent/other_parent_address')
  } else {
    res.redirect('other_parent_date_of_birth')
  }
});

//Normal route with continue - Other parents address
router.post('/about_other_parent/other_parent_address', function (req, res) {
  res.redirect('other_parent_date_of_birth')
});




//Normal route with continue - Other parents date of birth
router.post('/about_other_parent/other_parent_date_of_birth', function (req, res) {
  res.redirect('other_parent_national_insurance_number')
});

//Normal route with continue - Other parents NINO
router.post('/about_other_parent/other_parent_national_insurance_number', function (req, res) {
  res.redirect('other_parent_do_you_know_contact_details')
});

//Normal route with continue - Does other parent work
router.post('/about_other_parent/other_parent_do_you_know_contact_details', function (req, res) {

  let doYouKnowContactDetails = req.session.data['do_you_know_contact_details']
  if (doYouKnowContactDetails === 'yes') {
    res.redirect('other_parent_contact_details')
  } else {
    res.redirect('other_parent_do_you_know_employment_details')
  }
});

//Normal route with continue - Does other parent work
router.post('/about_other_parent/other_parent_do_you_know_employment_details', function (req, res) {

  let doYouKnowEmploymentDetails = req.session.data['do_you_know_employment_details']
  if (doYouKnowEmploymentDetails === 'yes') {
    res.redirect('other_parent_employment_details')
  } else {
    res.redirect('../service_choice/choose_service')
  }
});




//Normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_contact_details', function (req, res) {
  res.redirect('other_parent_work')
});


//Normal route with continue - Does other parent work
router.post('/about_other_parent/other_parent_work', function (req, res) {

  let otherParentWork = req.session.data['other-parent-work']
  if (otherParentWork === 'Yes') {
    res.redirect('other_parent_employment_details')
  } else {
    res.redirect('../service_choice/choose_service')
  }
});


//Normal route with continue - Other parents employment details
router.post('/about_other_parent/other_parent_employment_details', function (req, res) {
  res.redirect('../service_choice/choose_service')
});


/*
//Normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_employment_details', function (req, res) {
  let addEmploymentRole = req.session.data['add_employment_role']
    if (addEmploymentRole == 'on') {
      res.redirect('../about_other_parent/other_parent_address')
    } else {
      res.redirect('../service_choice/choose_service')
    }
  });
  */

  // Service Choice -  boulean
router.post('/service_choice/choose_service', function (req, res) {

  let addAnotherChild = req.session.data['add-another-child']
  let addEmploymentRole = req.session.data['add_employment_role']
  let serviceChoice = req.session.data['service-choice']

   if (serviceChoice === 'government-gateway' && addAnotherChild === 'Yes' && addEmploymentRole == 'on') {
    res.redirect('../review_your_answers_2_jobs_2_child')
  } 
  
  else if (serviceChoice === 'government-gateway' && addAnotherChild === 'No' && addEmploymentRole == 'on') {
    res.redirect('../review_your_answers_2_jobs')

  } 
  
  else if (serviceChoice === 'government-gateway' && addAnotherChild === 'Yes') {
    res.redirect('../review_your_answers_2')
  }
  
  else if (serviceChoice === 'government-gateway' && addAnotherChild === 'No') {
    res.redirect('../review_your_answers')
  } 
  
  else {
    res.redirect('collect_and_pay_bank_details')
  }
  
});

  // Service Choice -  boulean
  router.post('/service_choice/collect_and_pay_bank_details', function (req, res) {

    let addAnotherChild = req.session.data['add-another-child']
    let addEmploymentRole = req.session.data['add_employment_role']
    let serviceChoice = req.session.data['service-choice']
  
     if (addAnotherChild === 'Yes' && addEmploymentRole == 'on') {
      res.redirect('../review_your_answers_2_jobs_2_child')
    } 
    
    else if (addAnotherChild === 'No' && addEmploymentRole == 'on') {
      res.redirect('../review_your_answers_2_jobs')
  
    } 
    
    else if (addAnotherChild === 'Yes') {
      res.redirect('../review_your_answers_2')
    }
    
    else {

      res.redirect('../review_your_answers')
    }
  
  });


/*
// How many children -  boulean
router.post('/service_choice/collect_and_pay_bank_details', function (req, res) {
  let addAnotherChild = req.session.data['add-another-child']
  if (addAnotherChild === 'Yes') {
    res.redirect('../review_your_answers_2')
  } else {
    res.redirect('../review_your_answers')
  }
});

*/


//Normal route with continue - Review Answers
router.post('/review_your_answers', function (req, res) {
  res.redirect('personal_security/personal_security_details')
});

//Normal route with continue - Review Answers 2 children
router.post('/review_your_answers_2', function (req, res) {
  res.redirect('personal_security/personal_security_details')
});

//Normal route with continue - child review 2 jobs
router.post('/review_your_answers_2_jobs', function (req, res) {
  res.redirect('personal_security/personal_security_details')
});

//Normal route with continue - child review 2 jobs 2 children
router.post('/review_your_answers_2_jobs_2_child', function (req, res) {
  res.redirect('personal_security/personal_security_details')
});



//Normal route with continue - Personal security details
router.post('/personal_security/personal_security_details', function (req, res) {
  let domesticAbuseQuery = req.session.data['domestic-abuse-query']
  if (domesticAbuseQuery === 'No') {
    res.redirect('../application_submission_fee')
  } else {
    res.redirect('../submit_application')
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
  res.redirect('child_date_of_birth')
});

//Normal route with continue - Childs date of birth
router.post('/about_qualifying_child_two/child_date_of_birth', function (req, res) {
  res.redirect('child_in_full_time_education')
});


// Child aged between 16 to 20 -  boulean
router.post('/about_qualifying_child_two/child_in_full_time_education', function (req, res) {

  let child16To20 = req.session.data['child-2-in-full-time-education']
  if (child16To20 === 'Yes') {
    res.redirect('court_order_under_12_months')
  } else {
    res.redirect('../dropouts/dropout_child_full_time_education')
  }
});


// Court order under 12 months -  boulean
router.post('/about_qualifying_child_two/court_order_under_12_months', function (req, res) {

  let courtOrder12Mths = req.session.data['court-order-12-mths']
  if (courtOrder12Mths === 'Yes') {
    res.redirect('../dropouts/dropout_court_order')
  } else {
    res.redirect('../about_qualifying_child_two/shared_care')
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
    res.redirect('../review_your_answers_child_2')
  }
});

//Normal route with continue - child review 1
router.post('/review_your_answers_child_2', function (req, res) {
  res.redirect('./about_other_parent/other_parent_do_you_know_address')
});


//Normal route with continue - error example
router.post('/national_insurance_number_example', function (req, res) {
  res.redirect('national_insurance_number_error')
});







module.exports = router
