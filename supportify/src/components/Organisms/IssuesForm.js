import React, { useState } from "react";
// import IssueCard from "./IssueCard";

const IssuesForm = props => {
  const [issue, setIssue] = useState({
    title: "",
    completed: "",
    description: "",
    equipment: "",
    estimated_cost: "",
    general_cost: "",
    issues_id: "",
    needs_attention: "",
    priority: "",
    scheduled: "",
    user_id: ""
  });

  // this makes your searchbar let you type
  const changeHandler = event => {
    // event.preventDefault();
    // props.addNewMember(member);
    // setMember({ ...member, [event.target.name]: event.target.value })
    setIssue({
      ...issue,
      [event.target.name]: event.target.value
    });

    console.log(event.target.value);
  };

  const submitForm = event => {
    // console.log (member) to have form show up in console
    console.log(issue);
    event.preventDefault();
    setIssue(issue);
    // setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label html="title">Name</label>
      <input
        id="title"
        name="name"
        type="text"
        placeholder="title"
        onChange={changeHandler}
        value={issue.name}
      />

      <label html="title">Issue</label>
      <input
        id="title"
        name="email"
        type="text"
        placeholder="title"
        onChange={changeHandler}
        value={issue.email}
      />

      <label html="title">Role</label>
      <input
        id="title"
        name="role"
        type="text"
        placeholder="title"
        onChange={changeHandler}
        value={issue.role}
      />
      <button type="submit">Submit</button>
      <div>
        <input type="radio" id="title" name="done" value="done" />
        <label for="button">Done</label>
      </div>

      <div>
        <input type="radio" id="title" name="name" value="scheduled" />
        <label for="button">Scheduled</label>
      </div>

      <div>
        <input type="radio" id="title" name="name" value="ignored" />
        <label for="button">Ignored</label>
      </div>
    </form>
  );
};

export default IssuesForm;
