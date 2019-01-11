const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
]

const positions = [
  ' Java Engineer | Ant Gold Clothing-computing services business Group-WeChat platform department ',
  ' Front-end engineer | Ant Gold Clothing-computing services business Group-vue Platform ',
  ' Front-end engineer | Ant Gold Clothing-computing services business Group-react Platform ',
  ' Product Analyst | Ant Gold Clothing-computing services business Group-ios Platform Department '
]

const sayings = [
  ' Thats an inner thing that they cant reach or touch ',
  ' Hope is a good thing, maybe the best, and good things dont die ',
  ' There were so many pubs in the town that she went into my tavern, At that time I would just think about what I wanted and never wanted to have something of my own. '
]

const logos = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'
]

const admins = ['ICZER', 'JACK', 'LUIS', 'DAVID']

const groups = [' High Force Design Sky Regiment ', ' Middle two Teen Regiment ', ' science move Brick Group ', ' trick you into learning computer ', ' programmer daily ']

const users = [
  {
    name: 'Qu Lili',
    avatar: avatars[0],
    groupId: 0
  },
  {
    name: 'Shaoxiao',
    avatar: avatars[1],
    groupId: 0
  },
  {
    name: 'Lindong',
    avatar: avatars[2],
    groupId: 1
  },
  {
    name: 'Zhou Xing',
    avatar: avatars[3],
    groupId: 2
  },
  {
    name: 'Zhu-Right',
    avatar: avatars[4],
    groupId: 3
  },
  {
    name: 'Le a',
    avatar: avatars[5],
    groupId: 4
  }
]

const teams = groups.map((item, index) => {
  return {
    name: item,
    avatar: avatars[index]
  }
})

export {logos, sayings, positions, avatars, admins, groups, users, teams}
