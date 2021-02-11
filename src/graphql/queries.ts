/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPath = /* GraphQL */ `
  query GetPath($id: ID!) {
    getPath(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      GoalTemplates {
        items {
          id
          name
          description
          pathID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listPaths = /* GraphQL */ `
  query ListPaths(
    $filter: ModelPathFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        GoalTemplates {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getGoalTemplate = /* GraphQL */ `
  query GetGoalTemplate($id: ID!) {
    getGoalTemplate(id: $id) {
      id
      name
      description
      pathID
      createdAt
      updatedAt
      Goals {
        items {
          id
          name
          description
          goaltemplateID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listGoalTemplates = /* GraphQL */ `
  query ListGoalTemplates(
    $filter: ModelGoalTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoalTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        pathID
        createdAt
        updatedAt
        Goals {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getGoal = /* GraphQL */ `
  query GetGoal($id: ID!) {
    getGoal(id: $id) {
      id
      name
      description
      goaltemplateID
      createdAt
      updatedAt
    }
  }
`;
export const listGoals = /* GraphQL */ `
  query ListGoals(
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        goaltemplateID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
