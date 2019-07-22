const express = require('express')
const router = express.Router()

//  ---------------



//All routes for CMG Applications below this line

// Eligibility questions section --------------------------------------------------------------

//normal route with continue - URN number input 
router.post('/eligibility_questions/introduction', function (req, res) {
  res.redirect('child_benefit')
});

//normal route with continue - URN number input 
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

//normal route with continue - URN number input 
router.post('/eligibility_questions/court_order', function (req, res) {
  let maintenanceLiability = req.session.data['maintenance-liability']
  if (maintenanceLiability === 'yes') {
    res.redirect('../dropouts/dropout_court_order')
  } else {
    res.redirect('results_page_eligible')
  }
});


//normal route with continue - URN number input 
router.post('/eligibility_questions/results_page_eligible', function (req, res) {
  res.redirect('../what_is_your_urn_number')
});




// URN number section --------------------------------------------------------------





//normal route with continue - URN number input 
router.post('/what_is_your_urn_number', function (req, res) {
  res.redirect('about_applicant/applicants_name')
});


    // Child benefit -  boulean
    router.post('/service_choice/contact_with_other_parent', function (req, res) {

      let contactOtherParent = req.session.data['contact-other-parent']
      if (contactOtherParent === 'yes') {
        res.redirect('choose_service')
      } else {
        res.redirect('choose_service_no_contact')
      }

    
    });


// Domestic abuse section --------------------------------------------------------------

// domestic abuse reported -  boulean
router.post('/fee_queries/domestic_introduction', function (req, res) {
  res.redirect('../fee_queries/domestic_abuse_query')

});

// domestic abuse -  boulean
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

// domestic abuse reported -  boulean
router.post('/fee_queries/domestic_abuse_been_reported', function (req, res) {
let domesticAbuseReported = req.session.data['domestic-abuse-reported']
if (domesticAbuseReported == 'yes') {
  res.redirect('../exemption_pages/exeption_domestic_abuse')
} else {
    res.redirect('domestic_abuse_report_it')
  }
});

// domestic abuse reported -  boulean
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
  





// About applicant section --------------------------------------------------------------




//normal route with continue - Applicants address 
router.post('/about_applicant/applicants_name', function (req, res) {
  res.redirect('applicants_date_of_birth')
});


//normal route with continue - Applicants title 
router.post('/about_applicant/applicants_date_of_birth', function (req, res) {

  let applicantDateOfBirth = req.session.data['applicant-date-of-birth-year']
  let feeExempt = req.session.data['fee-exempt']
  
  if (applicantDateOfBirth > 2000 && feeExempt === 'yes') {
    res.redirect('applicants_phone_number')
  } else if (applicantDateOfBirth > 2000) {
    res.redirect('../exemption_pages/exemption_applicant_age')
  } else {
    res.redirect('applicants_phone_number')
  }
});

//normal route with continue - exemption age
router.post('/about_applicant/applicants_national_insurance_number', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});




//normal route with continue - Applicants address 
router.post('/about_applicant/applicants_address', function (req, res) {


  let homeAddressPostcode = req.session.data['home-address-postcode']

  
  if (homeAddressPostcode  === 'GH3 2LB') {
    res.redirect('applicants_address_cant_find')
  } else if (homeAddressPostcode  === 'gh3 2lb') {
    res.redirect('applicants_address_cant_find')
  }  else {
    res.redirect('applicants_phone_number')
  }
});





// domestic abuse reported -  boulean
router.post('/about_applicant/applicants_correspondence_query', function (req, res) {

  let correspondenceQuery = req.session.data['correspondence-query']
  if (correspondenceQuery === 'yes') {
    res.redirect('applicants_address')
  } else {
    res.redirect('applicants_correspondence_address')
  }
});

//normal route with continue - Other parents address
router.post('/about_applicant/applicants_correspondence_address', function (req, res) {
  let correspondenceAddress = req.session.data['correspondence-address']

  
  if (correspondenceAddress  === 'GH3 2LB') {
    res.redirect('applicants_correspondence_address_cant_find')
  } else if (correspondenceAddress  === 'gh3 2lb') {
    res.redirect('applicants_correspondence_address_cant_find')
  }  else {
    res.redirect('applicants_national_insurance_number')
  }
});

//normal route with continue - Applicants address manual 
router.post('/about_applicant/applicants_correspondence_address_manual_input', function (req, res) {
  res.redirect('applicants_national_insurance_number')
});




//normal route with continue - Other parents address
router.post('/about_applicant/applicants_phone_number', function (req, res) {
  res.redirect('applicants_phone_preferences')
});

//normal route with continue - Other parents address
router.post('/about_applicant/applicants_phone_preferences', function (req, res) {
  
  let applicantTelephoneNumber = req.session.data['applicant-telephone-number']

  if (applicantTelephoneNumber  === '0191') {
    res.redirect('../personal_security/sms_service')
   
  } else {
    res.redirect('../personal_security/sms_service_landline')
  }
});


//normal route with continue - Applicants Email
router.post('/about_applicant/applicants_email', function (req, res) {
  res.redirect('../reviews/review_your_answers_applicants_details')
});



//normal route with continue - Applicants address manual 
router.post('/about_applicant/applicants_address_manual_input', function (req, res) {
  res.redirect('applicants_phone_number')
});

//normal route with continue - Applicants address manual 
router.post('/about_applicant/applicants_address_cant_find', function (req, res) {
  res.redirect('applicants_phone_number')
});

//normal route with continue - Applicants address manual 
router.post('/about_applicant/applicants_correspondence_address_cant_find', function (req, res) {
  res.redirect('applicants_national_insurance_number')
});





//normal route with continue - Applicants contact details 
router.post('/about_applicant/applicants_contact_details', function (req, res) {
  res.redirect('applicants_contact_text_query')
});

//normal route with continue - Applicants contact details 
router.post('/about_applicant/applicants_contact_text_query', function (req, res) {
  res.redirect('../about_applicant/applicants_email_address')
});




//normal route with continue - Review Answers
router.post('/reviews/review_your_answers_applicants_details', function (req, res) {
  res.redirect('../about_qualifying_child/child_name')
});



//normal route with continue - child review 1
router.post('/reviews/review_your_answers_child', function (req, res) {
  res.redirect('../about_other_parent/other_parent_name')
});

//normal route with continue - Other parents name
router.post('/about_other_parent/other_parent_name', function (req, res) {
  res.redirect('other_parent_date_of_birth')
});


//normal route with continue - Other parents date of birth
router.post('/about_other_parent/other_parent_date_of_birth', function (req, res) {
  let otherParentDob = req.session.data['other-parent-dob']
  if (otherParentDob === 'yes') {
    res.redirect('other_parent_contact_details')
  } else {
    res.redirect('other_parent_date_of_birth_next_question')
  }
  });

  //normal route with continue - Other parents date of birth
router.post('/about_other_parent/other_parent_date_of_birth_next_question', function (req, res) {

    res.redirect('other_parent_approx_age')
  
  });

//normal route with continue - Other parents NIno
router.post('/about_other_parent/other_parent_national_insurance_number', function (req, res) {
  res.redirect('../reviews/review_your_answers_other_parent')
});


//normal route with continue - Other parents address
router.post('/about_other_parent/other_parent_address', function (req, res) {
  res.redirect('other_parent_national_insurance_number')
});


//normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_contact_details', function (req, res) {
  res.redirect('other_parent_do_you_know_address')
});


//normal route with continue - Other parents contact details
router.post('/reviews/review_your_answers_other_parent', function (req, res) {
  res.redirect('../personal_security/portal_account_query') 
});









//normal route with continue - c + p details
router.post('/service_choice/collect_and_pay_bank_details', function (req, res) {
  res.redirect('../about_other_parent/other_parent_introduction')
});





//normal route with continue - Applicants contact details 
router.post('/payment_service/payment_cancellation', function (req, res) {

    res.redirect('../declaration')
  
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





//normal route with continue - error example
router.post('/national_insurance_number_example', function (req, res) {
  res.redirect('national_insurance_number_error')
});


//normal route with continue - exemption northern ireland
router.post('/exemption_pages/exemption_applicant_northern_ireland', function (req, res) {
  res.redirect('../about_applicant/applicants_contact_details')
});

//normal route with continue - exemption age
router.post('/exemption_pages/exemption_applicant_age', function (req, res) {
  res.redirect('../about_applicant/applicants_national_insurance_number')
});

//normal route with continue - exemption domestic abuse
router.post('/exemption_pages/exeption_domestic_abuse', function (req, res) {
    res.redirect('../declaration_exempt')
});



  //---------------Payment section

  //normal route with continue - exemption domestic abuse
router.post('/payment_service/payment_card_details', function (req, res) {
  res.redirect('payment_card_confirmation')
});


  //normal route with continue - exemption domestic abuse
  router.post('/payment_service/payment_card_confirmation', function (req, res) {
    res.redirect('payment_complete')
  });

    //normal route with continue - exemption domestic abuse
    router.post('/personal_security/portal_account_query', function (req, res) {
      let portalQuery = req.session.data['portal_query']
      let mobileNumber = req.session.data['mobile-number']
      if (portalQuery === 'yes') {
        res.redirect('personal_security_details')
      } else {
        res.redirect('../fee_queries/domestic_introduction')
      }
      });



      /*
  let portalQuery = req.session.data['portal_query']
      let mobileNumber = req.session.data['mobile-number']
      if (portalQuery === 'yes') {
        res.redirect('personal_security_details')
      } else {
        if (mobileNumber === 'no') {
          res.redirect('../next_steps_no_sms')
        } else {
          res.redirect('../next_steps')
        }
      }
      });
      */
  

//-------------



// Child check answers 2 -  boulean
router.post('/about_qualifying_child_two/child_check_answers_only_child_2', function (req, res) {
  res.redirect('../service_choice/contact_with_other_parent')
});


//normal route with continue - Other parents approx age
router.post('/about_other_parent/other_parent_approx_age', function (req, res) {
  res.redirect('other_parent_contact_details')
});


  //normal route with continue - Other Works?
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

//normal route with continue - Other parents date of birth
router.post('/about_other_parent/other_parent_do_you_know_address', function (req, res) {
  let otherParentKnowAddress = req.session.data['other-parent-know-address']
  if (otherParentKnowAddress === 'yes') {
    res.redirect('other_parent_address')
  } else {
    res.redirect('other_parent_national_insurance_number')
  }
  });


  //normal route with continue - Other parents date of birth
  router.post('/about_other_parent/other_parent_do_you_know_previous_address', function (req, res) {
 
    let otherParentKnowPrevAddress = req.session.data['other-parent-know-previous-address']
    if (otherParentKnowPrevAddress === 'yes') {
      res.redirect('other_parent_previous_address')
    } else {
      res.redirect('other_parent_contact_details')
    }
    });

//normal route with continue - Other parents address
router.post('/about_other_parent/other_parent_employment_details', function (req, res) {
  res.redirect('other_parent_other_information')
});

//normal route with continue - Other parents name
router.post('/about_other_parent/other_parent_introduction', function (req, res) {
  res.redirect('other_parent_name')
});


    //normal route with continue - Other parent Works?
    router.post('/about_other_parent/other_parent_know_about_work', function (req, res) {
 
      let otherParentKnowAboutWork = req.session.data['other-parent-know-about-work']
      if (otherParentKnowAboutWork === 'yes') {
        res.redirect('other_parent_employment_details')
      } else {
        res.redirect('other_parent_other_information')
      } 
      });

         //normal route with continue - Know of benefits?
    router.post('/about_other_parent/other_parent_know_about_benefits', function (req, res) {
 
      let knowOfAnyBenefits = req.session.data['know-of-any-benefits']
      if (knowOfAnyBenefits === 'yes') {
        res.redirect('other_parent_what_benefits')
      } else {
        res.redirect('other_parent_other_information')
      } 
      });

  //normal route with continue - Other parents NIno
router.post('/about_other_parent/other_parent_what_benefits', function (req, res) {
  res.redirect('other_parent_other_information')
});

//normal route with continue - Other parents contact details
router.post('/about_other_parent/other_parent_other_information', function (req, res) {
  /*let feeExempt = req.session.data['fee-exempt'] */
    res.redirect('../reviews/review_your_answers_other_parent')
});

 


  //normal route with continue - Other parents address
  router.post('/about_other_parent/other_parent_previous_address', function (req, res) {
    res.redirect('other_parent_contact_details')
  });


    //normal route with continue - Other parents address
    router.post('/declaration_exempt', function (req, res) {
      let mobileNumber = req.session.data['mobile-number']
      if (mobileNumber === 'no') {
        res.redirect('next_steps_no_sms')
      } else {
        res.redirect('next_steps')
      }
    
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

//normal route with continue - personal security details 
router.post('/personal_security/personal_security_details', function (req, res) {

  res.redirect('../fee_queries/domestic_introduction')

  });


//normal route with continue - personal security details 
router.post('/personal_security/sms_service', function (req, res) {
  res.redirect('../about_applicant/applicants_correspondence_address')
});

//normal route with continue - personal security details 
router.post('/personal_security/sms_service_landline', function (req, res) {
  res.redirect('../about_applicant/applicants_correspondence_address')
});



//new stuff - 14may --------------------------





      // Child benefit -  boulean
      router.post('/service_choice/choose_service', function (req, res) {

        let serviceChoice = req.session.data['service-choice']
        if (serviceChoice === 'Direct Pay') {
          res.redirect('../about_other_parent/other_parent_introduction')
        } else {
          res.redirect('choose_service_open')
        }
      });


      // Child benefit -  boulean
      router.post('/service_choice/choose_service_open', function (req, res) {

        let serviceChoice = req.session.data['service-choice']
        if (serviceChoice === 'Direct Pay') {
          res.redirect('../about_other_parent/other_parent_introduction')
        } else {
          res.redirect('collect_and_pay')
        }
      });


//normal route with continue - personal security details 
router.post('/service_choice/collect_and_pay', function (req, res) {
  res.redirect('collect_and_pay_bank_details')
});


      // Child benefit -  boulean
      router.post('/service_choice/choose_service_no_contact', function (req, res) {

        let serviceChoice = req.session.data['service-choice']
        if (serviceChoice === 'Direct Pay') {
          res.redirect('collect_and_pay_bank_details')
        } else {
          res.redirect('choose_service_no_contact_open')
        }
      });


            // Child benefit -  boulean
            router.post('/service_choice/choose_service_no_contact_open', function (req, res) {

              let serviceChoice = req.session.data['service-choice']
              if (serviceChoice === 'Direct Pay') {
                res.redirect('collect_and_pay_bank_details')
              } else {
                res.redirect('collect_and_pay')
              }
            });



//Child section ----------------


//normal route with continue - Childs name
router.post('/about_qualifying_child/child_name', function (req, res) {

  res.redirect('child_date_of_birth')
});




//normal route with continue - Childs date of birth
router.post('/about_qualifying_child/child_date_of_birth', function (req, res) {

let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']


 if (child1DateOfBirthYear > 2003) {
  res.redirect('shared_care')
} else if (child1DateOfBirthYear < 2000 ){
  res.redirect('../dropouts/dropout_child_1_dob')
}  else {
  res.redirect('shared_care')
} 
});










// Child shared care -  boulean
router.post('/about_qualifying_child/shared_care', function (req, res) {
  let sharedCare = req.session.data['shared-care']
  if (sharedCare === '183 nights') {
    res.redirect('../dropouts/dropout_child_1_shared')
  }  else {
    res.redirect('child_check_answers_loop_1')
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
  






    
    



// Child benefit -  boulean
router.post('/about_qualifying_child/how_many_children', function (req, res) {

res.redirect('child_names_1')

  });

  // Child benefit -  boulean
router.post('/about_qualifying_child/child_names_1', function (req, res) {
      res.redirect('child_date_of_birth_1')
  });

    // Child benefit -  boulean
router.post('/about_qualifying_child/child_names_2', function (req, res) {
  res.redirect('child_date_of_birth_2')
});

  // Child benefit -  boulean
  router.post('/about_qualifying_child/child_names_3', function (req, res) {
    res.redirect('child_date_of_birth_3')
});

  // Child benefit -  boulean
  router.post('/about_qualifying_child/child_names_4', function (req, res) {
    res.redirect('child_date_of_birth_4')
});

  // Child benefit -  boulean
  router.post('/about_qualifying_child/child_date_of_birth_1', function (req, res) {

    let child1DateOfBirthYear = req.session.data['child-1-date-of-birth-year']
    let howManyChildren = req.session.data['how-many-children']


    if (howManyChildren == 1) {

      if (child1DateOfBirthYear < 2000 ){
        res.redirect('../dropouts/dropout_child_1_dob')
      } else {
        res.redirect('shared_care_1') 
      }
     
      }
      else  {

        if (child1DateOfBirthYear < 2000 ){
          res.redirect('../dropouts/dropout_child_1_add_dob')
        } else {
          res.redirect('shared_care_1') 
        }
       
        }
      

   
    });




    



      // Child benefit -  boulean
  router.post('/about_qualifying_child/child_date_of_birth_2', function (req, res) {

    let child2DateOfBirthYear = req.session.data['child-2-date-of-birth-year']
  
      if (child2DateOfBirthYear < 2000 ){
        res.redirect('../dropouts/dropout_child_2_dob')
      } else {
        res.redirect('shared_care_2')
      } 

    });


          // Child benefit -  boulean
  router.post('/about_qualifying_child/child_date_of_birth_3', function (req, res) {


    let child3DateOfBirthYear = req.session.data['child-3-date-of-birth-year']

    if (child3DateOfBirthYear < 2000 ){
      res.redirect('../dropouts/dropout_child_3_dob')
    } else {
      res.redirect('shared_care_3')
    } 
  });



              // Child benefit -  boulean
  router.post('/about_qualifying_child/child_date_of_birth_4', function (req, res) {


    let child4DateOfBirthYear = req.session.data['child-4-date-of-birth-year']

    if (child4DateOfBirthYear < 2000 ){
      res.redirect('../dropouts/dropout_child_4_dob')
    } else {
      res.redirect('shared_care_4')
    } 
  });


    // Child benefit -  boulean
    router.post('/about_qualifying_child/shared_care_1', function (req, res) {

      let howManyChildren = req.session.data['how-many-children']
      let sharedCare = req.session.data['shared-care-child-1']
  
      if (howManyChildren == 1) {
        if (sharedCare === '183 nights') {
          res.redirect('../dropouts/dropout_child_1_shared')
        }  else {
          res.redirect('child_check_answers_1')
        }  
      } 
      else {
        if (sharedCare === '183 nights') {
          res.redirect('../dropouts/dropout_child_1_add_shared')
        }  else {
          res.redirect('child_names_2')
        }
        } 
  
      });


        // Child benefit -  boulean
    router.post('/about_qualifying_child/shared_care_2', function (req, res) {
  
   
      let howManyChildren = req.session.data['how-many-children']
      let shared2Care = req.session.data['shared-care-child-3']
      let removeChild1 = req.session.data['remove_child_1']
  
      if (howManyChildren == 2) {
        if (shared2Care === '183 nights') {
          res.redirect('../dropouts/dropout_child_2_shared')
        } else if (removeChild1 === 'yes') {
          res.redirect('child_check_answers_2_child_1_removed')
        }  else {
          res.redirect('child_check_answers_2')
        }
      
      } 
      else {
        if (shared2Care === '183 nights') {
          res.redirect('../dropouts/dropout_child_2_shared')
        }  else {
          res.redirect('child_names_3')
        }
        } 
  
      });
  
  
            // Child benefit -  boulean
    router.post('/about_qualifying_child/shared_care_3', function (req, res) {
  
      let howManyChildren = req.session.data['how-many-children']
      let shared3Care = req.session.data['shared-care-child-3']
      let removeChild1 = req.session.data['remove_child_1']
  
      if (howManyChildren == 3) {
        if (shared3Care === '183 nights') {
          res.redirect('../dropouts/dropout_child_3_shared')
        } else if (removeChild1 === 'yes') {
          res.redirect('child_check_answers_3_child_1_removed')
        } else if (removeChild2 === 'yes') {
          res.redirect('child_check_answers_3_child_1_removed')
        }  else {
          res.redirect('child_check_answers_2')
        }  
      } 
      else {
        if (shared3Care === '183 nights') {
          res.redirect('../dropouts/dropout_child_3_shared')
        }  else {
          res.redirect('child_names_4')
        }
        } 
  
      });
  
  
                // Child benefit -  boulean
    router.post('/about_qualifying_child/shared_care_4', function (req, res) {
      
      let shared3Care = req.session.data['shared-care-child-4']
      if (shared3Care === '183 nights') {
        res.redirect('../dropouts/dropout_child_4_shared')
      }  else {
        res.redirect('child_check_answers_4')
      }
      });

         // Child check answers 2 -  boulean
         router.post('/dropouts/dropout_child_1_add_dob', function (req, res) {
          
            res.redirect('../about_qualifying_child/child_names_2')
            
          });

       // Child check answers 2 -  boulean
       router.post('/dropouts/dropout_child_2_dob', function (req, res) {
        let howManyChildren = req.session.data['how-many-children']
        if (howManyChildren == 2) {
          res.redirect('../about_qualifying_child/child_check_answers_1')
        } 
        else {
          res.redirect('../about_qualifying_child/child_names_3')
          } 
        });
      
             // Child check answers 2 -  boulean
             router.post('/dropouts/dropout_child_3_dob', function (req, res) {
              let howManyChildren = req.session.data['how-many-children']
              if (howManyChildren == 3) {
                res.redirect('../about_qualifying_child/child_check_answers_2')
              } 
              else {
                res.redirect('../about_qualifying_child/child_names_4')
                } 
              });
      
                   // Child check answers 2 -  boulean
      router.post('/dropouts/dropout_child_4_dob', function (req, res) {
          res.redirect('../about_qualifying_child/child_check_answers_3')
        });


           // Child check answers 2 -  boulean
           router.post('/dropouts/dropout_child_1_add_shared', function (req, res) {
          
            res.redirect('../about_qualifying_child/child_names_2')
            
          });

       // Child check answers 2 -  boulean
       router.post('/dropouts/dropout_child_2_shared', function (req, res) {
        let howManyChildren = req.session.data['how-many-children']
        if (howManyChildren == 2) {
          res.redirect('../about_qualifying_child/child_check_answers_1')
        } 
        else {
          res.redirect('../about_qualifying_child/child_names_3')
          } 
        });
      
             // Child check answers 2 -  boulean
             router.post('/dropouts/dropout_child_3_shared', function (req, res) {
              let howManyChildren = req.session.data['how-many-children']
              if (howManyChildren == 3) {
                res.redirect('../about_qualifying_child/child_check_answers_2')
              } 
              else {
                res.redirect('../about_qualifying_child/child_names_4')
                } 
              });
      
                   // Child check answers 2 -  boulean
      router.post('/dropouts/dropout_child_4_shared', function (req, res) {
          res.redirect('../about_qualifying_child/child_check_answers_3')
        });

  

module.exports = router
