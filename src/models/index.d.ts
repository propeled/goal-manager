import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Path {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly GoalTemplates?: (GoalTemplate | null)[];
  constructor(init: ModelInit<Path>);
  static copyOf(source: Path, mutator: (draft: MutableModel<Path>) => MutableModel<Path> | void): Path;
}

export declare class GoalTemplate {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly Goals?: (Goal | null)[];
  readonly pathID: string;
  constructor(init: ModelInit<GoalTemplate>);
  static copyOf(source: GoalTemplate, mutator: (draft: MutableModel<GoalTemplate>) => MutableModel<GoalTemplate> | void): GoalTemplate;
}

export declare class Goal {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly goaltemplateID: string;
  constructor(init: ModelInit<Goal>);
  static copyOf(source: Goal, mutator: (draft: MutableModel<Goal>) => MutableModel<Goal> | void): Goal;
}