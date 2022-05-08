import { DatePicker, Space } from 'antd';
import monent from "moment";

const DateSelect = ({formData, setFormData}) => {

    return (
        <div className="cotainer-fluid d-flex mt-4 mb-3 justify-content-start align-items-center px-0">
            <div className="mx-0">
                <Space direction="vertical">
                    <DatePicker 
                        placeholder="Check in"
                        onChange={(date, dateString) => setFormData({...formData, from: dateString})}
                        disabledDate={(current) => current && current.valueOf() < monent().subtract(1, "day")}
                    />
                </Space>
            </div>
            <div className="mx-0">
                <Space direction="vertical">
                    <DatePicker 
                        placeholder="Chect out"
                        onChange={(date, dateString) => setFormData({...formData, to: dateString})} 
                        disabledDate={(current) => current && current.valueOf() < monent().subtract(1, "day")}
                    />
                </Space>
            </div>
        </div>
        
    )
}

export default DateSelect;