/** Принимает телефон в формате
 * +7-962-920-82-91
 * возвращает в формате
 * +7 (962) 920-82-91
 * */
const formatPhoneForForm = (phone: string) => {
    phone = phone.replace('-', ' (')
    phone = phone.replace('-', ') ')
    return phone
}

export default formatPhoneForForm
