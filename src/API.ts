/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePathInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
};

export type ModelPathConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPathConditionInput | null > | null,
  or?: Array< ModelPathConditionInput | null > | null,
  not?: ModelPathConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePathInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeletePathInput = {
  id?: string | null,
};

export type CreateGoalTemplateInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  pathID: string,
};

export type ModelGoalTemplateConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  pathID?: ModelIDInput | null,
  and?: Array< ModelGoalTemplateConditionInput | null > | null,
  or?: Array< ModelGoalTemplateConditionInput | null > | null,
  not?: ModelGoalTemplateConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateGoalTemplateInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  pathID?: string | null,
};

export type DeleteGoalTemplateInput = {
  id?: string | null,
};

export type CreateGoalInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  goaltemplateID: string,
};

export type ModelGoalConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  goaltemplateID?: ModelIDInput | null,
  and?: Array< ModelGoalConditionInput | null > | null,
  or?: Array< ModelGoalConditionInput | null > | null,
  not?: ModelGoalConditionInput | null,
};

export type UpdateGoalInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  goaltemplateID?: string | null,
};

export type DeleteGoalInput = {
  id?: string | null,
};

export type ModelPathFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPathFilterInput | null > | null,
  or?: Array< ModelPathFilterInput | null > | null,
  not?: ModelPathFilterInput | null,
};

export type ModelGoalTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  pathID?: ModelIDInput | null,
  and?: Array< ModelGoalTemplateFilterInput | null > | null,
  or?: Array< ModelGoalTemplateFilterInput | null > | null,
  not?: ModelGoalTemplateFilterInput | null,
};

export type ModelGoalFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  goaltemplateID?: ModelIDInput | null,
  and?: Array< ModelGoalFilterInput | null > | null,
  or?: Array< ModelGoalFilterInput | null > | null,
  not?: ModelGoalFilterInput | null,
};

export type CreatePathMutationVariables = {
  input: CreatePathInput,
  condition?: ModelPathConditionInput | null,
};

export type CreatePathMutation = {
  createPath:  {
    __typename: "Path",
    id: string,
    name: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
    GoalTemplates:  {
      __typename: "ModelGoalTemplateConnection",
      items:  Array< {
        __typename: "GoalTemplate",
        id: string,
        name: string | null,
        description: string | null,
        pathID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePathMutationVariables = {
  input: UpdatePathInput,
  condition?: ModelPathConditionInput | null,
};

export type UpdatePathMutation = {
  updatePath:  {
    __typename: "Path",
    id: string,
    name: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
    GoalTemplates:  {
      __typename: "ModelGoalTemplateConnection",
      items:  Array< {
        __typename: "GoalTemplate",
        id: string,
        name: string | null,
        description: string | null,
        pathID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePathMutationVariables = {
  input: DeletePathInput,
  condition?: ModelPathConditionInput | null,
};

export type DeletePathMutation = {
  deletePath:  {
    __typename: "Path",
    id: string,
    name: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
    GoalTemplates:  {
      __typename: "ModelGoalTemplateConnection",
      items:  Array< {
        __typename: "GoalTemplate",
        id: string,
        name: string | null,
        description: string | null,
        pathID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateGoalTemplateMutationVariables = {
  input: CreateGoalTemplateInput,
  condition?: ModelGoalTemplateConditionInput | null,
};

export type CreateGoalTemplateMutation = {
  createGoalTemplate:  {
    __typename: "GoalTemplate",
    id: string,
    name: string | null,
    description: string | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
    Goals:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        id: string,
        name: string | null,
        description: string | null,
        goaltemplateID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateGoalTemplateMutationVariables = {
  input: UpdateGoalTemplateInput,
  condition?: ModelGoalTemplateConditionInput | null,
};

export type UpdateGoalTemplateMutation = {
  updateGoalTemplate:  {
    __typename: "GoalTemplate",
    id: string,
    name: string | null,
    description: string | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
    Goals:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        id: string,
        name: string | null,
        description: string | null,
        goaltemplateID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteGoalTemplateMutationVariables = {
  input: DeleteGoalTemplateInput,
  condition?: ModelGoalTemplateConditionInput | null,
};

export type DeleteGoalTemplateMutation = {
  deleteGoalTemplate:  {
    __typename: "GoalTemplate",
    id: string,
    name: string | null,
    description: string | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
    Goals:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        id: string,
        name: string | null,
        description: string | null,
        goaltemplateID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateGoalMutationVariables = {
  input: CreateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type CreateGoalMutation = {
  createGoal:  {
    __typename: "Goal",
    id: string,
    name: string | null,
    description: string | null,
    goaltemplateID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGoalMutationVariables = {
  input: UpdateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type UpdateGoalMutation = {
  updateGoal:  {
    __typename: "Goal",
    id: string,
    name: string | null,
    description: string | null,
    goaltemplateID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGoalMutationVariables = {
  input: DeleteGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type DeleteGoalMutation = {
  deleteGoal:  {
    __typename: "Goal",
    id: string,
    name: string | null,
    description: string | null,
    goaltemplateID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPathQueryVariables = {
  id: string,
};

export type GetPathQuery = {
  getPath:  {
    __typename: "Path",
    id: string,
    name: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
    GoalTemplates:  {
      __typename: "ModelGoalTemplateConnection",
      items:  Array< {
        __typename: "GoalTemplate",
        id: string,
        name: string | null,
        description: string | null,
        pathID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPathsQueryVariables = {
  filter?: ModelPathFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPathsQuery = {
  listPaths:  {
    __typename: "ModelPathConnection",
    items:  Array< {
      __typename: "Path",
      id: string,
      name: string | null,
      description: string | null,
      createdAt: string,
      updatedAt: string,
      GoalTemplates:  {
        __typename: "ModelGoalTemplateConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGoalTemplateQueryVariables = {
  id: string,
};

export type GetGoalTemplateQuery = {
  getGoalTemplate:  {
    __typename: "GoalTemplate",
    id: string,
    name: string | null,
    description: string | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
    Goals:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        id: string,
        name: string | null,
        description: string | null,
        goaltemplateID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListGoalTemplatesQueryVariables = {
  filter?: ModelGoalTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGoalTemplatesQuery = {
  listGoalTemplates:  {
    __typename: "ModelGoalTemplateConnection",
    items:  Array< {
      __typename: "GoalTemplate",
      id: string,
      name: string | null,
      description: string | null,
      pathID: string,
      createdAt: string,
      updatedAt: string,
      Goals:  {
        __typename: "ModelGoalConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGoalQueryVariables = {
  id: string,
};

export type GetGoalQuery = {
  getGoal:  {
    __typename: "Goal",
    id: string,
    name: string | null,
    description: string | null,
    goaltemplateID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGoalsQueryVariables = {
  filter?: ModelGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGoalsQuery = {
  listGoals:  {
    __typename: "ModelGoalConnection",
    items:  Array< {
      __typename: "Goal",
      id: string,
      name: string | null,
      description: string | null,
      goaltemplateID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePathSubscription = {
  onCreatePath:  {
    __typename: "Path",
    id: string,
    name: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
    GoalTemplates:  {
      __typename: "ModelGoalTemplateConnection",
      items:  Array< {
        __typename: "GoalTemplate",
        id: string,
        name: string | null,
        description: string | null,
        pathID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePathSubscription = {
  onUpdatePath:  {
    __typename: "Path",
    id: string,
    name: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
    GoalTemplates:  {
      __typename: "ModelGoalTemplateConnection",
      items:  Array< {
        __typename: "GoalTemplate",
        id: string,
        name: string | null,
        description: string | null,
        pathID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePathSubscription = {
  onDeletePath:  {
    __typename: "Path",
    id: string,
    name: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
    GoalTemplates:  {
      __typename: "ModelGoalTemplateConnection",
      items:  Array< {
        __typename: "GoalTemplate",
        id: string,
        name: string | null,
        description: string | null,
        pathID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateGoalTemplateSubscription = {
  onCreateGoalTemplate:  {
    __typename: "GoalTemplate",
    id: string,
    name: string | null,
    description: string | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
    Goals:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        id: string,
        name: string | null,
        description: string | null,
        goaltemplateID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateGoalTemplateSubscription = {
  onUpdateGoalTemplate:  {
    __typename: "GoalTemplate",
    id: string,
    name: string | null,
    description: string | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
    Goals:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        id: string,
        name: string | null,
        description: string | null,
        goaltemplateID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteGoalTemplateSubscription = {
  onDeleteGoalTemplate:  {
    __typename: "GoalTemplate",
    id: string,
    name: string | null,
    description: string | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
    Goals:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        id: string,
        name: string | null,
        description: string | null,
        goaltemplateID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateGoalSubscription = {
  onCreateGoal:  {
    __typename: "Goal",
    id: string,
    name: string | null,
    description: string | null,
    goaltemplateID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGoalSubscription = {
  onUpdateGoal:  {
    __typename: "Goal",
    id: string,
    name: string | null,
    description: string | null,
    goaltemplateID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGoalSubscription = {
  onDeleteGoal:  {
    __typename: "Goal",
    id: string,
    name: string | null,
    description: string | null,
    goaltemplateID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
