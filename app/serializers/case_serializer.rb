class CaseSerializer < ActiveModel::Serializer
  attributes :id, :applicant_name, :applicant_dob, :applicant_employer, :applicant_date_of_injury, :applicant_claim_number, :applicant_wcab_number, :applicant_panel_qme_number, :applicant_date_of_evaluation, :evaluation_address1, :evaluation_address2, :evaluation_city, :evaluation_state, :evaluation_zip
end
