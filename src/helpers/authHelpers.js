export const validateAuthData = (data, validationType) => {
    console.log(data)
    let isValid = false;
    if (validationType === 'login') {
        isValid = !!data.userName && !!data.password;
    } else if (validationType === 'register') {
        isValid = !!data.userName && !!data.password && !!data.email;
    } else if (validationType === 'change-password') {
        isValid = !!data.oldPassword && !!data.newPassword
        && data.newPassword === data.confirmPassword;
    }

    return isValid;
}