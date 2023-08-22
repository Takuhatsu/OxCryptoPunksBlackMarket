const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OxCryptoPunksBlackMarket", function () {
  it("should mint up to 50 punks per transaction", async function () {
    const MyContract = await ethers.getContractFactory(
      "OxCryptoPunksBlackMarket"
    );
    const myContract = await MyContract.deploy();

    const [user1, user2, user3] = await ethers.getSigners();

    const punkPrice = 7000000000000000;

    const mintTxUser1Punk0 = await myContract.connect(user1).getPunk(1, {
      value: punkPrice,
    });
    await mintTxUser1Punk0.wait();

    const mintTxUser2Punks = await myContract.connect(user2).getPunk(45, {
      value: BigInt(punkPrice * 45),
    });
    await mintTxUser2Punks.wait();

    const totalSupply = await myContract.totalSupply();
    console.log("Total Supply after minting:", totalSupply.toString());

    try {
      const mintTxUser3Punks = await myContract.connect(user3).getPunk(56, {
        value: BigInt(punkPrice * 56),
      });
      await mintTxUser3Punks.wait();
    } catch (error) {
      console.log("::Error:", error.message);
    }
  });
});
