import { DatePicker, Space } from 'antd';
import moment from "moment";

const DateSelect = ({formData, setFormData, to}) => {
    const disable = (current) => {
        if (to) {
            return current.valueOf() < moment().subtract(1, "day") | current.valueOf() > moment(to).add(1, "day");
        } else {
            return current.valueOf() < moment().subtract(1, "day");
        }
        

    }

    return (
        <div className="cotainer-fluid d-flex justify-content-start align-items-center px-0">
            <div className="mx-0">
                <Space direction="vertical">
                    <DatePicker 
                        placeholder="Check in"
                        onChange={(date, dateString) => setFormData({...formData, from: dateString})}
                        disabledDate={(current) => disable(current)}
                    />
                </Space>
            </div>
            <div className="mx-0">
                <Space direction="vertical">
                    <DatePicker 
                        placeholder="Chect out"
                        onChange={(date, dateString) => setFormData({...formData, to: dateString})} 
                        disabledDate={(current) => disable(current)}
                    />
                </Space>
            </div>
        </div>
        
    )
}

export default DateSelect;