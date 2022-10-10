import styled from '@emotion/styled';



export const Item = styled.li`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  flex-basis: calc((100% - 90px) / 3);
    

// width: calc((100% - 6 * 10px) / 3);
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
    // width: 450px;
  margin-bottom: 15px;
  color:#000000;
  
`;

export const Poster = styled.img`
  width: 350px;
  margin-bottom: 15px;
`;

export const VoteWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const VoteAverage = styled.p`
color:#000000;
// text-decoration: none;
`;

export const VoteCount = styled.p`
color:#000000;
`;
export const Value = styled.span`
font-weight: 700;
`;