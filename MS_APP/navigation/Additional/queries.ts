export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      imageUri
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          chatRoom {
            id
            chatRoomUsers {
              items {
                user {
                  id
                  name
                  imageUri
                  status
                }
              }
            }
            lastMessage {
                chatRoomID
                content
                createdAt
                id
                user {
                    id
                    name
                }
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
