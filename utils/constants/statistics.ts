export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 65000,
    suffix: '+',
    label: 'Youths Trained Since 2021'
  },
  {
    value: 12400,
    suffix: '+',
    label: 'Jobs Facilitated'
  },
  {
    value: 15,
    label: 'Active Programs'
  },
  {
    value: 20,
    suffix: '+',
    label: 'Local & Global Partners'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 5,
    label: 'Key Programs'
  },
  {
    value: 27,
    label: 'LGAs Covered'
  },
  {
    value: 6,
    label: 'Specialized Departments'
  },
  {
    value: 7,
    label: 'Core Services'
  }
];
