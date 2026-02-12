This is a POST request to the Croma API to apply a voucher during the checkout process. The request includes various headers such as access token, client ID, content type, and customer hash. The response status code is 200 OK, indicating that the request was successful.

Payload
{"gvRequest":"6o9c/A3McOsexCndcLQODoDcwHFUTJRTFDq2KIAw7LjNVeXI2ViAl0b0DECHzOXUksRMUnloIiMP+2Ejg8tBnitwOW6XcRdmrUF9ZUyj3/8GdEpO+vTKEK6/FLdZslovsBMzpJZ4bWPgT+2Bn16qS159/2N3jPWrwMBMhyMGk1Ll+mH+f1UxY1VdpcNEJTjf"}

<!-- 
Real value of voucher: CVFTCS9377 [face value:10000; exp: jun 11 2024 from scribd]
  -->
General

Request URL
https://api.croma.com/user/allchannels/v1/ae6d0072ad99f3abbe4092d68388c6ae/checkout/applyVoucher/263955792897
Request Method
POST
Status Code
200 OK
Remote Address
[2600:1417:75::17c1:7240]:443
Referrer Policy
strict-origin-when-cross-origin


Reuest Headers
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
Lg0Yc+JilRJIWIkxM6yR614CImuQlR8NYX8/Yfsbdglx7CzvGhmR5mq7ZZX/vf4Iwq6Cu9VeKMW2R9ZHQv7A3VT+ffGOMDqTDOe99nLVGWGvG3GcqhQVBd7pw1bbXWa7vHN22LBOGfwWkCzAJ682/jyjOhHt+1HFxkcIDXnSHPAjyh9Mb9Caq/ebNxGzJ0jnmQTwTwFlOPOz88KnFYbkzACOhHuNWrgKzTQIpo5xZxlh0gtN3A0h71MkzBQymQL1w+7e9P/9iJH3ceimF94tb7djkxT/vNtwUah1iXfbS85i+gngNatfwVWDQpHbkmZYJHLANAFJR/OwDX8eKD/2bg==
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
    "gvRequest": "6o9c_A3McOsexCndcLQODrYDDoLbBg4_KxNQeFJQCpkFH1oHb3svYILpOL7ManiQlWPU4KZtht-gMSHQiGJE-mgq6i-LIq1X2jIQ3EfZeknEoU1FRjgRnsroTSHIKO49GuiKTsZe8y9gV-z0UxxzJFQA5VLuFziWCz8P8vVcJdKjD6TIg9xJsWaQlFJ6Z0ZXAPkRx58VlV87gpEaNFfPWc3ruavdZEoyfgiRtz5IE0k"
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
0.3472c117.1770558513.dc03bfa0
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
Sun, 08 Feb 2026 13:48:33 GMT
expires
0
pragma
no-cache
request-context
appId=cid-v1:8a027b7f-7450-437d-9b4c-a47116067af5
server-timing
cdn-cache; desc=MISS
server-timing
edge; dur=52
server-timing
origin; dur=398
server-timing
ak_p; desc="1770558513119_398553652_3691233184_44862_8166_93_0_219";dur=1
set-cookie
bm_sz=CAD4D2CCA26CC1FA37760222050AAAF9~YAAQNHLBF/XiaiicAQAAqeGCPR4HHzwiQyt2CvzqNtlcGm5EulPfh0Dfz7CGbwxTUclxO2UNieiq+VxVUYWYzVVbCtndUK/qKKdN5pv3h9jSNhHW2v9SRG/t/VSRzbqiP5FOZj1uChoDuEef4zoua928i5vgP/MNVwAOG7LJf53JMXFakldP2Fdg7Dxhxx15Qx25Rmpz7Pwt7fLgp0WNvEoR3eeLoUwOmExY3H8ElRQexV0Mlp4eodjof90lcZYsDFcDea+wK34/uaobKPZ3NMsObTuP86m+ao2PTmf5DIgPz0uPprheWjwiG9pts5x+jzqWjNhCTxugiglI9wIeTm/SVU6VMNbOxojTA6+2e9kNq8Qzs0cklb4j306QWx4a2ApO2p9SXPhBDWIfW+sb~4535088~3618884; Domain=.croma.com; Path=/; Expires=Sun, 08 Feb 2026 17:48:33 GMT; Max-Age=14400
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