import packageInfo from '../../package.json'

export const environment = {
  appVersion: packageInfo.version,
  production: false,
  apiUrl: 'http://localhost:3999/api/v1'
}
