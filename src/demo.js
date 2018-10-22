// import moment from 'moment'

export const servers = [{
  name: 'www01',
  status: 'success',
  icon: 'globe',
  description: 'Web server that runs our sites'
}, {
  name: 'sql01',
  status: 'danger',
  icon: 'database',
  description: 'mySQL server used for reporting'
}, {
  name: 'mongoDB01',
  status: 'info',
  icon: 'file-code-o',
  description: 'Main DB server'
}, {
  name: 'ldap01',
  status: 'success',
  icon: 'key',
  description: 'Authentication server'
}, {
  name: 'mgmt01',
  status: 'success',
  icon: 'home',
  description: 'Management server with all tools'
}, {
  name: 'bkup01',
  status: 'warning',
  icon: 'backward',
  description: 'Backup server'
}]

export const stats = [{
  header: '8390',
  text: 'Visitors'
}, {
  header: '30%',
  text: 'Referrals'
}, {
  header: '70%',
  text: 'Organic'
}]

/*
export const timeline = [{
  icon: 'fa-envelope',
  color: 'blue',
  title: 'Write short novel',
  time: moment().endOf('day').fromNow(),
  body: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
  buttons: [{
    type: 'primary',
    message: 'Read more',
    href: 'https://github.com/misterGF/CoPilot',
    target: '_blank'
  }]
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Sarah Young accepted your friend request',
  time: moment('20150620', 'MMM Do YY').fromNow()
},
{
  icon: 'fa-camera',
  color: 'purple',
  title: 'Watch a youTube video',
  time: moment('20130620', 'YYYYMMDD').fromNow(),
  body: '<div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" allowfullscreen></iframe></div>'
}]
*/

export const sessions = [
  {
    'session_id': 'b672afa2-1b03-4eb4-b76f-77807da15936',
    'duration': 25.5,
    'description': 'demo session',
    'date': '2018-10-20T00:00:00.000Z',
    'device_id': '6db037ec-53aa-4941-9f5e-b3aef8e6469d',
    'device_type': 'bycicle',
    'gym_id': '64aabfa2-bc47-44ee-8a04-c2fdb1ade362',
    'gym_name': 'The Wall gym'
  },
  {
    'session_id': '90389ff4-47d5-4bbe-9f75-bd4f01a52c19',
    'duration': 5.3,
    'description': 'demo session',
    'date': '2018-10-20T00:00:00.000Z',
    'device_id': '6db037ec-53aa-4941-9f5e-b3aef8e6469d',
    'device_type': 'bycicle',
    'gym_id': '64aabfa2-bc47-44ee-8a04-c2fdb1ade362',
    'gym_name': 'The Wall gym'
  },
  {
    'session_id': 'e1367480-682b-45bd-9578-922208218af7',
    'duration': 21,
    'description': 'demo session',
    'date': '2018-10-20T00:00:00.000Z',
    'device_id': '6db037ec-53aa-4941-9f5e-b3aef8e6469d',
    'device_type': 'bycicle',
    'gym_id': '64aabfa2-bc47-44ee-8a04-c2fdb1ade362',
    'gym_name': 'The Wall gym'
  }
]

export const gyms = [{
  'gym_id': '64aabfa2-bc47-44ee-8a04-c2fdb1ade362',
  'name': 'The Wall gym',
  'address': 'The Wall Av. 1234'
}, {
  'gym_id': '64aabfa2-bc47-44ee-8a04-c2fdb1ade364',
  'name': 'The Wall gym',
  'address': 'The Wall Av. 1234'
}]
