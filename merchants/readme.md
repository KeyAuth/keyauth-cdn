# KeyAuth Merchant Guide

If you've been approved to be a merchant, you will need to follow this guide to have your merchant card set up. Your merchant information will be displayed on https://keyauth.cc/merchants

Providing malicious code, software, or anything that is against our terms of service will result in the immediate termination of your merchant card.

# Getting Started

* Create a PR on index.json - 
You will need to add your username to the index.json file. This will ensure that your merchant card is displayed on the website. The username must be lowercase and placed under the last added merchant.

* Create a PR with {username}.json in the root directory -
You will need to create a json file with the exact name as the username you added to the index.json file.

* Edit your {username}.json file with the following format:

```json
{
    "username": "your_username", // this should be the same username you put for the json file, but it doesn't have to be lowercase.
    "icon": "https://i.imgur.com/example.png", // don't use a link that will expire ... I will not publish your card if it constantly expires (GitHub profile pic url is highly recommended)
    "experience": "1+ year", // how long have you been programming?
    "bio": "Trust me, I'm a professional", // try to keep this under 100 characters.
    "programming_languages": ["C#", "C++", "JS"], // list of programming languages you know FOLLOW THE FORMAT!
    /*
    / Csharp = C#
    / CPlusPlus = C++
    / JavaScript = JS
    / TypeScript = TS
    / GoLang = GO
    / Hypertext Preprocessor = PHP 
    / Python = PY
    / Java = Java
    / VisualBasic = VB
    / Rust = Rust
    / Ruby = Ruby 
    / Perl = Perl
    / Batch = Bat
    / Lua = Lua
    */
    "socials": {
        "twitter": "https://twitter.com/username",
        "youtube": "https://youtube.com/username",
        "github": "https://github.com/username",
        "discord": "https://discord.gg/username",
        "telegram": "https://t.me/username"
    }
}

