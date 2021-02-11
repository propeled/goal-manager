/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePath = /* GraphQL */ `
  subscription OnCreatePath {
    onCreatePath {
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
export const onUpdatePath = /* GraphQL */ `
  subscription OnUpdatePath {
    onUpdatePath {
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
export const onDeletePath = /* GraphQL */ `
  subscription OnDeletePath {
    onDeletePath {
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
export const onCreateGoalTemplate = /* GraphQL */ `
  subscription OnCreateGoalTemplate {
    onCreateGoalTemplate {
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
export const onUpdateGoalTemplate = /* GraphQL */ `
  subscription OnUpdateGoalTemplate {
    onUpdateGoalTemplate {
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
export const onDeleteGoalTemplate = /* GraphQL */ `
  subscription OnDeleteGoalTemplate {
    onDeleteGoalTemplate {
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
export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal {
    onCreateGoal {
      id
      name
      description
      goaltemplateID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal {
    onUpdateGoal {
      id
      name
      description
      goaltemplateID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal {
    onDeleteGoal {
      id
      name
      description
      goaltemplateID
      createdAt
      updatedAt
    }
  }
`;
