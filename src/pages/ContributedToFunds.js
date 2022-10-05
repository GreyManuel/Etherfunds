import React from 'react'
import {
    Heading,
    useBreakpointValue,
    useColorModeValue,
    Button,
    Container,
    SimpleGrid,
    Divider,
    Icon,
    SkeletonCircle,
    HStack,
} from "@chakra-ui/react";
import FundraiserCard from '../components/FundraiserCard';
import { FcShare, FcDonate, FcMoneyTransfer } from "react-icons/fc";
import { Link } from 'react-router-dom';
import funds from '../data';
// import useGetAllCampaigns from '../hooks/queries/useGetAllCampaigns';
import styles from '../styles/Home.module.css'
import useGetContributedTo from '../hooks/queries/useGetContributedTo';

const ContributedToFunds = () => {
    const { isLoading, data: funds } = useGetContributedTo();
    return (
        
      <main className={styles.main}>

          <Container py={{ base: "4", md: "12" }} maxW={"7xl"}>
              <HStack spacing={2}>
                  <SkeletonCircle size="4" />
                  <Heading as="h2" size="lg">
                      You have contributed to {isLoading? null: funds.length} fundraisers
                  </Heading>
              </HStack>

              <Divider marginTop="4" />
                {isLoading ? <h2>Loading</h2> :
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={8}>
                        {funds.map((fund) => {
                            return (
                                <div key={fund.id}>
                                    <FundraiserCard
                                        name={fund.name}
                                        description={fund.description}
                                        creatorId={fund.manager}
                                        imageURL={"/images/default-campaign-image.jpg"}
                                        id={"1"}
                                        // id={fund.id.toString()}
                                        target={fund.goal.toString()}
                                        balance={fund.balance.toString()}
                                        ethPrice="NA"
                                    />
                                </div>
                            );
                        })}

                        {/* <div>
                    <FundraiserCard
                        name="test fundname"
                        description="Just testing"
                        creatorId="Some SHA string"
                        imageURL="TBD"
                        id="umm nope"
                        target="10,000"
                        balance="0"
                        ethPrice="10 ETH"
                    />
                </div> */}
                </SimpleGrid>
                }
          </Container>
      </main>
  )
}

export default ContributedToFunds