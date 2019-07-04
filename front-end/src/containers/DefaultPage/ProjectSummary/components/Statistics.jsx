import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Tooltip, Legend,
} from 'recharts';
import LoadingIcon from 'mdi-react/LoadingIcon';

const data01 = [{ name: 'Communication', value: 50, fill: '#4ce1b6' },
  { name: 'Marketing', value: 25, fill: '#70bbfd' },
  { name: 'HTML', value: 25, fill: '#ff4861' }];

const data012 = [{ name: 'React/Redux', value: 40, fill: '#4ce1b6' },
  { name: 'AWS', value: 175, fill: '#70bbfd' },
  { name: 'Machine Learning', value: 70, fill: '#7e6bc9' }];

const data02 = [{ name: 'Communication', value: 50, fill: '#4ce1b6' },
  { name: 'Marketing', value: 50, fill: '#70bbfd' }];

const data022 = [{ name: 'React/Redux', value: 40, fill: '#4ce1b6' },
  { name: 'AWS', value: 175, fill: '#70bbfd' },
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
      data2: data02,
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate() {
    const { data1: stateData1, data2: stateData2 } = this.state;

    this.setState({ update: true });
    // your async logic here
    const data1 = stateData1 === data01 ? data012 : data01;
    const data2 = stateData2 === data02 ? data022 : data02;
    setTimeout(() => this.setState({ update: false, data1, data2 }), 2000);
  }

  render() {
    const { update, data1, data2 } = this.state;

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
        <div className="project-summary__statistic">
          <p className="project-summary__statistic-title">Votre Apport</p>
          <PieChart width={240} height={250}>
            <Tooltip />
            <Pie data={data2} dataKey="value" cx={110} cy={110} innerRadius={60} outerRadius={80} label />
            <Legend layout="vertical" verticalAlign="middle" wrapperStyle={style} />
          </PieChart>
        </div>
      </div>
    );
  }
}
