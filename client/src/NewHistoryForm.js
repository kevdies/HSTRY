import React from "react";
import { Button, Form } from "reactstrap";
import Attention from "./Attention";
import CaseInfo from "./CaseInfo";
import Intro from "./Intro";
import IdentifyingData from "./IdentifyingData";
import JobDescription from "./JobDescription";
import PriorWorkHistory from "./PriorWorkHistory";
import HistoryOfInjury from "./HistoryOfInjury";
import CurrentWorkStatus from "./CurrentWorkStatus";
import SubsequentInjuries from "./SubsequentInjuries";
import CurrentComplaints from "./CurrentComplaints";
import OtherProblems from "./OtherProblems";
import PriorWorkInjuries from "./PriorWorkInjuries";
import PriorNonWorkInjuries from "./PriorNonWorkInjuries";
import PastMedHistory from "./PastMedHistory";
import FamilyMedHistory from "./FamilyMedHistory";
import SurgicalHistory from "./SurgicalHistory";
import Medications from "./Medications";
import Allergies from "./Allergies";
import SocialHistory from "./SocialHistory";

const NewHistoryForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Attention />
      <CaseInfo />
      <Intro />
      <IdentifyingData />
      <JobDescription />
      <PriorWorkHistory />
      <HistoryOfInjury />
      <CurrentWorkStatus />
      <SubsequentInjuries />
      <CurrentComplaints />
      <OtherProblems />
      <PriorWorkInjuries />
      <PriorNonWorkInjuries />
      <PastMedHistory />
      <FamilyMedHistory />
      <SurgicalHistory />
      <Medications />
      <Allergies />
      <SocialHistory />
      <Button className="btn-submit" >Submit History Report</Button>
    </Form>
  );
};

export default NewHistoryForm;
