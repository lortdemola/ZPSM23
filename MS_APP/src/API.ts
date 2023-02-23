/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  status?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
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

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  imageUri?: string | null,
  status?: string | null,
  chatRoomUser?: ModelChatRoomUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChatRoomUserConnection = {
  __typename: "ModelChatRoomUserConnection",
  items:  Array<ChatRoomUser | null >,
  nextToken?: string | null,
};

export type ChatRoomUser = {
  __typename: "ChatRoomUser",
  id: string,
  userID: string,
  chatRoomID: string,
  user?: Todo | null,
  chatRoom?: ChatRoom | null,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  chatRoomUsers?: ModelChatRoomUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  status?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateChatRoomUserInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelChatRoomUserConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserConditionInput | null > | null,
  or?: Array< ModelChatRoomUserConditionInput | null > | null,
  not?: ModelChatRoomUserConditionInput | null,
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

export type UpdateChatRoomUserInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteChatRoomUserInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelChatRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserFilterInput | null > | null,
  or?: Array< ModelChatRoomUserFilterInput | null > | null,
  not?: ModelChatRoomUserFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionChatRoomUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  chatRoomID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatRoomUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomUserFilterInput | null > | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomUserMutationVariables = {
  input: CreateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type CreateChatRoomUserMutation = {
  createChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "Todo",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomUserMutationVariables = {
  input: UpdateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserMutation = {
  updateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "Todo",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomUserMutationVariables = {
  input: DeleteChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type DeleteChatRoomUserMutation = {
  deleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "Todo",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUserQueryVariables = {
  id: string,
};

export type GetChatRoomUserQuery = {
  getChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "Todo",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?:  {
    __typename: "ModelChatRoomUserConnection",
    items:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "Todo",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatRoomUsersByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatRoomUsersByUserIDQuery = {
  chatRoomUsersByUserID?:  {
    __typename: "ModelChatRoomUserConnection",
    items:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "Todo",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatRoomUsersByChatRoomIDQueryVariables = {
  chatRoomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatRoomUsersByChatRoomIDQuery = {
  chatRoomUsersByChatRoomID?:  {
    __typename: "ModelChatRoomUserConnection",
    items:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "Todo",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomUserSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomUserFilterInput | null,
};

export type OnCreateChatRoomUserSubscription = {
  onCreateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "Todo",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomUserSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomUserFilterInput | null,
};

export type OnUpdateChatRoomUserSubscription = {
  onUpdateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "Todo",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomUserSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomUserFilterInput | null,
};

export type OnDeleteChatRoomUserSubscription = {
  onDeleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "Todo",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
