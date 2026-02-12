This is a POST request to the Croma API to apply a voucher during the checkout process. The request includes various headers such as access token, client ID, content type, and customer hash. The response status code is 200 OK, indicating that the request was successful.

Payload
{"gvRequest":"6o9c/A3McOsexCndcLQODoDcwHFUTJRTFDq2KIAw7Lij4+66tA8od8xxa5PCzYBiksRMUnloIiMP+2Ejg8tBnitwOW6XcRdmrUF9ZUyj3/8GdEpO+vTKEK6/FLdZslovsBMzpJZ4bWPgT+2Bn16qS159/2N3jPWrwMBMhyMGk1Ll+mH+f1UxY1VdpcNEJTjf"}
<!-- 
Real value of voucher: CV9DA7FH72 [face value:10000; exp: jun 11 2024 from scribd]
  -->
General

Request URL
https://api.croma.com/user/allchannels/v1/ae6d0072ad99f3abbe4092d68388c6ae/checkout/applyVoucher/263955792897
Request Method
POST
Status Code
200 OK
Remote Address
[2600:1417:75::687c:3613]:443
Referrer Policy
strict-origin-when-cross-origin


ReQuest Headers
:authority
api.croma.com
:method
POST
:path
/user/allchannels/v1/ae6d0072ad99f3abbe4092d68388c6ae/checkout/applyVoucher/263955792897
:scheme
https
accept
application/json, text/plain, */*
accept-encoding
gzip, deflate, br, zstd
accept-language
en-US,en;q=0.9
accesstoken
5dc3a15a-879e-4665-9cf1-ea2ba42bb480
client_id
CROMA-WEB-APP
content-length
208
content-type
application/json
csc_code
null
customerhash
ae6d0072ad99f3abbe4092d68388c6ae
incallreqheader
sgVd4akj6pAZ9Sfj+NTuZQIwyabuhmuJcpRX5DPCotlgx2vIG/7niene9E4c8ehVPok0rx/G7qYpYhYDtLKrjO2roaIlSy0ya1ZtyS23VuSg7sLVcCl5Z4yxDdLiU6UUMVJ09PbsuAU7q5X8sJQEjmhYC+7/Kzfm0QwcYRYtoafwRauuECgKTQIHv5jfgw7RFxaJa4+bPqkTYgmxNbLndkrXdCppvG+1CnQST9g++WA+A8gcb6snOezjgUCAEcOLuysCwCr7G5bPpMuhJUbE008bm1TYJLAqe5ycRompLMr5Qj5GLhA9yvO2qM3JyXq6smKDT3IHyv8XXJWJRSfg2Q==
origin
https://www.croma.com
priority
u=1, i
referer
https://www.croma.com/
sec-ch-ua
"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"
sec-ch-ua-mobile
?0
sec-ch-ua-platform
"Windows"
sec-fetch-dest
empty
sec-fetch-mode
cors
sec-fetch-site
same-site
source
null
user-agent
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36


Response
{
    "gvDetails": null,
    "customErrorMsg": null,
    "cardSpecificErrorMsg": null,
    "balAmountPayable": null,
    "gvRequest": "6o9c_A3McOsexCndcLQODleShwHVsx0vPdd-R1r0_DfzZv1QlDpLOgc5uw8DZeGJlWPU4KZtht-gMSHQiGJE-mgq6i-LIq1X2jIQ3EfZekl4yLszlt8RQP3xEK-9n8zQGuiKTsZe8y9gV-z0UxxzJFQA5VLuFziWCz8P8vVcJdKjD6TIg9xJsWaQlFJ6Z0ZXAPkRx58VlV87gpEaNFfPWc3ruavdZEoyfgiRtz5IE0k"
}



Response Headers
access-control-allow-credentials
true
access-control-allow-origin
https://www.croma.com
access-control-expose-headers
Transfer-Encoding,Connection,Request-Context,Vary,X-Content-Type-Options,X-XSS-Protection,X-Frame-Options,Date,accessToken,SSOstatus,client_id,customerHash
accesstoken
5dc3a15a-879e-4665-9cf1-ea2ba42bb480
akamai-cache-status
NotCacheable from child
akamai-grn
0.0f367c68.1770558899.26034751
cache-control
no-cache, no-store, max-age=0, must-revalidate
client_id
CROMA-WEB-APP
content-length
342
content-type
application/json
customerhash
ae6d0072ad99f3abbe4092d68388c6ae
date
Sun, 08 Feb 2026 13:55:00 GMT
expires
0
pragma
no-cache
request-context
appId=cid-v1:8a027b7f-7450-437d-9b4c-a47116067af5
server-timing
cdn-cache; desc=MISS
server-timing
edge; dur=608
server-timing
origin; dur=350
server-timing
ak_p; desc="1770558899426_1752970767_637749073_95624_9904_147_0_219";dur=1
set-cookie
bm_sz=E2455B9C8AB8646190E144105796A372~YAAQDzZ8aGUk6SGcAQAAq8iIPR4E2M4PZCTkf+LlF83Wg9pbTTykfAOjo8P8rwfI9g5CrROciJcD5hGfMt8MV+Zgzyq2/EZCsR64hzn5HBfPAqp7Pt470rIZyQ+laalvLtcV1xXZ+LdBjvksguvtnKA8KLRC1n72aLS3aSzdKEG3DoV6I+mAdVBVuElbMDHX2yxBS2qypypVvwb9HgsFG3Lca3o7eSkm5J+nfTS+815g4RlrAIeFCLfyYwVPjPvWk/xcZQAmSH64ay/qQy2LT6Ppn3mJGqdo/Rah7723nRCIytszICnQU78efAKErH5IGnFvR/YRhqHItXRHxP1zrREUSej9HJ0NAN77/sy7AnDHk0Em48c46CgY0+3T5tLjKVdbJEQUS1JwCiYVEm7A~3486003~3355449; Domain=.croma.com; Path=/; Expires=Sun, 08 Feb 2026 17:54:59 GMT; Max-Age=14399
ssostatus
active
strict-transport-security
max-age=16070400; includeSubDomains
x-content-type-options
nosniff
x-frame-options
SAMEORIGIN
x-xss-protection
1; mode=block