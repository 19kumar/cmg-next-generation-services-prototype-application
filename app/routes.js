const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)
// Add your routes here - above the module.exports line


//Main prototypes

router.use('/cmg-app/prototype_1', require('./views/cmg-app/prototype_1/routes'));
router.use('/cmg-app/prototype_1-1', require('./views/cmg-app/prototype_1-1/routes'));
router.use('/cmg-app/prototype_1-2', require('./views/cmg-app/prototype_1-2/routes'));
router.use('/cmg-app/prototype_1-3', require('./views/cmg-app/prototype_1-3/routes'));
router.use('/cmg-app/prototype_group_example', require('./views/cmg-app/prototype_group_example/routes'));
router.use('/cmg-app/sprint_1/sprint_1_main_prototype', require('./views/cmg-app/sprint_1/sprint_1_main_prototype/routes'));
router.use('/cmg-app/sprint_2/sprint_2_main_prototype', require('./views/cmg-app/sprint_2/sprint_2_main_prototype/routes'));
router.use('/cmg-app/sprint_3/sprint_3_linear_prototype', require('./views/cmg-app/sprint_3/sprint_3_linear_prototype/routes'));
router.use('/cmg-app/sprint_3/sprint_3_tasklist_example', require('./views/cmg-app/sprint_3/sprint_3_tasklist_example/routes'));
router.use('/cmg-app/sprint_4/sprint_4_main_prototype', require('./views/cmg-app/sprint_4/sprint_4_main_prototype/routes'));
router.use('/cmg-app/sprint_5/sprint_5_main_prototype', require('./views/cmg-app/sprint_5/sprint_5_main_prototype/routes'));

router.use('/cmg-app/sprint_5/sprint_5_main_prototype_iteration_2', require('./views/cmg-app/sprint_5/sprint_5_main_prototype_iteration_2/routes'));

router.use('/cmg-app/sprint_5/sprint_5_main_prototype_iteration_3', require('./views/cmg-app/sprint_5/sprint_5_main_prototype_iteration_3/routes'));

router.use('/cmg-app/sprint_5/sprint_5_main_prototype_iteration_4', require('./views/cmg-app/sprint_5/sprint_5_main_prototype_iteration_4/routes'));

router.use('/cmg-app/sprint_5/sprint_5_main_prototype_iteration_5', require('./views/cmg-app/sprint_5/sprint_5_main_prototype_iteration_5/routes'));

router.use('/cmg-app/sprint_5/sprint_5_main_prototype_iteration_6', require('./views/cmg-app/sprint_5/sprint_5_main_prototype_iteration_6/routes'));

router.use('/cmg-app/sprint_6/sprint_6_main_prototype_iteration_1', require('./views/cmg-app/sprint_6/sprint_6_main_prototype_iteration_1/routes'));

router.use('/cmg-app/sprint_6/sprint_6_main_prototype_iteration_1_2', require('./views/cmg-app/sprint_6/sprint_6_main_prototype_iteration_1_2/routes'));

router.use('/cmg-app/sprint_6/sprint_6_main_prototype_iteration_2', require('./views/cmg-app/sprint_6/sprint_6_main_prototype_iteration_2/routes'));

router.use('/cmg-app/sprint_6/sprint_6_trimmed_for_user_research', require('./views/cmg-app/sprint_6/sprint_6_trimmed_for_user_research/routes'));

router.use('/cmg-app/sprint_8/sprint_8_main_prototype', require('./views/cmg-app/sprint_8/sprint_8_main_prototype/routes'));

router.use('/cmg-app/sprint_9/sprint_9_main_prototype', require('./views/cmg-app/sprint_9/sprint_9_main_prototype/routes'));

router.use('/cmg-app/sprint_10/sprint_10_main_prototype', require('./views/cmg-app/sprint_10/sprint_10_main_prototype/routes'));

router.use('/cmg-app/sprint_11/sprint_11_main_prototype', require('./views/cmg-app/sprint_11/sprint_11_main_prototype/routes'));

router.use('/cmg-app/sprint_12/sprint_12_main_prototype', require('./views/cmg-app/sprint_12/sprint_12_main_prototype/routes'));

router.use('/cmg-app/sprint_13/sprint_13_main_prototype', require('./views/cmg-app/sprint_13/sprint_13_main_prototype/routes'));


router.use('/cmg-app/sprint_14/sprint_14_main_prototype', require('./views/cmg-app/sprint_14/sprint_14_main_prototype/routes'));

router.use('/cmg-app/sprint_15/sprint_15_main_prototype', require('./views/cmg-app/sprint_15/sprint_15_main_prototype/routes'));

router.use('/cmg-app/proposed_designs/proposed_main_prototype', require('./views/cmg-app/proposed_designs/proposed_main_prototype/routes'));

//Other parent iterations - Sprint 1
router.use('/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_1', require('./views/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_1/routes'));

router.use('/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_2', require('./views/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_2/routes'));

router.use('/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_3', require('./views/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_3/routes'));

router.use('/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_4', require('./views/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_4/routes'));

router.use('/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_5', require('./views/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_5/routes'));

router.use('/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_6', require('./views/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_6/routes'));

router.use('/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_7', require('./views/cmg-app/sprint_1/sprint_1_other_parent_iterations/other_parent_iteration_7/routes'));


//iterations - Sprint 2

router.use('/cmg-app/sprint_2/payment_types_iterations/payment_types_iteration_1', require('./views/cmg-app/sprint_2/payment_types_iterations/payment_types_iteration_1/routes'));


router.use('/cmg-app/sprint_2/next_steps_iterations/next_steps_iteration_1', require('./views/cmg-app/sprint_2/next_steps_iterations/next_steps_iteration_1/routes'));

router.use('/cmg-app/sprint_2/next_steps_iterations/next_steps_iteration_2', require('./views/cmg-app/sprint_2/next_steps_iterations/next_steps_iteration_2/routes'));

router.use('/cmg-app/sprint_2/pin_password_iterations/pin_password_iteration_1', require('./views/cmg-app/sprint_2/pin_password_iterations/pin_password_iteration_1/routes'));

router.use('/cmg-app/sprint_2/pin_password_iterations/pin_password_iteration_2', require('./views/cmg-app/sprint_2/pin_password_iterations/pin_password_iteration_2/routes'));

router.use('/cmg-app/sprint_2/start_page_iterations/start_page_iteration_1', require('./views/cmg-app/sprint_2/start_page_iterations/start_page_iteration_1/routes'));

router.use('/cmg-app/sprint_2/start_page_iterations/start_page_iteration_2', require('./views/cmg-app/sprint_2/start_page_iterations/start_page_iteration_2/routes'));

router.use('/cmg-app/sprint_2/contact_page_iterations/contact_page_iteration_1', require('./views/cmg-app/sprint_2/contact_page_iterations/contact_page_iteration_1/routes'));

router.use('/cmg-app/sprint_2/child_loop_iterations/child_loop_iteration_1/', require('./views/cmg-app/sprint_2/child_loop_iterations/child_loop_iteration_1/routes'));

router.use('/cmg-app/sprint_2/child_loop_iterations/child_loop_iteration_2/', require('./views/cmg-app/sprint_2/child_loop_iterations/child_loop_iteration_2/routes'));

router.use('/cmg-app/sprint_2/other_parent_employment_iterations/other_parent_employment_iteration_1/', require('./views/cmg-app/sprint_2/other_parent_employment_iterations/other_parent_employment_iteration_1/routes'));

router.use('/cmg-app/sprint_2/court_order_iterations/court_order_iteration_1', require('./views/cmg-app/sprint_2/court_order_iterations/court_order_iteration_1/routes'));

router.use('/cmg-app/sprint_2/court_order_iterations/court_order_iteration_2', require('./views/cmg-app/sprint_2/court_order_iterations/court_order_iteration_2/routes'));


//iterations - Sprint 3
router.use('/cmg-app/sprint_3/other_parent_iteration_1', require('./views/cmg-app/sprint_3/other_parent_iteration_1/routes'));

router.use('/cmg-app/sprint_3/other_parent_iteration_2', require('./views/cmg-app/sprint_3/other_parent_iteration_2/routes'));

router.use('/cmg-app/sprint_3/other_parent_iteration_3', require('./views/cmg-app/sprint_3/other_parent_iteration_3/routes'));

router.use('/cmg-app/sprint_3/contact_page_iterations/contact_page_iteration_1', require('./views/cmg-app/sprint_3/contact_page_iterations/contact_page_iteration_1/routes'));

router.use('/cmg-app/sprint_3/contact_page_iterations/contact_page_iteration_2', require('./views/cmg-app/sprint_3/contact_page_iterations/contact_page_iteration_2/routes'));

router.use('/cmg-app/sprint_3/payment_types_iteration_1', require('./views/cmg-app/sprint_3/payment_types_iteration_1/routes'));

router.use('/cmg-app/sprint_3/payment_types_iteration_2', require('./views/cmg-app/sprint_3/payment_types_iteration_2/routes'));


//iterations - Sprint 4
router.use('/cmg-app/sprint_4/payment_types_iteration_1', require('./views/cmg-app/sprint_4/payment_types_iteration_1/routes'));

router.use('/cmg-app/sprint_4/payment_types_iteration_2', require('./views/cmg-app/sprint_4/payment_types_iteration_2/routes'));

router.use('/cmg-app/sprint_4/collect_pay_card_details_iteration_1', require('./views/cmg-app/sprint_4/collect_pay_card_details_iteration_1/routes'));

router.use('/cmg-app/sprint_4/child_loop_iteration_1', require('./views/cmg-app/sprint_4/child_loop_iteration_1/routes'));

router.use('/cmg-app/sprint_4/child_loop_iteration_2', require('./views/cmg-app/sprint_4/child_loop_iteration_2/routes'));

router.use('/cmg-app/sprint_4/child_loop_iteration_3', require('./views/cmg-app/sprint_4/child_loop_iteration_3/routes'));

router.use('/cmg-app/sprint_4/child_loop_iteration_4', require('./views/cmg-app/sprint_4/child_loop_iteration_4/routes'));

router.use('/cmg-app/sprint_4/child_loop_iteration_5', require('./views/cmg-app/sprint_4/child_loop_iteration_5/routes'));



router.use('/cmg-app/sprint_4/domestic_abuse_iteration_1', require('./views/cmg-app/sprint_4/domestic_abuse_iteration_1/routes'));

router.use('/cmg-app/sprint_4/sprint_4_Prototype_for_user_research_14May2019', require('./views/cmg-app/sprint_4/sprint_4_Prototype_for_user_research_14May2019/routes'));


router.use('/cmg-app/sprint_6/sprint_6_child_loop_iteration_1', require('./views/cmg-app/sprint_6/sprint_6_child_loop_iteration_1/routes'));

router.use('/cmg-app/sprint_6/sprint_6_child_loop_iteration_2', require('./views/cmg-app/sprint_6/sprint_6_child_loop_iteration_2/routes'));

router.use('/cmg-app/sprint_6/sprint_6_child_loop_iteration_3', require('./views/cmg-app/sprint_6/sprint_6_child_loop_iteration_3/routes'));


router.use('/cmg-app/sprint_7/sprint_7_banner_examples', require('./views/cmg-app/sprint_7/sprint_7_banner_examples/routes'));

router.use('/cmg-app/sprint_7/sprint_7_urn_dropout', require('./views/cmg-app/sprint_7/sprint_7_urn_dropout/routes'));

router.use('/cmg-app/sprint_7/sprint_7_payment_check_answers', require('./views/cmg-app/sprint_7/sprint_7_payment_check_answers/routes'));

router.use('/cmg-app/sprint_8/sprint_8_feedback', require('./views/cmg-app/sprint_8/sprint_8_feedback/routes'));


// router.post('/what-do-you-want-to-claim-for', function(req, res) {
//     res.render('taken-to-iform');
// });

module.exports = router
