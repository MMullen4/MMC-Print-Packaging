import { gql } from "@apollo/client";

export const SEND_CONTACT_EMAIL = gql`
  mutation SendContactEmail(
    $name: String!
    $email: String!
    $message: String!
  ) {
    sendContactEmail(name: $name, email: $email, message: $message)
  }
`;
