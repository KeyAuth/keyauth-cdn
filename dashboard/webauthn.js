/**
 * creates a new FIDO2 registration
 * @returns {undefined}
 */
function newregistration() {

    let name = document.getElementById('webauthn_name').value;
	if (!name) {
        window.alert('Must specify name for WebAuthn device');
        return;
    }
	
    if (!window.fetch || !navigator.credentials || !navigator.credentials.create) {
        window.alert('Browser not supported.');
        return;
    }
  
    // get default args
    window.fetch('../api/dashboard/webauthn.php?fn=getCreateArgs', {method:'GET',cache:'no-cache'}).then(function(response) {
        return response.json();

        // convert base64 to arraybuffer
    }).then(function(json) {

        // error handling
        if (json.success === false) {
            throw new Error(json.msg);
        }

        // replace binary base64 data with ArrayBuffer. a other way to do this
        // is the reviver function of JSON.parse()
        recursiveBase64StrToArrayBuffer(json);
        return json;

       // create credentials
    }).then(function(createCredentialArgs) {
        console.log(createCredentialArgs);
        return navigator.credentials.create(createCredentialArgs);

        // convert to base64
    }).then(function(cred) {
        return {
            clientDataJSON: cred.response.clientDataJSON  ? arrayBufferToBase64(cred.response.clientDataJSON) : null,
            attestationObject: cred.response.attestationObject ? arrayBufferToBase64(cred.response.attestationObject) : null
        };

        // transfer to server
    }).then(JSON.stringify).then(function(AuthenticatorAttestationResponse) {
        return window.fetch('../api/dashboard/webauthn.php?fn=processCreate&name=' + name, {method:'POST', body: AuthenticatorAttestationResponse, cache:'no-cache'});

        // convert to JSON
    }).then(function(response) {
        return response.json();

        // analyze response
    }).then(function(json) {
       if (json.success) {
           window.alert(json.msg || 'registration success');
	   location.reload();
       } else {
           throw new Error(json.msg);
       }

       // catch errors
    }).catch(function(err) {
        window.alert(err.message || 'unknown error occured');
    });
}


/**
 * checks a FIDO2 registration
 * @returns {undefined}
 */
function checkregistration() {

    if (!window.fetch || !navigator.credentials || !navigator.credentials.create) {
        window.alert('Browser not supported.');
        return;
    }

    // get default args
    window.fetch('../api/dashboard/webauthn.php?fn=getGetArgs', {method:'GET',cache:'no-cache'}).then(function(response) {
        return response.json();

        // convert base64 to arraybuffer
    }).then(function(json) {

        // error handling
        if (json.success === false) {
            throw new Error(json.msg);
        }

        // replace binary base64 data with ArrayBuffer. a other way to do this
        // is the reviver function of JSON.parse()
        recursiveBase64StrToArrayBuffer(json);
        return json;

       // create credentials
    }).then(function(getCredentialArgs) {
        return navigator.credentials.get(getCredentialArgs);

        // convert to base64
    }).then(function(cred) {
        console.log(cred);
        return {
            id: cred.rawId ? arrayBufferToBase64(cred.rawId) : null,
            clientDataJSON: cred.response.clientDataJSON  ? arrayBufferToBase64(cred.response.clientDataJSON) : null,
            authenticatorData: cred.response.authenticatorData ? arrayBufferToBase64(cred.response.authenticatorData) : null,
            signature: cred.response.signature ? arrayBufferToBase64(cred.response.signature) : null,
            userHandle: cred.response.userHandle ? arrayBufferToBase64(cred.response.userHandle) : null
        };

        // transfer to server
    }).then(JSON.stringify).then(function(AuthenticatorAttestationResponse) {
        return window.fetch('../api/dashboard/webauthn.php?fn=processGet', {method:'POST', body: AuthenticatorAttestationResponse, cache:'no-cache'});

        // convert to json
    }).then(function(response) {
        return response.json();

        // analyze response
    }).then(function(json) {
       if (json.success) {
	   window.location.replace('../app');
       } else {
           throw new Error(json.msg);
       }

       // catch errors
    }).catch(function(err) {
        window.alert(err.message || 'unknown error occured');
    });
}

/**
 * convert RFC 1342-like base64 strings to array buffer
 * @param {mixed} obj
 * @returns {undefined}
 */
function recursiveBase64StrToArrayBuffer(obj) {
    let prefix = '=?BINARY?B?';
    let suffix = '?=';
    if (typeof obj === 'object') {
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                let str = obj[key];
                if (str.substring(0, prefix.length) === prefix && str.substring(str.length - suffix.length) === suffix) {
                    str = str.substring(prefix.length, str.length - suffix.length);

                    let binary_string = window.atob(str);
                    let len = binary_string.length;
                    let bytes = new Uint8Array(len);
                    for (let i = 0; i < len; i++)        {
                        bytes[i] = binary_string.charCodeAt(i);
                    }
                    obj[key] = bytes.buffer;
                }
            } else {
                recursiveBase64StrToArrayBuffer(obj[key]);
            }
        }
    }
}

/**
 * Convert a ArrayBuffer to Base64
 * @param {ArrayBuffer} buffer
 * @returns {String}
 */
function arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa(binary);
}
