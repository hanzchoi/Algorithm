//9
//10 20 20 10 10 30 50 10 20
//Sample Output

//3
// Complete the sockMerchant function below.

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = 9;

function sockMerchant(n, ar) {
    let pairs = 0;
    //console.log(typeof ar[0])
    const sockHash = ar.reduce((acc, currentValue) => {

        // console.log("acc ",acc)
        // console.log("current ", currentValue);
        if (!acc[currentValue]) {
            acc[currentValue] = 1;
        } else {
            acc[currentValue] = parseInt(acc[currentValue]) + 1
        }
        return acc
        //return acc[currentValue]
    }, {});

    console.log(sockHash)
    Object.keys(sockHash).forEach(key => {
        pairs += Math.floor(sockHash[key] / 2)
    });
    console.log(pairs)
    return pairs
}

sockMerchant(n, arr);
