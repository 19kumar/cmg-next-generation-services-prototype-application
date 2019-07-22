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
    res.redirect('../about_qualifying_child/court_order_under_12_months')
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

// domestic abuse reported reveal -  boulean
router.post('/fee_queries/domestic_abuse_been_reported_reveal', function (req, res) {

  res.redirect('../exemption_pages/exeption_domestic_abuse')
});




// Court order under 12 months -  boulean
router.post('/about_qualifying_child/court_order_under_12_months', function (req, res) {

  let courtOrderYrs = req.session.data['child-1-court-order-year']
  let courtOrder = req.session.data['child-1-court-order']

  if (courtOrder === 'no') {
    res.redirect('../about_applicant/applicants_name')
  } else if (courtOrderYrs > 2017 || courtOrderYrs < 2004) {
    res.redirect('../dropouts/dropout_court_order')
  }  else {
    res.redirect('../about_applicant/applicants_name')
  }
});

//Normal route with continue - Applicants address 
router.post('/about_applicant/applicants_name', function (req, res) {
  res.redirect('applicants_date_of_birth')
});





//Normal route with continue - Applicants title 
router.post('/about_applicant/applicants_date_of_birth', function (req, res) {

  let applicantDateOfBirth = req.session.data['applicant-date-of-birth-year']
  let feeExempt = req.session.data['fee-exempt']
  
  if (applicantDateOfBirth > 2000 && feeExempt === 'yes') {
    res.redirect('applicants_national_insurance_number')
  } else if (applicantDateOfBirth > 2000) {
    res.redirect('../exemption_pages/exemption_applicant_age')
  } else {
    res.redirect('applicants_national_insurance_number')
  }
});

//Normal route with continue - Applicants address 
router.post('/about_applicant/applicants_national_insurance_number', function (req, res) {
  res.redirect('applicants_address')
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

//Normal route with continue - Applicants address manual 
router.post('/about_applicant/applicants_contact_address_manual_input', function (req, res) {
  res.redirect('applicants_contact_details')
});



//Normal route with continue - Applicants contact details 
router.post('/about_applicant/applicants_contact_details', function (req, res) {
  res.redirect('applicants_contact_text_query')
});

//Normal route with continue - Applicants contact details 
router.post('/about_applicant/applicants_contact_text_query', function (req, res) {
  res.redirect('../about_applicant/applicants_email_address')
});


//Normal route with continue - Applicants contact details 
router.post('/about_applicant/applicants_email_address', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});



//Normal route with continue - Review Answers
router.post('/reviews/review_your_answers_applicants_details', function (req, res) {
  res.redirect('../about_qualifying_child/how_many_children')
});





//Normal route with continue - Childs name
router.post('/about_qualifying_child/child_name', function (req, res) {

  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
  let numberOfChildren = req.session.data['number-of-children']
  
  if (child1DateOfBirthYear < 2004 && child1DateOfBirthYear > 1999 ) {
    res.redirect('married_civil_partnership')
  } else if (child1DateOfBirthYear < 2000 && numberOfChildren > 1 ){
    res.redirect('../dropouts/dropout_child_reasons_2')
  } else if (child1DateOfBirthYear < 2000 && numberOfChildren === '1'){
    res.redirect('../dropouts/dropout_child_reasons')
  } else {
    res.redirect('consent_order')
  }
  
});




//Normal route with continue - Childs date of birth
router.post('/about_qualifying_child/child_date_of_birth', function (req, res) {

  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
  let addAnotherName = req.session.data['add-another-name']

  if (child1DateOfBirthYear < 2004 && child1DateOfBirthYear > 1999 ) {
    res.redirect('child_in_full_time_education')
  } 
  
  else if (child1DateOfBirthYear < 2000 && addAnotherName === 'yes' ){
    res.redirect('../dropouts/dropout_child_reasons_2')
  } 

  else if (child1DateOfBirthYear < 2000 && addAnotherName === 'no'){
    res.redirect('../dropouts/dropout_child_reasons')
  } 
  
  else {
    res.redirect('consent_order')
  }
});


// Child aged between 16 to 20 -  boulean
router.post('/about_qualifying_child/child_in_full_time_education', function (req, res) {

  let childNumberOfChildren = req.session.data['number-of-children']
  let child16To20 = req.session.data['child-in-full-time-education']
  if (child16To20 === 'Yes') {
    res.redirect('consent_order')
  } else if (child16To20 === 'No' && childNumberOfChildren > 1) {
    res.redirect('../dropouts/dropout_child_reasons_2')
  } else {
    res.redirect('../dropouts/dropout_child_reasons')
  }
});












// Child married -  boulean
router.post('/about_qualifying_child/married_civil_partnership', function (req, res) {

  let childNumberOfChildren = req.session.data['number-of-children']
  let child1married = req.session.data['child-1-married']
  if (child1married === 'No') {
    res.redirect('child_benefit')
  } else if (child1married === 'Yes' && childNumberOfChildren > 1) {
    res.redirect('../dropouts/dropout_child_reasons_2')
  } else {
    res.redirect('../dropouts/dropout_child_reasons')
  }
  });


//Normal route with continue - Consent order
router.post('/about_qualifying_child/consent_order', function (req, res) {
  res.redirect('shared_care')
});





// Child shared care -  boulean
router.post('/about_qualifying_child/shared_care', function (req, res) {
  let sharedCare = req.session.data['shared-care']
  let numberOfChildren = req.session.data['number-of-children']
  if (sharedCare === '183 nights') {
    res.redirect('../dropouts/dropout_child_reasons')
  } else if  (numberOfChildren === '1'){
    res.redirect('child_check_answers')
  } else {
    res.redirect('../about_qualifying_child_two/child_name')
  }
  });






// Child check answers -  boulean
router.post('/about_qualifying_child/child_check_answers', function (req, res) {
  let childNumberOfChildren = req.session.data['number-of-children']
  
  
    if (childNumberOfChildren === '1') {
  
      res.redirect('../about_other_parent/other_parent_introduction')
      } 
  
      else {
  
        res.redirect('../about_qualifying_child_two/child_name')
      }
    
  });





// How many children -  boulean
router.post('/about_qualifying_child/add_another_child', function (req, res) {
  let addAnotherChild = req.session.data['add-another-child']
  if (addAnotherChild === 'Yes') {
    res.redirect('../about_qualifying_child_two/child_name')
  } else {
    res.redirect('../tasklists/tasklist_3')
  }
});



//Normal route with continue - child review 1
router.post('/reviews/review_your_answers_child', function (req, res) {
  res.redirect('../about_other_parent/other_parent_name')
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

//Normal route with continue - Other parents NINO
router.post('/about_other_parent/other_parent_national_insurance_number', function (req, res) {
  res.redirect('other_parent_do_you_know_address')
});


//Normal route with continue - Other parents address
router.post('/about_other_parent/other_parent_address', function (req, res) {
  res.redirect('other_parent_contact_details')
});


//Normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_contact_details', function (req, res) {
  res.redirect('other_parent_other_information')
});


//Normal route with continue - Other parents contact details
router.post('/reviews/review_your_answers_other_parent', function (req, res) {
  res.redirect('../service_choice/choose_service')
});



  // Service Choice - Direct Pay -  boulean
router.post('/service_choice/choose_service', function (req, res) {


  let serviceChoice = req.session.data['service-choice']

  if (serviceChoice === 'Direct Pay') {
    res.redirect('../personal_security/personal_security_details')
  }
 
  else {
    res.redirect('collect_and_pay_bank_details')
  }
  
});


//Normal route with continue - c + p details
router.post('/service_choice/collect_and_pay_bank_details', function (req, res) {
  res.redirect('roll_number')
});

  // Service Choice - Collect and Pay - boulean
  router.post('/service_choice/roll_number', function (req, res) {
    res.redirect('../personal_security/personal_security_details')
  });
  




  // Service Choice - personal details - boulean
  router.post('/personal_security/personal_security_details', function (req, res) {
    res.redirect('../reviews/review_your_answers')
  });
  






//Normal route with continue - Applicants contact details 
router.post('/personal_security/personal_security_details', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});

//Normal route with continue - Applicants contact details 
router.post('/payment_service/payment_cancellation', function (req, res) {
  let feeExempt = req.session.data['fee-exempt']
  if (feeExempt === 'yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
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
  let addAnotherName = req.session.data['add-another-name']
  let child2DateOfBirthYear = req.session.data['child-2-date-of-birth-year']


    if (child2DateOfBirthYear < 2004 && child2DateOfBirthYear > 1999 ) {
      res.redirect('married_civil_partnership')
    } else if (child2DateOfBirthYear < 2000 && addAnotherName === 'yes' ){
      res.redirect('../dropouts/dropout_child_reasons_2')
    } else if (child2DateOfBirthYear < 2000 && addAnotherName === 'no'){
      res.redirect('../dropouts/dropout_child_reasons')
    } else {
      res.redirect('consent_order')
    }
    
    
});









//Normal route with continue - Childs date of birth 2
router.post('/about_qualifying_child_two/child_date_of_birth', function (req, res) {

  let child2DateOfBirthYear = req.session.data['child-2-date-of-birth-year']
  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
  let child16To20 = req.session.data['child-in-full-time-education']
  let child1married = req.session.data['child-1-married']

  if (child2DateOfBirthYear < 2004 && child2DateOfBirthYear > 1999 ) {
    res.redirect('child_benefit')
  } 
  
  else if (child2DateOfBirthYear < 2000 ){

    if (child1DateOfBirthYear < 2000 || child16To20 === 'No' || child1married === 'Yes'){
        res.redirect('../dropouts/dropout_child_reasons')
         } else {
          res.redirect('../dropouts/dropout_child_reasons_2')
         }
        }
  
  else {
    res.redirect('consent_order')
  }
});


// Child aged between 16 to 20 -  boulean
router.post('/about_qualifying_child_two/child_in_full_time_education', function (req, res) {



  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
  let child16To20 = req.session.data['child-in-full-time-education']
  let child1married = req.session.data['child-1-married']

  let child2_16To20 = req.session.data['child-2-in-full-time-education']


  if (child2_16To20 === 'Yes') {
    res.redirect('consent_order')
  } 
  
  //-----

  else if (child1DateOfBirthYear < 2000 || child16To20 === 'No' || child1married === 'Yes'){
    res.redirect('../dropouts/dropout_child_reasons_4')
     }


  else {
    res.redirect('../dropouts/dropout_child_reasons_3')
  }
});




//Normal route with continue - Consent order
router.post('/about_qualifying_child_two/consent_order', function (req, res) {
  res.redirect('shared_care')
});



// Child married -  boulean
router.post('/about_qualifying_child_two/married_civil_partnership', function (req, res) {


  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
  let child16To20 = req.session.data['child-in-full-time-education']
  let child1married = req.session.data['child-1-married']

let child2married = req.session.data['child-2-married']

if (child2married === 'No') {
  res.redirect('child_benefit')
} 

  
  //-----

  else if (child1DateOfBirthYear < 2000 || child16To20 === 'No' || child1married === 'Yes'){
    res.redirect('../dropouts/dropout_child_reasons_4')
     }


  else {
    res.redirect('../dropouts/dropout_child_reasons_3')
  }
});




// Child shared care -  boulean
router.post('/about_qualifying_child_two/shared_care', function (req, res) {
  let sharedCare = req.session.data['shared-care-2']
  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
  let child16To20 = req.session.data['child-in-full-time-education']
  let child1married = req.session.data['child-1-married']

  if (sharedCare === '183 nights') {
    res.redirect('../dropouts/dropout_child_reasons')
  } else  if (child1DateOfBirthYear < 2000 || child16To20 === 'No' || child1married === 'Yes')  {
    res.redirect('child_check_answers_only_child_2')
  } else {
    res.redirect('child_check_answers')
  }
  });

// Child check answers 2 -  boulean
router.post('/about_qualifying_child_two/child_check_answers', function (req, res) {
  res.redirect('../about_other_parent/other_parent_introduction')
});





    
    



// How many children -  boulean
router.post('/about_qualifying_child_two/add_another_child_two_children', function (req, res) {
  let addAnotherChild = req.session.data['add-another-child-2']
  if (addAnotherChild === 'Yes') {
    res.redirect('#')
  } else {
    res.redirect('../about_other_parent/other_parent_introduction')
  }
});


// How many children -  boulean
router.post('/about_qualifying_child_two/add_another_child_second_child_only', function (req, res) {
  let addAnotherChild = req.session.data['add-another-child-2']
  if (addAnotherChild === 'Yes') {
    res.redirect('#')
  } else {
    res.redirect('../tasklists/tasklist_1')
  }
});










//Normal route with continue - error example
router.post('/national_insurance_number_example', function (req, res) {
  res.redirect('national_insurance_number_error')
});


//Normal route with continue - exemption northern ireland
router.post('/exemption_pages/exemption_applicant_northern_ireland', function (req, res) {
  res.redirect('../about_applicant/applicants_contact_details')
});

//Normal route with continue - exemption age
router.post('/exemption_pages/exemption_applicant_age', function (req, res) {
  res.redirect('../about_applicant/applicants_national_insurance_number')
});

//Normal route with continue - exemption domestic abuse
router.post('/exemption_pages/exeption_domestic_abuse', function (req, res) {
    res.redirect('../about_qualifying_child/court_order_under_12_months')
});

//-------- child loop 1




  // Child reasons 2 -  boulean
router.post('/dropouts/dropout_child_reasons_3', function (req, res) {

  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
  let child16To20 = req.session.data['child-in-full-time-education']
  let child1married = req.session.data['child-1-married']

  if (child1DateOfBirthYear < 2000 || child16To20 === 'No' || child1married === 'Yes'){
    res.redirect('../about_qualifying_child_two/child_date_of_birth') 
    }
    else {
      res.redirect('../about_qualifying_child/child_check_answers') 

    }
  });

  //---------------Payment section

  //Normal route with continue - exemption domestic abuse
router.post('/payment_service/payment_card_details', function (req, res) {
  res.redirect('payment_card_confirmation')
});


  //Normal route with continue - exemption domestic abuse
  router.post('/payment_service/payment_card_confirmation', function (req, res) {
    res.redirect('https://cmg-application-prototype.herokuapp.com/cmg-app/next_steps_payment')
  });

//-------------
    //Normal route with continue - exemption domestic abuse
    router.post('/tasklists/tasklist_6', function (req, res) {
      res.redirect('../reviews/review_your_answers')
    });


    //----------
   //Normal route with continue - how many children
   router.post('/about_qualifying_child/how_many_children', function (req, res) {
    let childNumberOfChildren = req.session.data['number-of-children']
  
    if (childNumberOfChildren  === 'more' ){
      res.redirect('../dropouts/dropout_child_reasons') 
      } 
  
      else {
  
        res.redirect('../about_qualifying_child/child_name') 
  
      }
    });
      
  
// Child benefit -  boulean
router.post('/about_qualifying_child/child_benefit', function (req, res) {

  let childBenefit = req.session.data['child-benefit']
  if (childBenefit === 'yes') {
    res.redirect('consent_order')
  } else {
    res.redirect('child_in_full_time_education')
  }
});

// Child check answers 2 -  boulean
router.post('/about_qualifying_child_two/child_check_answers_only_child_2', function (req, res) {
  res.redirect('../about_other_parent/other_parent_introduction')
});


//Normal route with continue - Other parents approx age
router.post('/about_other_parent/other_parent_approx_age', function (req, res) {
  res.redirect('other_parent_national_insurance_number')
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

//Normal route with continue - Other parents date of birth
router.post('/about_other_parent/other_parent_do_you_know_address', function (req, res) {
  let otherParentKnowAddress = req.session.data['other-parent-know-address']
  if (otherParentKnowAddress === 'yes') {
    res.redirect('other_parent_address')
  } else {
    res.redirect('other_parent_contact_details')
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
router.post('/about_other_parent/other_parent_employment_details', function (req, res) {
  res.redirect('other_parent_other_information')
});

//Normal route with continue - Other parents name
router.post('/about_other_parent/other_parent_introduction', function (req, res) {
  res.redirect('other_parent_name')
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

//Normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_other_information', function (req, res) {
  res.redirect('../reviews/review_your_answers_other_parent')
});

  //Normal route with continue - Other parents address
  router.post('/about_other_parent/other_parent_previous_address', function (req, res) {
    res.redirect('other_parent_contact_details')
  });

    // Child benefit -  boulean
router.post('/about_qualifying_child_two/child_benefit', function (req, res) {

  let child2Benefit = req.session.data['child-2-benefit']
  if (child2Benefit === 'yes') {
    res.redirect('consent_order')
  } else {
    res.redirect('child_in_full_time_education')
  }
});


// Child reasons 2 -  boulean
router.post('/dropouts/dropout_child_reasons_2', function (req, res) {

  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
  let child16To20 = req.session.data['child-in-full-time-education']
  let child1married = req.session.data['child-1-married']
  let child2DateOfBirthYear = req.session.data['child-2-date-of-birth-year']



  if (child1DateOfBirthYear < 2000 || child16To20 === 'No' || child1married === 'Yes'){
    /* child 2 date of birth check */
    if (child2DateOfBirthYear < 2004 && child2DateOfBirthYear > 1999 ) {
      res.redirect('../about_qualifying_child_two/child_in_full_time_education')
    } 
    else if (child2DateOfBirthYear < 2000 ){
            res.redirect('../dropouts/dropout_child_reasons_2')         
      }    
    else {
      res.redirect('../about_qualifying_child_two/child_name')
    }
     /* end of child 2 date of birth check */
    }
    else {
      res.redirect('../about_qualifying_child/child_check_answers') 

    }
  });








module.exports = router
