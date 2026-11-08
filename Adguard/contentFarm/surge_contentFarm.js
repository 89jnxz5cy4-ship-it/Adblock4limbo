let regex_head = '<head>';
let Style = '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/89jnxz5cy4-ship-it/Adblock4limbo/main/CSS/contentFarm.css">';
let regex_body = '</body>';
let JavaScript = '<script async="async" src="https://raw.githubusercontent.com/89jnxz5cy4-ship-it/Adblock4limbo/main/Adguard/contentFarm/contentFarm.js"></script></body>';
let body = $response.body
.replace(regex_head, Style)
.replace(regex_body, JavaScript);
$done({body});