import React from 'react';
import ButtonClear from './styles/ButtonClear';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { Mutation } from 'react-apollo';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {signout => (
        <ButtonClear onClick={signout}>
          <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7094 9.4709L13.709 16.6995C13.084 17.3449 12.0006 16.8931 12.0006 15.968V11.8374H6.33365C5.77945 11.8374 5.3336 11.377 5.3336 10.8047V6.67412C5.3336 6.10186 5.77945 5.64146 6.33365 5.64146H12.0006V1.51084C12.0006 0.590051 13.0798 0.133961 13.709 0.779371L20.7094 8.00797C21.0969 8.41242 21.0969 9.06644 20.7094 9.4709ZM8.0004 16.4844V14.7633C8.0004 14.4793 7.77539 14.2469 7.50037 14.2469H4.0002C3.26266 14.2469 2.6668 13.6316 2.6668 12.8701V4.60881C2.6668 3.84722 3.26266 3.23193 4.0002 3.23193H7.50037C7.77539 3.23193 8.0004 2.99958 8.0004 2.7156V0.994508C8.0004 0.710527 7.77539 0.47818 7.50037 0.47818H4.0002C1.79176 0.47818 0 2.32836 0 4.60881V12.8701C0 15.1505 1.79176 17.0007 4.0002 17.0007H7.50037C7.77539 17.0007 8.0004 16.7683 8.0004 16.4844Z"
              fill="#2B2C34"
            />
          </svg>
        </ButtonClear>
      )}
    </Mutation>
  );
};

export default Signout;
