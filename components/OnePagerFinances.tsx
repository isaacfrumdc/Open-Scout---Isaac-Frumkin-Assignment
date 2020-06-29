import React from 'react';
import { Heading, Progress} from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {
  // Format a number to include a dollar sign. This function
  // will be improved as part of task 2.
  const formatFinanceNumber = (financeNumber: number) => {
    //numberFormat(financeNumber);
    //numberWithCommas(financeNumber);
    var nf = new Intl.NumberFormat();
    //const x = parseFloat(nf.format(financeNumber)).toLocaleString('en');
    return `$${nf.format(financeNumber).toLocaleString()}`;
  };

  return (
    <ContentCard title='Finances' isLoading={isLoading}>
      <Heading as='h1' size='lg' marginRight='10px'>
        Funding Stage: {onePagerData.fundraisingStage}
      </Heading>
      <SubHeading>
        Funds Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
      </SubHeading>
      <SubHeading>
        Funding Goal: {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
      </SubHeading>
      <SubHeading>
        Fundraising Details: {onePagerData.fundraisingDetails}
      </SubHeading>
      <Progress 
        hasStripe isAnimated
        max={onePagerData.fundraisingStageGoal} value={onePagerData.fundsRaisedInStage} 
      />
    </ContentCard>
  );
};


/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
/*
function numberWithCommas(x) {
  var buf = Buffer.from(x)
  return console.log(buf.toString).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
*/