import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  // Add styling
`;

const PaymentInfo: React.FC = () => (
  <StyledInfo>
    <h2>Pay-as-you-go Information</h2>
    <p>Our blog operates on a pay-as-you-go model:</p>
    <ul>
      <li>Reading articles costs a one-time automatic payment of 5 cents per blog post.</li>
      <li>You'll only be charged when you actually read an article.</li>
      <li>No subscription fees or hidden costs.</li>
    </ul>
    <p>Connect your email to get started and enjoy our content!</p>
  </StyledInfo>
);

export default PaymentInfo;