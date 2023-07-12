export function validateEmail(inputStr) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!regex.test(inputStr)) {
        return "Invalid email address"
    }

    return ""
}

export function validateUsername(inputStr) {
    const minUsernameLength = 4
    const maxUsernameLength = 20

    if (inputStr.length < minUsernameLength ||
        inputStr.length > maxUsernameLength) {
        return `Username must be between ${minUsernameLength} to ${maxUsernameLength} characters long`
    }

    // Check for invalid characters
    const regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(inputStr)) {
        return "Username contains invalid characters";
    }

    return "";
}

export function validatePassword(inputStr) {
    const minPassLength = 4
    const maxPassLength = 20

    if (inputStr.length < minPassLength ||
        inputStr.length > maxPassLength)
        return `Password must be between ${minPassLength} to ${maxPassLength} characters long`

    const regex = /^[a-zA-Z0-9!@#$%^&*()-_=+{}[\]|\\;:'",.<>/?]+$/
    if (!regex.test(inputStr)) {
        return "Password contains invalid characters";
    }

    return "";
}