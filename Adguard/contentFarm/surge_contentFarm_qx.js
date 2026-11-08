let rHead = '<head>';
let newStyle = '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/89jnxz5cy4-ship-it/Adblock4limbo/main/CSS/contentFarm.css">';
let rBody = '</body>';
let newJavaScript = '<script src="https://raw.githubusercontent.com/89jnxz5cy4-ship-it/Adblock4limbo/main/Adguard/contentFarm/contentFarm.js"></script></body>';
let body = $response.body
.replace(rHead, newStyle)
.replace(rBody, newJavaScript);
$done({body});