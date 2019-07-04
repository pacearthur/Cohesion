import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Tooltip, Legend,
} from 'recharts';
import LoadingIcon from 'mdi-react/LoadingIcon';

const data01 = [{ name: 'Javascript', value: 54, fill: '#70bbfd' },
  { name: 'Communication', value: 23, fill: '#ff4861' },
  { name: 'Machine Learning', value: 23, fill: '#7e6bc9' }];

const data012 = [{ name: 'React/Redux', value: 40, fill: '#4ce1b6' },
  { name: 'Javascript', value: 175, fill: '#70bbfd' },
  { name: 'Machine Learning', value: 70, fill: '#7e6bc9' }];

const style = {
  top: 30,
  left: 240,
  width: 150,
  lineHeight: '24px',
};

export default class Statistics extends PureComponent {
  constructor() {
    super();

    this.state = {
      update: false,
      data1: data01,
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate() {
    const { data1: stateData1 } = this.state;

    this.setState({ update: true });
    // your async logic here
    const data1 = stateData1 === data01 ? data012 : data01;
    setTimeout(() => this.setState({ update: false, data1 }), 2000);
  }

  render() {
    const { update, data1 } = this.state;

    return (
      <div className="project-summary__statistics">
        {update ? <div className="project-summary__statistics-refresh"><LoadingIcon /></div> : ''}
        <div className="project-summary__statistic">
          <p className="project-summary__statistic-title">Compétences requises</p>
          <PieChart width={240} height={220}>
            <Tooltip />
            <Pie data={data1} dataKey="value" cx={110} cy={110} innerRadius={60} outerRadius={80} label />
            <Legend layout="vertical" verticalAlign="middle" wrapperStyle={style} />
          </PieChart>
        </div>
      </div>
    );
  }
}
