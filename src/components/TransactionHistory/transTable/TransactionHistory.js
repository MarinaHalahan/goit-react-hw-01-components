import { Table, Head, Title, Body, Row, Box } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
    return (
        <Table>
            <Head>
                <Row>
                    <Title>Type</Title>
                    <Title>Amount</Title>
                    <Title>Currency</Title>
                </Row>
            </Head>
            <Body>
                {items.map(({ id, type, amount, currency }) => (
                    <Row key={id}>
                        <Box>{type}</Box>
                        <Box>{amount}</Box>
                        <Box>{currency}</Box>
                    </Row>
                
                ))}
            </Body>
                

        </Table>
    );
}


// <table class="transaction-history">
  {/* <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead> */}

  {/* <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table> */}