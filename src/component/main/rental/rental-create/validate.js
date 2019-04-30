
export const validate = (values, props) => {
    const errors = {}
    if (!values.title)
        errors.title = "Hãy nhập tên"
    else if (values.title.length < 6)
        errors.title = "Tên quá ngắn"
    else if (values.title.length > 50)
        errors.title = "Tên quá dài"
    if (!values.city)
        errors.city = "Hãy nhập thành phố"
    if (!values.address)
        errors.address = "Hãy nhập địa chỉ"
    else if (values.address.length < 6)
        errors.title = "Địa chỉ quá ngắn"
    else if (values.address.length > 50)
        errors.title = "Địa chỉ quá dài"
    if (!values.category)
        errors.category = "Hãy chọn loại hình"
    if (!values.bedrooms)
        errors.bedrooms = "Hãy nhập số phòng"
    else if (values.bedrooms > 10)
        errors.bedrooms = "Không hợp lệ"
    if (!values.bathrooms)
        errors.bathrooms = "Hãy nhập số phòng"
    else if (values.bathrooms > 10)
        errors.bedrooms = "Không hợp lệ"
    if (!values.people)
        errors.people = "Hãy nhập số người"
    else if (values.people > 10)
        errors.bedrooms = "Không hợp lệ"
    if (!values.price)
        errors.price = "Hãy nhập giá tiền"
    if (!values.description)
        errors.description = "Hãy nhập mô tả"
    else if(values.description.length < 6)
        errors.description = "Mô tả quá ngắn"
    if (!values.image)
        errors.image = "Hãy chọn hình"
    return errors
}