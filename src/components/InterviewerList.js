import React from "react";

import "components/InterviewerList.scss";

import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {

  const { interviewers } = props;
  const interviewerList = interviewers.map((mentor) => 
    < InterviewerListItem selected={props.interviewer === mentor.id} name={mentor.name} avatar={mentor.avatar} setItem={(event) => props.setInterviewer(mentor.id)} />)
  
  return (
    <section class="interviewers">
      <h4 class="interviewers__header text--light">Interviewer</h4>
      <ul class="interviewers__list"> {interviewerList} </ul>
    </section>
  );
}