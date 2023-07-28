export function randomInteger(max: number) {
  return Math.floor(Math.random() * (max + 1));
}
function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b];
}

export function randomHexColor() {
  let [r, g, b] = randomRgbColor();

  let hr = r.toString(16).padStart(2, '0');
  let hg = g.toString(16).padStart(2, '0');
  let hb = b.toString(16).padStart(2, '0');

  return '#' + hr + hg + hb;
}

export const getInitial = (name: string) => {
  let initial = '';
  name?.split(' ').forEach((item) => (initial += item.charAt(0)));
  return initial;
};

export function capitalizeWords(name: string) {
  let capitalizeArr = name?.split(' ').map((element: string) => {
    return element?.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
  return capitalizeArr?.join(' ');
}

export function displayRole(role: string) {
  switch (role) {
    case 'SUPER_ADMIN':
      return 'Superuser';
    case 'HYBRID_ADMIN':
      return 'Hybrid Admin';
    case 'TMS_ADMIN':
      return 'TMS Admin';
    case 'AMS_ADMIN':
      return 'AMS Admin';
    case 'HYBRID_USER':
      return 'Hybrid User';
    case 'AMS_USER':
      return 'AMS User';
    case 'TMS_USER':
      return 'TMS User';
    default:
      return;
  }
}
export function filterRole(role?: string) {
  switch (role) {
    case 'Superuser':
      return 'SUPER_ADMIN';
    case 'Hybrid Admin':
      return 'HYBRID_ADMIN';
    case 'TMS Admin':
      return 'TMS_ADMIN';
    case 'AMS Admin':
      return 'AMS_ADMIN';
    case 'Hybrid User':
      return 'HYBRID_USER';
    case 'AMS User':
      return 'AMS_USER';
    case 'TMS User':
      return 'TMS_USER';
    default:
      return;
  }
}

export const canCreateRole = (role?: string) => {
  switch (role) {
    case 'SUPER_ADMIN':
      return [
        'Superuser',
        'Hybrid Admin',
        'TMS Admin',
        'AMS Admin',
        'Hybrid User',
        'AMS User',
        'TMS User',
      ];
    case 'HYBRID_ADMIN':
      return [
        'Hybrid Admin',
        'TMS Admin',
        'AMS Admin',
        'Hybrid User',
        'AMS User',
        'TMS User',
      ];
    case 'TMS_ADMIN':
      return ['TMS Admin', 'Hybrid User', 'AMS User', 'TMS User'];
    case 'AMS_ADMIN':
      return ['AMS Admin', 'Hybrid User', 'AMS User', 'TMS User'];

    default:
      return;
  }
};
export const userActions: {
  actionMenu: (status?: string) => string[];
  roles: string[];
  status: string[];
  statusUpdate: string[];
} = {
  actionMenu: (status) => [
    'Update',
    'Workspace',
    status === 'ARCHIVE' ? 'Unarchive' : 'Archive',
  ],
  roles: [
    'Superuser',
    'Hybrid Admin',
    'TMS Admin',
    'AMS Admin',
    'Hybrid User',
    'AMS User',
    'TMS User',
  ],

  status: ['Active', 'Archived', 'Pending'],
  statusUpdate: ['Archive', 'Unarchive'],
};

export const isUserAnAdmin = (role?: string) => {
  switch (role) {
    case 'SUPER_ADMIN':
      return true;
    case 'HYBRID_ADMIN':
      return true;
    case 'TMS_ADMIN':
      return true;
    case 'AMS_ADMIN':
      return true;
    default:
      return false;
  }
};
export const rolesAscending = [
  'TMS_USER',
  'AMS_USER',
  'HYBRID_USER',
  'AMS_ADMIN',
  'TMS_ADMIN',
  'HYBRID_ADMIN',
  'SUPER_ADMIN',
];

export const isPermitted = (myRole: string, userRole: string) => {
  const myIndex =
    rolesAscending.indexOf(myRole) !== -1
      ? rolesAscending.indexOf(myRole)
      : rolesAscending.indexOf(filterRole(myRole) || '');
  const userIndex =
    rolesAscending.indexOf(userRole) !== -1
      ? rolesAscending.indexOf(userRole)
      : rolesAscending.indexOf(filterRole(userRole) || '');

  return myIndex >= userIndex;
};
