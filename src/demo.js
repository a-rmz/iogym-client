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

export const usersAdmin = [
  {
    user_id: 'ab457b00-5907-4762-9307-90eba5072215',
    rfid_code: 'ABBAFAE0',
    first_name: 'Jon',
    last_name: 'Snow',
    is_admin: true,
    email: 'jon@thewall.com',
    birthday: '1900-01-01T00:00:00.000Z'
  },
  {
    user_id: 'eec0111f-e121-4ac0-9650-c31dd62ede57',
    rfid_code: '0F0FDAE7',
    first_name: 'Daenerys',
    last_name: 'Targaryen',
    is_admin: false,
    email: 'dany@targaryen.com',
    birthday: '1900-01-01T00:00:00.000Z'
  }
]
