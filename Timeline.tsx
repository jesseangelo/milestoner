import React, { Component } from 'react';
import TimelineEntry from './TimelineEntry';
import { compareAsc } from 'date-fns'

interface AppProps {
  milestones: []
}

class Timeline extends Component<AppProps>{

  constructor(props) {
    super(props);
  }

  render() {
    const sorted = this.props.milestones.sort((a, b) => {
        return compareAsc(a.when, b.when) ? 1 : -1;
      })

    const ms = (
      <div>
          {
            sorted.map((milestone, n) => {
               return <div>
                  <TimelineEntry 
                    key={milestone.name}
                    name={milestone.name}
                    when={milestone.when} />
                    
                </div>
            })
          }
      </div>
    );

    return ms;

  }

}

export default Timeline;
