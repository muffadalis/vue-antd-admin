const operation1 = [
  {
    key: 'op1',
    type: ' Order relationship in effect ',
    name: 'Qu Lili ',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  },
  {
    key: 'op2',
    type: ' Financial Review ',
    name: ' Pay a little ',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Do not pass the reason'
  },
  {
    key: 'op3',
    type: 'Department first Instance',
    name: 'Zhou Maomau',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  },
  {
    key: 'op4',
    type: 'Submit an Order',
    name: 'Lindong',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Its great.'
  },
  {
    key: 'op5',
    type: 'Create an Order',
    name: 'Khan Tooth teeth',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  }
]

const operation2 = [
  {
    key: 'op2',
    type: 'Financial Review',
    name: 'Pay a little',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Do not pass the reason'
  },
  {
    key: 'op3',
    type: 'Department first Instance',
    name: ' Zhou Maomau ',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  },
  {
    key: 'op4',
    type: 'Submit an Order',
    name: 'Lindong',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Its great.'
  }
]

const operation3 = [
  {
    key: 'op2',
    type: 'Financial Review',
    name: 'Pay a little',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Do not pass the reason'
  },
  {
    key: 'op3',
    type: 'Department first Instance',
    name: 'Zhou Maomau',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  }
]

const operationColumns = [
  {
    title: 'Type of operation',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'operator.',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Results of implementation',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Operating time',
    dataIndex: 'updatedAt',
    key: 'updatedAt'
  },
  {
    title: 'Note',
    dataIndex: 'memo',
    key: 'memo'
  }
]

export {operation1, operation2, operation3, operationColumns}
