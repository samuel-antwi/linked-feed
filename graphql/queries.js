import { gql } from 'graphql-request'

export const GET_POSTS = gql`
  query getPosts {
    posts(orderBy: createdAt_DESC) {
      id

      authur {
        avatar {
          url
        }
        id
        isOnline
        name
        profession
      }
      description {
        markdown
        text
      }
      image {
        url
        height
        width
      }
      video {
        url
      }
      likes {
        id
        name
      }
    }
  }
`

export const GET_CHATS = gql`
  query getChats {
    chats(orderBy: createdAt_ASC) {
      date
      id
      message
      firstName
      surname
      online
      image {
        url
      }
    }
  }
`
