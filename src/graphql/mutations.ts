/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPath = /* GraphQL */ `
  mutation CreatePath(
    $input: CreatePathInput!
    $condition: ModelPathConditionInput
  ) {
    createPath(input: $input, condition: $condition) {
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
export const updatePath = /* GraphQL */ `
  mutation UpdatePath(
    $input: UpdatePathInput!
    $condition: ModelPathConditionInput
  ) {
    updatePath(input: $input, condition: $condition) {
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
export const deletePath = /* GraphQL */ `
  mutation DeletePath(
    $input: DeletePathInput!
    $condition: ModelPathConditionInput
  ) {
    deletePath(input: $input, condition: $condition) {
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
export const createGoalTemplate = /* GraphQL */ `
  mutation CreateGoalTemplate(
    $input: CreateGoalTemplateInput!
    $condition: ModelGoalTemplateConditionInput
  ) {
    createGoalTemplate(input: $input, condition: $condition) {
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
export const updateGoalTemplate = /* GraphQL */ `
  mutation UpdateGoalTemplate(
    $input: UpdateGoalTemplateInput!
    $condition: ModelGoalTemplateConditionInput
  ) {
    updateGoalTemplate(input: $input, condition: $condition) {
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
export const deleteGoalTemplate = /* GraphQL */ `
  mutation DeleteGoalTemplate(
    $input: DeleteGoalTemplateInput!
    $condition: ModelGoalTemplateConditionInput
  ) {
    deleteGoalTemplate(input: $input, condition: $condition) {
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
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
      id
      name
      description
      goaltemplateID
      createdAt
      updatedAt
    }
  }
`;
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
      id
      name
      description
      goaltemplateID
      createdAt
      updatedAt
    }
  }
`;
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
      id
      name
      description
      goaltemplateID
      createdAt
      updatedAt
    }
  }
`;
