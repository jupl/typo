import {addToEntries, createConfiguration} from 'wcb'

// tslint:disable-next-line:no-default-export
export default addToEntries(createConfiguration({
  pattern: ['**/bin.ts'],
  target: 'node',
}), ['dotenv/config'])
