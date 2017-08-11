import fetch from 'node-fetch';
const login = require('./login.json');

async function go() {
    let body = JSON.stringify(login);

    let authUrl = 'https://idmsa.apple.com/appleauth/auth/signin';
    let headers = { 'Content-Type': 'application/json' };

    let resp = await fetch(authUrl, { method: 'POST', headers, body });
    let cookie = resp.headers.get('set-cookie');

    console.log(`Status ${resp.status}`);
    console.log(`Headers ${JSON.stringify(cookie, undefined, 1)}`);

    let xcodeUrl = 'https://download.developer.apple.com/Developer_Tools/Xcode_9_beta_5/Xcode_9_beta_5.xip';
    let resp2 = await fetch(xcodeUrl, { credentials: 'include', headers: { 'Cookie': cookie } } as any);
    console.log(resp2.url);
}

go();
