// get a frequency map of transactions
// where each tx is an array
// [companyName, amount, date]

// how many transactions are being processed for each company?
// which company has the fewest transactions
// which company has the most transactions

const transactions = [
  ['goPuff', 9.99, '03/04/2022'],
  ['instacart', 45.5, '02/14/2022'],
  ['goPuff', 9.99, '03/11/2022'],
  ['goPuff', 9.99, '03/18/2022'],
  ['instacart', 45.5, '03/24/2022'],
  ['hmart', 22.85, '03/29/2022'],
];

const buildHashTableFromTx = (listOfTx) => {
  const result = {};

  for (const tx of listOfTx) {
    const [companyName, _amount, _date] = tx;

    if (companyName in result) {
      result[companyName]++;
    } else {
      result[companyName] = 1;
    }
  }

  return result;
};

const hashedTxList = buildHashTableFromTx(transactions);

const getMostFrequentlyTransactedCompanyName = (hashTable) => {
  let max = { name: '', value: 0 };

  for (key in hashTable) {
    const numTx = hashTable[key];

    if (max.value < numTx) {
      max.name = key;
      max.value = numTx;
    }
  }

  return max.name;
};

console.dir(buildHashTableFromTx(transactions), { depth: null });
console.log(getMostFrequentlyTransactedCompanyName(hashedTxList));
