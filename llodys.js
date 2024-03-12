const urlToDecode = "frmLogin%3AstrCustomerLogin_userID=BALARABE2020&frmLogin%3AstrCustomerLogin_pwd=Consultant12&frmLogin=frmLogin&submitToken=3839736&target=&hdn_mobile=&dclinkjourid=TBmacn91swzRpT06eMW4HaiuUpXlGWRX&wup_url=https%3A%2F%2Fwup-16c9d93d.lloydsbank.co.uk%2Fclient%2Fv3%2Fweb%2Fwup%3Fcid%3Dkarma&hasJS=true&frmLogin%3AbtnLogin1=null"

const extractedData = {}
const keyValuePairs = urlToDecode.split('&');
console.log(keyValuePairs)
keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split('=')
    const extractedkey = decodeURIComponent(key)
    extractedData[extractedkey] = decodeURIComponent(value)
})

console.log(extractedData)

const timestamp = 1705412688;
const expirationDate = new Date(timestamp * 1000);
console.log(expirationDate)



console.log()

