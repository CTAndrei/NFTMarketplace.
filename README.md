# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

Pentru a porni corect proiectul trb: - sa ti crezi o retea local cu ajutorul hardhat-ului folosit comanda: npx hardhat node( si sa l lasi pornit )
                                     - sa te conectezi cu portofelul crypto la acea retea
                                     - sa dai deploy la contract pe acea retea cu ajutorul comenzii npx hardhat run scripts/deploy.js --network localhost
                                     - sa pornesti aplicatia cu ajutorul comenzii npm run dev
