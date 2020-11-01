import React, { Component } from 'react';
import { formatDistance, formatDistanceStrict } from 'date-fns'


interface AppProps {
  name: string;
  when: string;
}

class TimelineEntry extends Component<AppProps> {
  
  constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props)
    const name = this.props.name;
    const when = this.props.when;
    const distance = formatDistanceStrict(
      when, new Date(), { unit: 'day' }
    )
    console.log(distance)

    return (
      <div className="bb ba mv4 ph3 br3 white bg-red grow">
        <p className="">{name} </p>
        <p className="dim"><em> {distance}</em> </p>
      </div>

    );
  }
}

export default TimelineEntry;
