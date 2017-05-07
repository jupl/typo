import {addToEntries, createConfiguration} from 'wcb'

// tslint:disable-next-line:no-default-export
export default addToEntries(createConfiguration({
  log: message => console.log(message),
  pattern: ['**/main.ts'],
  target: 'node',
}), ['dotenv/config'])
