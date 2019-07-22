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
  if (domesticAbuseReported === 'yes') {
    res.redirect('../exemption_pages/exeption_domestic_abuse')
  } else {
    res.redirect('domestic_abuse_been_reported_reveal')
  }
});

// domestic abuse reported -  boulean
router.post('/fee_queries/domestic_abuse_been_reported_reveal', function (req, res) {

  res.redirect('../exemption_pages/exeption_domestic_abuse')
});









//Normal route with continue - Applicants title 
router.post('/about_applicant/applicants_title', function (req, res) {
  res.redirect('applicants_name')
});


//Normal route with continue - Applicants title 
router.post('/about_applicant/applicants_name', function (req, res) {
  res.redirect('applicants_date_of_birth')
});



//Normal route with continue - Applicants DOB 
router.post('/about_applicant/applicants_date_of_birth', function (req, res) {
  let applicantDateOfBirthYear = req.session.data['applicant-date-of-birth-year']
  if (applicantDateOfBirthYear > 1999 ) {
    res.redirect('../exemption_pages/exemption_applicant_age')
  } else {
    res.redirect('applicants_national_insurance_number')
  }
});






//Normal route with continue - Applicants NINO 
router.post('/about_applicant/applicants_national_insurance_number', function (req, res) {
  res.redirect('../about_applicant/applicants_address')
});




//Normal route with continue - Applicants address 
router.post('/about_applicant/applicants_address', function (req, res) {
  res.redirect('applicants_contact_details')
});

//Normal route with continue - Applicants address manual 
router.post('/about_applicant/applicants_address_manual_input', function (req, res) {
  


let applicantsAddressCountry = req.session.data['applicants-address-country']
switch(applicantsAddressCountry) {
  case "united kingdom":
  res.redirect('applicants_contact_details');
    break;
  case "england":
    res.redirect('applicants_contact_details');
      break;
  case "wales":
  res.redirect('applicants_contact_details');
    break;
  case "scotland":
  res.redirect('applicants_contact_details');
    break;
  case "northern ireland":
  res.redirect('applicants_contact_details');
    break;
  case "ireland":
    res.redirect('applicants_contact_details');
    break;
  case "britain":
    res.redirect('applicants_contact_details');
    break;
  case "United Kingdom":
    res.redirect('applicants_contact_details');
      break;
  case "England":
      res.redirect('applicants_contact_details');
        break;
  case "Wales":
    res.redirect('applicants_contact_details');
      break;
  case "Scotland":
    res.redirect('applicants_contact_details');
      break;
  case "Northern ireland":
    res.redirect('applicants_contact_details');
      break;
  case "Ireland":
      res.redirect('applicants_contact_details');
      break;
    case "Britain":
      res.redirect('applicants_contact_details');
      break;
  default:
  res.redirect('../about_applicant/registered_to_uk');
}

});



// Registered to UK
router.post('/about_applicant/registered_to_uk', function (req, res) {

  let registeredInUk = req.session.data['registered-in-uk']

  if (registeredInUk === 'none') {
    res.redirect('../dropouts/dropout_registered_to_uk')
  } else {
    res.redirect('applicants_contact_details')
  }
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

  let courtOrderYrs = req.session.data['child-1-court-order-year']

  if (courtOrderYrs > 2017) {
    res.redirect('../dropouts/dropout_court_order')
  } else {
    res.redirect('../about_qualifying_child/child_name')
  }
});


//Normal route with continue - Childs name
router.post('/about_qualifying_child/child_name', function (req, res) {
  res.redirect('child_date_of_birth')
});



//Normal route with continue - Childs date of birth
router.post('/about_qualifying_child/child_date_of_birth', function (req, res) {
  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
  if (child1DateOfBirthYear < 2004 && child1DateOfBirthYear > 1999 ) {
    res.redirect('married_civil_partnership')
  } else if (child1DateOfBirthYear < 2000 ){
    res.redirect('../dropouts/dropout_child_married')
  } else {
    res.redirect('shared_care')
  }
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
    res.redirect('shared_care')
  } else {
    res.redirect('../dropouts/dropout_child_full_time_education')
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
    res.redirect('../reviews/review_your_answers_child')
  }
});

//Normal route with continue - child review 1
router.post('/reviews/review_your_answers_child', function (req, res) {
  res.redirect('../about_other_parent/other_parent_name')
});



//Normal route with continue - Other parents name
router.post('/about_other_parent/other_parent_introduction', function (req, res) {
  res.redirect('other_parent_name')
});


//Normal route with continue - Other parents name
router.post('/about_other_parent/other_parent_name', function (req, res) {
  res.redirect('other_parent_date_of_birth')
});



//Normal route with continue - Other parents date of birth
router.post('/about_other_parent/other_parent_date_of_birth', function (req, res) {
let otherParentDob = req.session.data['other-parent-dob']
if (otherParentDob === 'yes') {
  res.redirect('other_parent_national_insurance_number')
} else {
  res.redirect('other_parent_approx_age')
}
});


//Normal route with continue - Other parents approx age
router.post('/about_other_parent/other_parent_approx_age', function (req, res) {
  res.redirect('other_parent_national_insurance_number')
});




//Normal route with continue - Other parents NINO
router.post('/about_other_parent/other_parent_national_insurance_number', function (req, res) {
  res.redirect('other_parent_do_you_know_address')
});


//Normal route with continue - Other parents date of birth
router.post('/about_other_parent/other_parent_do_you_know_address', function (req, res) {
  let otherParentKnowAddress = req.session.data['other-parent-know-address']
  if (otherParentKnowAddress === 'yes') {
    res.redirect('other_parent_address')
  } else {
    res.redirect('other_parent_do_you_know_previous_address')
  }
  });


  //Normal route with continue - Other parents date of birth
router.post('/about_other_parent/other_parent_do_you_know_previous_address', function (req, res) {
 
  let otherParentKnowPrevAddress = req.session.data['other-parent-know-previous-address']
  if (otherParentKnowPrevAddress === 'yes') {
    res.redirect('other_parent_previous_address')
  } else {
    res.redirect('other_parent_contact_details')
  }
  });
  

  //Normal route with continue - Other parents address
router.post('/about_other_parent/other_parent_previous_address', function (req, res) {
  res.redirect('other_parent_contact_details')
});


//Normal route with continue - Other parents address
router.post('/about_other_parent/other_parent_address', function (req, res) {
  res.redirect('other_parent_contact_details')
});


//Normal route with continue - Other parents address
router.post('/about_other_parent/other_parent_employment_details', function (req, res) {
  res.redirect('other_parent_other_information')
});




//Normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_contact_details', function (req, res) {
  res.redirect('other_parent_do_they_work')
});


//Normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_other_information', function (req, res) {
  res.redirect('../reviews/review_your_answers_other_parent')
});

//Normal route with continue - Other parents contact details
router.post('/reviews/review_your_answers_other_parent', function (req, res) {
  res.redirect('../service_choice/choose_service')
});


  //Normal route with continue - Other Works?
  router.post('/about_other_parent/other_parent_do_they_work', function (req, res) {
 
    let otherParentWork = req.session.data['other-parent-work']
    if (otherParentWork === 'yes') {
      res.redirect('other_parent_know_about_work')
    } else if (otherParentWork === 'no') {
      res.redirect('other_parent_know_about_benefits')
    } else {
      res.redirect('other_parent_other_information')
    }
    });



    //Normal route with continue - Other parent Works?
    router.post('/about_other_parent/other_parent_know_about_work', function (req, res) {
 
      let otherParentKnowAboutWork = req.session.data['other-parent-know-about-work']
      if (otherParentKnowAboutWork === 'yes') {
        res.redirect('other_parent_employment_details')
      } else {
        res.redirect('other_parent_other_information')
      } 
      });

         //Normal route with continue - Know of benefits?
    router.post('/about_other_parent/other_parent_know_about_benefits', function (req, res) {
 
      let knowOfAnyBenefits = req.session.data['know-of-any-benefits']
      if (knowOfAnyBenefits === 'yes') {
        res.redirect('other_parent_what_benefits')
      } else {
        res.redirect('other_parent_other_information')
      } 
      });

  //Normal route with continue - Other parents NINO
router.post('/about_other_parent/other_parent_what_benefits', function (req, res) {
  res.redirect('other_parent_other_information')
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
  let feeExempt = req.session.data['fee-exempt']
  if (feeExempt === 'yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//Normal route with continue - Review Answers 2 children
router.post('/reviews/review_your_answers_2', function (req, res) {
  let feeExempt = req.session.data['fee-exempt']
  if (feeExempt === 'yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//Normal route with continue - child review 2 jobs
router.post('/reviews/review_your_answers_collect_and_pay', function (req, res) {
  let feeExempt = req.session.data['fee-exempt']
  if (feeExempt === 'yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//Normal route with continue - child review 2 jobs 2 children
router.post('/reviews/review_your_answers_collect_and_pay_plus_child', function (req, res) {
  let feeExempt = req.session.data['fee-exempt']
  if (feeExempt === 'yes') {
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
  res.redirect('child_date_of_birth')
});

//Normal route with continue - Childs date of birth
router.post('/about_qualifying_child_two/child_date_of_birth', function (req, res) {
  let child1DateOfBirthYear = req.session.data['child-2-date-of-birth-year']
  if (child1DateOfBirthYear < 2004 && child1DateOfBirthYear > 1999 ) {
    res.redirect('married_civil_partnership')
  } else if (child1DateOfBirthYear < 2000 ){
    res.redirect('../dropouts/dropout_child_married')
  } else {
    res.redirect('shared_care')
  }
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
    res.redirect('shared_care')
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






//numbver example
router.post('/test/testcase_1', function (req, res) {
  let example1 = req.session.data['example_1']
  if (example1 < 2000 ) {
    res.redirect('example_part_2')
  } else {
    res.redirect('example_part_3')
  }
});







//Normal route with continue - exemption northern ireland
router.post('/exemption_pages/exemption_applicant_northern_ireland', function (req, res) {
  res.redirect('../about_applicant/applicants_contact_details')
});

//Normal route with continue - exemption age
router.post('/exemption_pages/exemption_applicant_age', function (req, res) {
  res.redirect('../about_applicant/applicants_national_insurance_number')
});

//Normal route with continue - exemption age
router.post('/exemption_pages/exeption_domestic_abuse', function (req, res) {
  res.redirect('../about_applicant/applicants_name')
});








module.exports = router
