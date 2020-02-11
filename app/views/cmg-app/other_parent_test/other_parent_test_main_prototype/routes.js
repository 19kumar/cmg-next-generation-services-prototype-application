const express = require('express')
const router = express.Router()

//  ---------------



//All routes for CMG Applications below this line

// Eligibility questions section --------------------------------------------------------------


router.post('/eligibility_questions/introduction', function (req, res) {
  res.redirect('child_benefit')
});


router.post('/eligibility_questions/child_benefit', function (req, res) {
  let childBenefit = req.session.data['child-benefit']
  if (childBenefit === 'no') {
    res.redirect('../dropouts/dropout_child_benefit')
  } else {
    res.redirect('live_in_uk')
  }
});



router.post('/eligibility_questions/live_in_uk', function (req, res) {
  let liveUk = req.session.data['live-uk']
  if (liveUk === 'no') {
    res.redirect('../dropouts/dropout_live_in_uk')
  } else {
    res.redirect('court_order')
  }
});



router.post('/eligibility_questions/court_order', function (req, res) {
  let maintenanceLiability = req.session.data['maintenance-liability']
  if (maintenanceLiability === 'yes') {
    res.redirect('../dropouts/dropout_court_order')
  } else {
    res.redirect('results_page_eligible')
  }
});


router.post('/eligibility_questions/results_page_eligible', function (req, res) {
  res.redirect('../what_is_your_urn_number')
});




// URN number section --------------------------------------------------------------


router.post('/what_is_your_urn_number', function (req, res) {


  let urnNumber = req.session.data['urn-number']
  if (urnNumber === 'dropout') {
    res.redirect('dropouts/dropout_urn')
  } else {
    res.redirect('about_applicant/check_age')
  }
});
  // interrupt cards --------------------------------------------------------------

router.post('/what_to_expect_interrupt', function (req, res) {
  res.redirect('contact_interrupt')
});


router.post('/contact_interrupt', function (req, res) {
  res.redirect('da_interrupt')
});

router.post('/da_interrupt', function (req, res) {
  res.redirect('eligibility_questions/introduction')
});

router.post('/other_parent_interrupt', function (req, res) {
  res.redirect('eligibility_questions/introduction')
});



// About applicant section --------------------------------------------------------------


router.post('/about_applicant/no_pay_fee', function (req, res) {
  res.redirect('applicants_name')
});

router.post('/about_applicant/you_pay_fee', function (req, res) {
  res.redirect('applicants_name')
});

router.post('/about_applicant/applicants_name', function (req, res) {
  res.redirect('applicants_national_insurance_number')
});


router.post('/about_applicant/applicants_date_of_birth', function (req, res) {

  let applicantDateOfBirth = req.session.data['applicant-date-of-birth-year']

  
  if (applicantDateOfBirth > 2000) {
    res.redirect('../exemption_pages/exemption_applicant_age')
  } else {
    res.redirect('applicants_national_insurance_number')
  }
});


router.post('/exemption_pages/exemption_applicant_age', function (req, res) {
  res.redirect('../about_applicant/applicants_national_insurance_number')
});



router.post('/about_applicant/applicants_national_insurance_number', function (req, res) {
  res.redirect('applicants_phone_number')
});

router.post('/about_applicant/applicants_phone_number', function (req, res) {
  res.redirect('applicants_phone_preference')
});

router.post('/about_applicant/domestic_abuse_who_did_you_tell', function (req, res) {
  res.redirect('how_we_use_info')
});

router.post('/about_applicant/how_we_use_info', function (req, res) {
  res.redirect('applicants_phone_number')
});



// Contact details section --------------------------------------------------------------

//normal route with continue - Other parents address
router.post('/about_applicant/applicants_phone_preference', function (req, res) {
  res.redirect('can_we_text')
});

router.post('/about_applicant/can_we_text', function (req, res) {
  res.redirect('applicants_address')
});

router.post('/about_applicant/applicants_phone_number', function (req, res) {
  res.redirect('can_we_text')
});

router.post('/about_applicant/can_we_text', function (req, res) {
  res.redirect('applicants_phone_preference')
});

router.post('/about_applicant/applicants_address', function (req, res) {
  res.redirect('select_address')
});

router.post('/about_applicant/select_address', function (req, res) {
  res.redirect('is_this_your_home_address')
});

router.post('/about_applicant/select_your_address', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details_1')
});



router.post('/about_applicant/address_lookup', function (req, res) {
  res.redirect('select_your_address')
});
router.post('/about_applicant/applicants_correspondence_query', function (req, res) {

  let correspondenceQuery = req.session.data['correspondence-query']
  if (correspondenceQuery === 'yes') {
    res.redirect('applicants_address')
  } else {
    res.redirect('applicants_correspondence_address')
  }
});


///router.post('/about_applicant/applicants_correspondence_address', function (req, res) {
  //let correspondenceAddress = req.session.data['correspondence-address']

  
  //if (correspondenceAddress  === 'GH3 2LB') {
    //res.redirect('applicants_correspondence_address_cant_find')
  //} else if (correspondenceAddress  === 'gh3 2lb') {
    //res.redirect('applicants_correspondence_address_cant_find')
  //}  else {
    //res.redirect('applicants_address')
  //}
//});


router.post('/about_applicant/applicants_correspondence_address_cant_find', function (req, res) {
  res.redirect('select_your_address_2')
});

router.post('/about_applicant/select_your_address_2', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details_1')
});

router.post('/reviews/review_your_answers_applicants_details_1', function (req, res) {
  res.redirect('../about_qualifying_child/child_name')
});

router.post('/about_applicant/applicants_correspondence_address_manual_input', function (req, res) {
  res.redirect('applicants_address')
});

router.post('/about_applicant/applicants_correspondence_address', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});

router.post('/about_applicant/applicants_address', function (req, res) {


  let homeAddressPostcode = req.session.data['home-address-postcode']

  
  if (homeAddressPostcode  === 'GH3 2LB') {
    res.redirect('applicants_address_cant_find')
  } else if (homeAddressPostcode  === 'gh3 2lb') {
    res.redirect('applicants_address_cant_find')
  }  else {
    res.redirect('../reviews/review_your_answers_applicants_details')
  }
});

router.post('/about_applicant/applicants_address_cant_find', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});


router.post('/about_applicant/applicants_address_manual_input', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});

router.post('/about_applicant/applicants_address_manual_input', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});


// applicant review answers section --------------------------------------------------------------


router.post('/about_applicant/applicants_address_manual_input2', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details_1')
});

router.post('/reviews/review_your_answers_applicants_details', function (req, res) {
  res.redirect('../about_qualifying_child/child_name')
});

//Child section ----------------


router.post('/about_qualifying_child/child_name', function (req, res) {
  res.redirect('child_date_of_birth')
});

router.post('/about_qualifying_child/child_name_2', function (req, res) {
  res.redirect('child_date_of_birth_2')
});


router.post('/about_qualifying_child/child_date_of_birth', function (req, res) {
let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
 if (child1DateOfBirthYear > 2003) {
  res.redirect('birth_certificate_1')
} else if (child1DateOfBirthYear < 2000 ){
  res.redirect('../dropouts/dropout_child_1_dob')
}  else {
  res.redirect('birth_certificate_1')
} 
});

router.post('/about_qualifying_child/child_date_of_birth_2', function (req, res) {
  let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year-2']
  if (child1DateOfBirthYear > 2003) {
    res.redirect('birth_certificate_2')
  } else if (child1DateOfBirthYear < 2000) {
    res.redirect('../dropouts/dropout_child_1_dob')
  } else {
    res.redirect('birth_cerificate_2')
  }
});

router.post('/about_qualifying_child/birth_certificate_1', function (req, res) {
  res.redirect('shared_care')
});

router.post('/about_qualifying_child/birth_certificate_2', function (req, res) {
  res.redirect('shared_care_2')
});


router.post('/about_qualifying_child/shared_care', function (req, res) {
  let sharedCare = req.session.data['shared-care']
  if (sharedCare === '183 nights') {
    res.redirect('../dropouts/dropout_child_1_shared')
  }  else {
    res.redirect('child_check_answers_loop_1')
  }
  });

router.post('/about_qualifying_child/shared_care_2', function (req, res) {
  let sharedCare = req.session.data['shared-care']
  if (sharedCare === '183 nights') {
    res.redirect('../dropouts/dropout_child_1_shared')
  } else {
    res.redirect('child_check_answers_loop_2')
  }
});


router.post('/about_qualifying_child/child_check_answers_loop_1', function (req, res) {
  res.redirect('../service_choice/about_direct_pay')
});


router.post('/about_applicant/check_age', function (req, res) {
  let applicantDateOfBirthYear = req.session.data['applicant-date-of-birth-year']
  if (applicantDateOfBirthYear > 1999) {
    res.redirect('no_pay_fee')
  } else if (applicantDateOfBirthYear < 2000) {
    res.redirect('domestic_abuse_question')
  } else {
    res.redirect('domestic_abuse_question')
  }
});

//Payment section ----------------

router.post('/service_choice/contact_with_other_parent', function (req, res) {

  let contactOtherParent = req.session.data['contact-other-parent']
  if (contactOtherParent === 'yes') {
    res.redirect('choose_service')
  } else {
    res.redirect('choose_service_no_contact')
  }
});

router.post('/service_choice/collect_and_pay_bank_details', function (req, res) {
  res.redirect('../reviews/review_your_answers_collect_and_pay_details')
});


router.post('/reviews/review_your_answers_collect_and_pay_details', function (req, res) {
  res.redirect('../about_other_parent/other_parent_name')
});

router.post('/reviews/review_your_answers_collect_and_pay_no_details', function (req, res) {
  res.redirect('../about_other_parent/other_parent_name')
});

      router.post('/service_choice/choose_service', function (req, res) {

        let serviceChoice = req.session.data['service-choice']
        if (serviceChoice === 'Direct Pay') {
          res.redirect('../about_other_parent/other_parent_introduction')
        } else {
          res.redirect('choose_service_open')
        }
      });


      router.post('/service_choice/choose_service_open', function (req, res) {

        let serviceChoice = req.session.data['service-choice']
        if (serviceChoice === 'Direct Pay') {
          res.redirect('../about_other_parent/other_parent_introduction')
        } else {
          res.redirect('collect_and_pay')
        }
      });


router.post('/service_choice/collect_and_pay', function (req, res) {
  res.redirect('collect_and_pay_bank_details')
});





      router.post('/service_choice/choose_service_no_contact', function (req, res) {

        let serviceChoice = req.session.data['service-choice']
        if (serviceChoice === 'Direct Pay') {
          res.redirect('collect_and_pay_bank_details')
        } else {
          res.redirect('choose_service_no_contact_open')
        }
      });


            router.post('/service_choice/choose_service_no_contact_open', function (req, res) {

              let serviceChoice = req.session.data['service-choice']
              if (serviceChoice === 'Direct Pay') {
                res.redirect('collect_and_pay_bank_details')
              } else {
                res.redirect('collect_and_pay')
              }
            });


//Bank details section ----------------

            router.post('/service_choice/collect_and_pay_bank_details', function (req, res) {
              res.redirect('../about_other_parent/other_parent_introduction')
            });
            
      
//Other parent section ----------------


router.post('/about_other_parent/other_parent_introduction', function (req, res) {
  res.redirect('other_parent_name')
});


router.post('/about_other_parent/other_parent_name', function (req, res) {
  res.redirect('other_parent_date_of_birth')
});


router.post('/about_other_parent/other_parent_date_of_birth', function (req, res) {
  res.redirect('other_parent_national_insurance_number')
});



router.post('/about_other_parent/other_parent_national_insurance_number', function (req, res) {
  res.redirect('other_parent_contact_details')
});

router.post('/about_other_parent/other_parent_current_address', function (req, res) {
  res.redirect('other_parent_other_information')
});

router.post('/about_other_parent/other_parent_previous_address', function (req, res) {
  res.redirect('other_parent_other_information')
});

    router.post('/about_other_parent/other_parent_contact_details', function (req, res) {
      res.redirect('other_parent_do_you_know_address')
    });

    router.post('/about_other_parent/other_parent_do_you_know_address', function (req, res) {
      let otherParentKnowAddress = req.session.data['other-parent-know-address']
      if (otherParentKnowAddress === 'yes') {
        res.redirect('other_parent_address')
      } else {
        res.redirect('../reviews/review_your_answers_other_parent')
      }
      });


router.post('/about_other_parent/other_parent_address', function (req, res) {
  res.redirect('other_parent_other_information')
});
router.post('/about_other_parent/other_parent_other_information', function (req, res) {
  res.redirect('../reviews/review_your_answers_other_parent')
});


//Other parent review section ----------------


router.post('/reviews/review_your_answers_other_parent', function (req, res) {
  res.redirect('../personal_security/do_you_want_to_manage_online') 
});



//security details section ----------------
router.post('/personal_security/do_you_want_to_manage_online', function (req, res) {
  res.redirect('personal_security_details_password')
});

router.post('/personal_security/personal_security_details_password', function (req, res) {
  res.redirect('personal_security_details_pin')

  });

router.post('/personal_security/personal_security_details_pin', function (req, res) {
  res.redirect('../../sprint_17_main_prototype/declaration')

});

//router.post('/personal_security/online_setup', function (req, res) {
  //res.redirect('../../sprint_17_main_prototype/declaration')
//});


//router.post('/personal_security/personal_security_details_password', function (req, res) {
  //res.redirect('online_setup')

//});


// Domestic abuse section --------------------------------------------------------------


router.post('/fee_queries/domestic_introduction', function (req, res) {
  res.redirect('../fee_queries/domestic_abuse_query')
  });
  
 

router.post('/about_applicant/reporting_domestic_abuse', function (req, res) {
  res.redirect('no_pay_fee')
});
  router.post('/fee_queries/domestic_abuse_query', function (req, res) {
  
  let domesticAbuseQuery = req.session.data['abuse-query']
  let feeExempt = req.session.data['fee-exempt']
  if (domesticAbuseQuery == 'yes') {
  res.redirect('domestic_abuse_been_reported')
  } else {
  
  
  if (feeExempt === 'yes') {
    res.redirect('../declaration_exempt')
  } else {
    res.redirect('../declaration')
  }
  
  
  }
  });
  
 
  router.post('/fee_queries/domestic_abuse_been_reported', function (req, res) {
  let domesticAbuseReported = req.session.data['domestic-abuse-reported']
  if (domesticAbuseReported == 'yes') {
  res.redirect('../exemption_pages/exeption_domestic_abuse')
  } else {
  res.redirect('domestic_abuse_report_it')
  }
  });
  

router.post('/exemption_pages/exeption_domestic_abuse', function (req, res) {
  res.redirect('../declaration_exempt')
});





  router.post('/fee_queries/domestic_abuse_report_it', function (req, res) {
  let abuseReportIt = req.session.data['abuse-report-it']
  let feeExempt = req.session.data['fee-exempt']
  if (abuseReportIt == 'yes') {
  res.redirect('domestic_how_to_report')
  }  else {
    if (feeExempt === 'yes') {
      res.redirect('../declaration_exempt')
    } else {
      res.redirect('../declaration')
    }
  
  }
  
  });


// Declaration section --------------------------------------------------------------


 
    router.post('/declaration_exempt', function (req, res) {
      let mobileNumber = req.session.data['mobile-number']
      if (mobileNumber === 'no') {
        res.redirect('next_steps_no_sms')
      } else {
        res.redirect('next_steps')
      }
    
  });

// Submit and pay section --------------------------------------------------------------



  router.post('/payment_service/payment_card_details', function (req, res) {
    res.redirect('payment_card_confirmation')
  });
  
    router.post('/payment_service/payment_card_confirmation', function (req, res) {
      res.redirect('payment_complete')
    });
  
//normal route with continue - Applicants contact details 
router.post('/payment_service/payment_cancellation', function (req, res) {
  res.redirect('../declaration') 
});

  //normal route with continue - payment complete
  router.post('/payment_service/payment_complete', function (req, res) {
    let mobileNumber = req.session.data['mobile-number']
    
      if (mobileNumber === 'no') {
        res.redirect('../next_steps_no_sms')
      } else {
        res.redirect('../next_steps')
      }
    
  });


  // Feedback section --------------------------------------------------------------


router.post('/feedback/feedback_form', function (req, res) {
  res.redirect('feedback_join_research') 
});

router.post('/feedback/research_form', function (req, res) {
  res.redirect('research_form_submitted') 
});

router.post('/feedback/feedback_join_research', function (req, res) {
  let feedbackJoin = req.session.data['feedback-join']
  
    if (feedbackJoin === 'no') {
      res.redirect('feedback_form_submitted')
    } else {
      res.redirect('research_form')
    }
  
});



//--- * IGNORE BELOW *---* PREVIOUS LINKS --------------

/*
router.post('/about_other_parent/other_parent_other_information', function (req, res) {
    res.redirect('../reviews/review_your_answers_other_parent')
});

//normal route with continue - child review 1
router.post('/reviews/review_your_answers_child', function (req, res) {
  res.redirect('../about_other_parent/other_parent_name')
});


//normal route with continue - Review Answers
router.post('/reviews/review_your_answers', function (req, res) {
  let feeExempt = req.session.data['fee-exempt']
  if (feeExempt === 'yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//normal route with continue - Review Answers 2 children
router.post('/reviews/review_your_answers_2', function (req, res) {
  let feeExempt = req.session.data['fee-exempt']
  if (feeExempt === 'yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//normal route with continue - child review 2 jobs
router.post('/reviews/review_your_answers_collect_and_pay', function (req, res) {
  let feeExempt = req.session.data['fee-exempt']
  if (feeExempt === 'yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//normal route with continue - child review 2 jobs 2 children
router.post('/reviews/review_your_answers_collect_and_pay_plus_child', function (req, res) {
  let feeExempt = req.session.data['fee-exempt']
  if (feeExempt === 'yes') {
    res.redirect('../submit_application')
  } else {
    res.redirect('../application_submission_fee')
  }
});

//normal route with continue - £20 application fee and submit 
router.post('/payment_service/application_submitted', function (req, res) {
  res.redirect('../personal_security/personal_security_details')
});


//normal route with continue - £20 application fee and submit 
router.post('/application_submission_fee', function (req, res) {
  res.redirect('next_steps')
});

// Do you have an existing case -  boulean
router.post('/existing_case/do_you_have_an_existing_child_maintenance_case', function (req, res) {

  let existingCase = req.session.data['existing-case']
  if (existingCase === 'yes') {
    res.redirect('enter_child_maintenance_case_number')
  } else {
    res.redirect('../about_qualifying_child/add_another_child')
  }
});

//normal route with continue - Existing case number 
router.post('/existing_case/enter_child_maintenance_case_number', function (req, res) {
  res.redirect('../about_qualifying_child/add_another_child')
});


//normal route with continue - error example
router.post('/national_insurance_number_example', function (req, res) {
  res.redirect('national_insurance_number_error')
});


// Child check answers 2 -  boulean
router.post('/about_qualifying_child_two/child_check_answers_only_child_2', function (req, res) {
  res.redirect('../service_choice/contact_with_other_parent')
});

//normal route with continue - personal security details 
router.post('/personal_security/sms_service', function (req, res) {
  res.redirect('../about_applicant/applicants_correspondence_address')
});

//normal route with continue - personal security details 
router.post('/personal_security/sms_service_landline', function (req, res) {
  res.redirect('../about_applicant/applicants_correspondence_query')
});


// Child married -  boulean
router.post('/about_qualifying_child/married_civil_partnership', function (req, res) {

  let child1married = req.session.data['child-1-married']
  if (child1married === 'no') {
    res.redirect('shared_care')
  }  else {
    res.redirect('../dropouts/dropout_child_1_married')
  }
  });


// Child check answers -  boulean
router.post('/about_qualifying_child/child_check_answers', function (req, res) {
  res.redirect('add_another_child')
});

// How many children -  boulean
router.post('/about_qualifying_child/add_another_child', function (req, res) {
  let addAnotherChild = req.session.data['add-another-child-1']
  let contactOtherParent = req.session.data['contact-other-parent']
  if (addAnotherChild === 'yes') {
    res.redirect('../about_qualifying_child_two/child_name')
  } else {
    res.redirect('../service_choice/contact_with_other_parent')
  }
});

// How many children -  boulean
router.post('/about_qualifying_child/add_another_child_loop_1', function (req, res) {
  let addAnotherChild = req.session.data['add-another-child-1']
  let contactOtherParent = req.session.data['contact-other-parent']
  if (addAnotherChild === 'yes') {
    res.redirect('../about_qualifying_child_two/child_name')
  } else {
    res.redirect('../service_choice/contact_with_other_parent')
  }
});


//normal route with continue - Childs name
router.post('/about_qualifying_child_two/child_name', function (req, res) {
  res.redirect('child_date_of_birth')
});


//normal route with continue - Childs date of birth 2
router.post('/about_qualifying_child_two/child_date_of_birth', function (req, res) {

let child2DateOfBirthYear = req.session.data['child-2-date-of-birth-year']

if (child2DateOfBirthYear < 2000 ){
  res.redirect('../dropouts/dropout_child_2_dob')
} else if (child2DateOfBirthYear > 2003) {
  res.redirect('shared_care')
} else {
  res.redirect('shared_care')
} 
});


// Child married -  boulean
router.post('/about_qualifying_child_two/married_civil_partnership', function (req, res) {

let child2married = req.session.data['child-2-married']

if (child2married === 'no') {
  res.redirect('shared_care')
} 
  else {
    res.redirect('../dropouts/dropout_child_2_married')
  }
});


  // Child shared care -  boulean
  router.post('/about_qualifying_child_two/shared_care', function (req, res) {
    let sharedCare = req.session.data['shared-care']
    if (sharedCare === '183 nights') {
      res.redirect('../dropouts/dropout_child_2_shared')
    }  else {
      res.redirect('child_check_answers')
    }
    });
  

// Child check answers 2 -  boulean
router.post('/about_qualifying_child_two/child_check_answers', function (req, res) {
  res.redirect('add_another_child_two_children')
});

    
       // Child check answers 2 -  boulean
router.post('/dropouts/dropout_child_2_dob', function (req, res) {
  res.redirect('../about_qualifying_child/add_another_child')
});

       // Child check answers 2 -  boulean
       router.post('/dropouts/dropout_child_2_married', function (req, res) {
        res.redirect('../about_qualifying_child/add_another_child')
      });

       // Child check answers 2 -  boulean
       router.post('/dropouts/dropout_child_2_shared', function (req, res) {
        res.redirect('../about_qualifying_child/add_another_child')
      });


       // Child check answers 2 -  boulean
       router.post('/dropouts/dropout_child_benefit_2', function (req, res) {
        res.redirect('../about_qualifying_child/add_another_child')
      });
      



// Child benefit -  boulean
router.post('/about_qualifying_child_two/add_another_child_two_children', function (req, res) {

 
  res.redirect('../service_choice/contact_with_other_parent')
 
});



//normal route with continue - exemption northern ireland
router.post('/exemption_pages/exemption_applicant_northern_ireland', function (req, res) {
  res.redirect('../about_applicant/applicants_contact_details')
});



router.post('/eligibility_questions/live_in_uk_question_2', function (req, res) {
  let question2liveUk = req.session.data['question-2-live-uk']
  if (question2liveUk === 'no') {
    res.redirect('../dropouts/dropout_live_in_uk')
  } else {
    res.redirect('live_in_uk_question_3')
  }
});

router.post('/eligibility_questions/live_in_uk_question_3', function (req, res) {
  let question2liveUk = req.session.data['question-3-live-in-uk']
  if (question2liveUk === 'none') {
    res.redirect('../dropouts/dropout_live_in_uk')
  } else {
    res.redirect('court_order')
  }
});

//normal route with continue - Other parents address
router.post('/about_applicant/applicants_phone_preferences', function (req, res) {
    res.redirect('applicants_correspondence_query')
});


//normal route with continue - Applicants Email
router.post('/about_applicant/applicants_email', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});

router.post('/about_other_parent/other_parent_approx_age', function (req, res) {
  res.redirect('other_parent_national_insurance_number')
});

  
router.post('/about_other_parent/other_parent_date_of_birth_next_question', function (req, res) {
res.redirect('other_parent_approx_age')
  
  });
*/




module.exports = router
