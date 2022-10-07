import { ReactNode } from 'react';
import styled from 'styled-components';

type RetrieveCardProps = {
    content: {
        title: string;
        description: string;
        button: ReactNode;
    };
    disabled?: boolean;
    fullWidth?: boolean;
};

const RetrieveCardWrapper = styled.div<{
    fullWidth?: boolean; disabled: boolean
}>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '250px')};
  background-color: ${({ theme }) => theme.colors.card.default};
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radii.default};
  box-shadow: ${({ theme }) => theme.shadows.default};
  filter: opacity(${({ disabled }) => (disabled ? '.4' : '1')});
  align-self: stretch;
  ${({ theme }) => theme.mediaQueries.small} {
    width: 100%;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    padding: 1.6rem;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0;
  ${({ theme }) => theme.mediaQueries.small} {
    font-size: ${({ theme }) => theme.fontSizes.text};
  }
`;

const Description = styled.p`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`;

export const RetrieveCard = ({ content, disabled = false, fullWidth }: RetrieveCardProps) => {
    const { title, description, button } = content;

    // json rpc to metamask to retrieve ipfs hash 
    const render = () => {

    }

    return (
        <RetrieveCardWrapper fullWidth={fullWidth} disabled={disabled}>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <input></input>
            <button
                onClick={render}>Render</button>

        </RetrieveCardWrapper>

    );
};
