// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Path, GoalTemplate, Goal } = initSchema(schema);

export {
  Path,
  GoalTemplate,
  Goal
};