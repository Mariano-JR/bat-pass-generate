export default function generatePass() {
    let password: string = ''
    const chars: string = 'Aa@$#1234567890BbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxWwYyZz!*+-/'
    const passwordLength = 8

    for(let index = 1; index <= passwordLength; index++) {
        password += chars.charAt(
            Math.floor(Math.random() * chars.length)
        )
    }


    return password
}