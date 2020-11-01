import React, { Component } from "react";
import { render } from "react-dom";
import firebase from 'firebase/app'

import "firebase/firestore";
import Hello from "./Hello";
import Timeline from "./Timeline";
import "./style.css";
import { Button } from "@material-ui/core";

interface AppProps {}
interface AppState {
  appname: string;
  milestones: any[];
}

class App extends Component<AppProps, AppState> {
  firebaseConfig = {
    apiKey: "AIzaSyAT8RkyMZJ_5pbPEJygB8e9ckkChAXkVk0",
    authDomain: "milestoner-c443b.firebaseapp.com",
    databaseURL: "https://milestoner-c443b.firebaseio.com",
    projectId: "milestoner-c443b",
    storageBucket: "milestoner-c443b.appspot.com",
    messagingSenderId: "426303425728",
    appId: "1:426303425728:web:39cb0e7bd8ca02d763f125",
    measurementId: "G-CWP97PC32T"
  };
  private db;

  constructor(props) {
    super(props);
    this.state = {
      appname: "Milestoner",
      milestones: []
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(this.firebaseConfig);
    }
    console.log(firebase)
    this.db = firebase.firestore();
    this.getMilestones();
  }

  getMilestones() {
    let ms = [];
    this.db
      .collection("milestones")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // console.log(`${doc.data().name} when: ${doc.data().when.toDate()} `)
          ms.push({
            name: doc.data().name,
            when: new Date(doc.data().when.toDate())
          });
        });
        this.setState({
          milestones: ms
        });
        //console.log(this.state)
      });
  }

  render() {
    return (
      <div>
        <Hello name={this.state.appname} />
        <p>Milestone Timeline</p>

        <Timeline milestones={this.state.milestones} />

        <Button>Add Milestone</Button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
