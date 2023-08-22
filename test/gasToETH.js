function calculateGasCost(gasUsed, gasPriceGwei) {
    const gasPriceEth = gasPriceGwei / 1e9;
    const gasCostEth = gasUsed * gasPriceEth;
    return gasCostEth;
  }
  
  const gasUsed = 2966562;      // Gas units consumed by the operation
  const gasPriceGwei = 31;     // Gas price in Gwei
  
  const gasCostEth = calculateGasCost(gasUsed, gasPriceGwei);
  console.log(`Gas Cost in ETH: ${gasCostEth} ETH`);

  // 8.sol addToPunkAttributesList() = 2819662 gas
  // 256.sol addToPunkAttributesList() = 2816748 gas

  //8.sol deployement cost     --      3078698 gas
  //256.sol deployement cost   --      2872847 gas

  //8 addPunkList              --      2819662 gas
  //256.sol addPunkList        --      2816748 gas

  //8 addPunkImage              --      1269729 gas
  //256.sol addPunkImage        --      1269626 gas